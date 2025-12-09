const { Pool } = require('pg');
require('dotenv').config();

// In-memory store for local development (when PostgreSQL is not available)
let inMemoryStore = [];

// Configure PostgreSQL client
const createPostgresPool = () => {
  // Check if DATABASE_URL is provided (Render.com sets this automatically)
  if (process.env.DATABASE_URL) {
    return new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    });
  }

  // Check if individual PostgreSQL credentials are provided
  if (process.env.DB_HOST && process.env.DB_NAME) {
    return new Pool({
      host: process.env.DB_HOST,
      port: process.env.DB_PORT || 5432,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
    });
  }

  // Return null to use in-memory fallback
  return null;
};

const pool = createPostgresPool();

// Database adapter that works with both PostgreSQL and in-memory store
const db = {
  // Initialize database (create tables)
  async initialize() {
    if (pool) {
      try {
        // Create content table if it doesn't exist
        await pool.query(`
          CREATE TABLE IF NOT EXISTS content (
            id VARCHAR(255) PRIMARY KEY,
            type VARCHAR(50) NOT NULL,
            content TEXT NOT NULL,
            caption TEXT,
            thought_count INTEGER DEFAULT 0,
            created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
            metadata JSONB
          );
        `);

        // Create index on created_at for faster sorting
        await pool.query(`
          CREATE INDEX IF NOT EXISTS idx_content_created_at
          ON content(created_at DESC);
        `);

        console.log('✅ PostgreSQL tables initialized');
      } catch (error) {
        console.error('Error initializing PostgreSQL:', error);
        throw error;
      }
    }
  },

  // Put item
  async put(item) {
    if (pool) {
      // PostgreSQL implementation
      const query = `
        INSERT INTO content (id, type, content, caption, thought_count, created_at, metadata)
        VALUES ($1, $2, $3, $4, $5, $6, $7)
        ON CONFLICT (id)
        DO UPDATE SET
          type = EXCLUDED.type,
          content = EXCLUDED.content,
          caption = EXCLUDED.caption,
          thought_count = EXCLUDED.thought_count,
          created_at = EXCLUDED.created_at,
          metadata = EXCLUDED.metadata
      `;

      const values = [
        item.id,
        item.type,
        item.content,
        item.caption || null,
        item.thoughtCount || 0,
        item.createdAt,
        item.metadata ? JSON.stringify(item.metadata) : null
      ];

      await pool.query(query, values);
    } else {
      // In-memory fallback
      const existingIndex = inMemoryStore.findIndex(i => i.id === item.id);
      if (existingIndex >= 0) {
        inMemoryStore[existingIndex] = item;
      } else {
        inMemoryStore.push(item);
      }
    }
  },

  // Scan/get all items (paginated)
  async scan(limit = 10, offset = 0) {
    if (pool) {
      // PostgreSQL implementation
      const query = `
        SELECT
          id,
          type,
          content,
          caption,
          thought_count as "thoughtCount",
          created_at as "createdAt",
          metadata
        FROM content
        ORDER BY created_at DESC
        LIMIT $1 OFFSET $2
      `;

      const countQuery = 'SELECT COUNT(*) as total FROM content';

      const [dataResult, countResult] = await Promise.all([
        pool.query(query, [limit, offset]),
        pool.query(countQuery)
      ]);

      const items = dataResult.rows.map(row => ({
        ...row,
        createdAt: row.createdAt.toISOString(),
        metadata: row.metadata || undefined
      }));

      const total = parseInt(countResult.rows[0].total);
      const hasMore = offset + limit < total;

      return {
        items,
        total,
        hasMore
      };
    } else {
      // In-memory fallback
      const sortedStore = [...inMemoryStore].sort((a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
      );

      const items = sortedStore.slice(offset, offset + limit);
      const total = sortedStore.length;
      const hasMore = offset + limit < total;

      return {
        items,
        total,
        hasMore
      };
    }
  },

  // Get item by ID
  async get(id) {
    if (pool) {
      // PostgreSQL implementation
      const query = `
        SELECT
          id,
          type,
          content,
          caption,
          thought_count as "thoughtCount",
          created_at as "createdAt",
          metadata
        FROM content
        WHERE id = $1
      `;

      const result = await pool.query(query, [id]);
      if (result.rows.length === 0) return null;

      const row = result.rows[0];
      return {
        ...row,
        createdAt: row.createdAt.toISOString(),
        metadata: row.metadata || undefined
      };
    } else {
      // In-memory fallback
      return inMemoryStore.find(item => item.id === id);
    }
  },

  // Clear all items (for seeding)
  async clear() {
    if (pool) {
      // PostgreSQL implementation
      await pool.query('DELETE FROM content');
    } else {
      // In-memory fallback
      inMemoryStore = [];
    }
  },

  // Check if using in-memory store
  isInMemory() {
    return !pool;
  },

  // Get connection info
  getConnectionInfo() {
    if (pool) {
      return 'PostgreSQL';
    }
    return 'In-Memory Store';
  },

  // Close pool (for graceful shutdown)
  async close() {
    if (pool) {
      await pool.end();
    }
  }
};

module.exports = db;

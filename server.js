const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

// Import routes
const contentRoutes = require('./src/routes/content');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Serve static files from 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.use('/api/content', contentRoutes);

// Root route - serve homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// 404 handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({
    error: 'API endpoint not found'
  });
});

// 404 handler for other routes - serve homepage for client-side routing
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({
    error: 'Internal server error',
    message: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Auto-seed database on startup (for development with in-memory store)
const { seedDatabase } = require('./src/data/seedData');
const db = require('./src/config/database');

async function initializeServer() {
  try {
    // Only auto-seed if using in-memory store
    if (db.isInMemory()) {
      console.log('📦 Auto-seeding database with mock content...');
      await seedDatabase(false); // Pass false to prevent process.exit()
      console.log('✅ Database seeded successfully\n');
    }
  } catch (error) {
    console.error('⚠️  Error during auto-seeding:', error.message);
  }
}

// Start server
app.listen(PORT, async () => {
  console.log(`
╔═══════════════════════════════════════╗
║         Kirat Server Running          ║
╚═══════════════════════════════════════╝

🚀 Server: http://localhost:${PORT}
📡 API: http://localhost:${PORT}/api/content
🏥 Health: http://localhost:${PORT}/health
🌍 Environment: ${process.env.NODE_ENV || 'development'}

Press Ctrl+C to stop
  `);

  // Initialize after server starts
  await initializeServer();
});

// Graceful shutdown
process.on('SIGTERM', async () => {
  console.log('SIGTERM received, shutting down gracefully...');
  await db.close();
  process.exit(0);
});

process.on('SIGINT', async () => {
  console.log('\nSIGINT received, shutting down gracefully...');
  await db.close();
  process.exit(0);
});

module.exports = app;

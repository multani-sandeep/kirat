const db = require('../config/database');

// Content service layer
const contentService = {
  /**
   * Get paginated content
   * @param {number} page - Page number (1-indexed)
   * @param {number} limit - Items per page
   * @returns {Promise<{data: Array, pagination: Object}>}
   */
  async getAllContent(page = 1, limit = 10) {
    try {
      // Calculate offset for SQL LIMIT/OFFSET
      const offset = (page - 1) * limit;

      // Fetch paginated data
      const result = await db.scan(limit, offset);

      return {
        data: result.items,
        pagination: {
          page,
          limit,
          total: result.total,
          hasMore: result.hasMore
        }
      };
    } catch (error) {
      console.error('Error in getAllContent:', error);
      throw error;
    }
  },

  /**
   * Get content by ID
   * @param {string} id - Content ID
   * @returns {Promise<Object|null>}
   */
  async getContentById(id) {
    try {
      const item = await db.get(id);
      return item || null;
    } catch (error) {
      console.error('Error in getContentById:', error);
      throw error;
    }
  }
};

module.exports = contentService;

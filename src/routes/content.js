const express = require('express');
const router = express.Router();
const contentService = require('../services/contentService');

/**
 * GET /api/content
 * Get paginated content
 * Query params:
 *   - page: Page number (default: 1)
 *   - limit: Items per page (default: 10)
 */
router.get('/', async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    // Validate parameters
    if (page < 1) {
      return res.status(400).json({
        error: 'Invalid page number. Must be >= 1'
      });
    }

    if (limit < 1 || limit > 50) {
      return res.status(400).json({
        error: 'Invalid limit. Must be between 1 and 50'
      });
    }

    // Fetch content
    const result = await contentService.getAllContent(page, limit);

    res.json(result);
  } catch (error) {
    console.error('Error fetching content:', error);
    res.status(500).json({
      error: 'Failed to fetch content',
      message: error.message
    });
  }
});

/**
 * GET /api/content/:id
 * Get single content item by ID
 */
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const content = await contentService.getContentById(id);

    if (!content) {
      return res.status(404).json({
        error: 'Content not found'
      });
    }

    res.json(content);
  } catch (error) {
    console.error('Error fetching content by ID:', error);
    res.status(500).json({
      error: 'Failed to fetch content',
      message: error.message
    });
  }
});

module.exports = router;

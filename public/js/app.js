// Kirat - Main Application Logic

// API Configuration
const API_BASE_URL = '/api';
let currentPage = 1;
const ITEMS_PER_PAGE = 10;
let isLoading = false;
let hasMoreContent = true;

// DOM Elements
let contentFeed;
let loadingIndicator;
let endOfFeed;
let errorMessage;

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Get DOM elements
  contentFeed = document.getElementById('content-feed');
  loadingIndicator = document.getElementById('loading-indicator');
  endOfFeed = document.getElementById('end-of-feed');
  errorMessage = document.getElementById('error-message');

  // Load initial content
  loadInitialContent();
});

// Load initial content
async function loadInitialContent() {
  await loadContent();
}

// Fetch and display content
async function loadContent() {
  // Prevent multiple simultaneous loads
  if (isLoading || !hasMoreContent) return;

  isLoading = true;
  showLoadingIndicator();
  hideError();

  try {
    const response = await fetch(
      `${API_BASE_URL}/content?page=${currentPage}&limit=${ITEMS_PER_PAGE}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();
    const { data, pagination } = result;

    // Render content items
    if (data && data.length > 0) {
      renderContent(data);
    }

    // Update pagination state
    currentPage++;
    hasMoreContent = pagination.hasMore;

    // Show end of feed message if no more content
    if (!hasMoreContent) {
      showEndOfFeed();
    }

  } catch (error) {
    console.error('Error loading content:', error);
    showError();
  } finally {
    isLoading = false;
    hideLoadingIndicator();
  }
}

// Render content items
function renderContent(items) {
  items.forEach(item => {
    const card = createContentCard(item);
    contentFeed.appendChild(card);
  });
}

// Create content card based on type
function createContentCard(item) {
  const card = document.createElement('div');
  card.className = 'content-card bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200';
  card.setAttribute('data-content-id', item.id);

  // Create card content
  const typeBadge = getTypeBadge(item.type);
  const contentArea = getContentArea(item);
  const actionBar = createActionBar(item);

  // Format date
  const dateStr = formatDate(item.createdAt);

  card.innerHTML = `
    <div class="flex justify-between items-start mb-3">
      <div class="text-xs font-medium text-gray-500">
        ${dateStr}
      </div>
      ${typeBadge}
    </div>
    ${contentArea}
    ${actionBar}
  `;

  return card;
}

// Get type badge HTML
function getTypeBadge(type) {
  const badges = {
    text: '<span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Text</span>',
    image: '<span class="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Image</span>',
    video: '<span class="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-semibold rounded-full">Video</span>'
  };
  return badges[type] || badges.text;
}

// Get content area HTML based on type
function getContentArea(item) {
  switch (item.type) {
    case 'text':
      return `<div class="text-gray-800 leading-relaxed text-base">${escapeHtml(item.content)}</div>`;

    case 'image':
      return `
        <div>
          <img src="${escapeHtml(item.content)}"
               alt="${escapeHtml(item.caption || 'Content image')}"
               class="w-full h-auto rounded-lg mb-3 object-cover"
               loading="lazy"
               onerror="this.src='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 800 600%22><rect fill=%22%23ddd%22 width=%22800%22 height=%22600%22/><text x=%2250%%22 y=%2250%%22 fill=%22%23999%22 text-anchor=%22middle%22 dy=%22.3em%22 font-family=%22sans-serif%22 font-size=%2224%22>Image not available</text></svg>'">
          ${item.caption ? `<p class="text-sm text-gray-600 italic">${escapeHtml(item.caption)}</p>` : ''}
        </div>
      `;

    case 'video':
      return `
        <div>
          <div class="video-wrapper rounded-lg mb-3 bg-black">
            <iframe src="${escapeHtml(item.content)}"
                    class="absolute top-0 left-0 w-full h-full rounded-lg"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    loading="lazy"></iframe>
          </div>
          ${item.metadata?.title ? `<p class="font-medium mb-1 text-gray-900">${escapeHtml(item.metadata.title)}</p>` : ''}
          ${item.metadata?.duration ? `<p class="text-sm text-gray-500">Duration: ${escapeHtml(item.metadata.duration)}</p>` : ''}
        </div>
      `;

    default:
      return `<div class="text-gray-800">${escapeHtml(item.content)}</div>`;
  }
}

// Create action bar HTML
function createActionBar(item) {
  return `
    <div class="flex items-center gap-4 mt-4 text-sm border-t border-gray-100 pt-4">
      <span class="text-gray-600 flex items-center gap-1">
        <span class="text-base">💭</span>
        <span>${item.thoughtCount || 0} thoughts</span>
      </span>
      <button class="action-button text-gray-400 cursor-not-allowed flex items-center gap-1 hover:text-gray-500" disabled title="Coming soon">
        <span class="text-base">❤️</span>
        <span class="hidden sm:inline">Like</span>
      </button>
      <button class="action-button text-gray-400 cursor-not-allowed flex items-center gap-1 hover:text-gray-500" disabled title="Coming soon">
        <span class="text-base">💬</span>
        <span class="hidden sm:inline">Add Thought</span>
      </button>
      <button class="action-button text-gray-400 cursor-not-allowed flex items-center gap-1 hover:text-gray-500" disabled title="Coming soon">
        <span class="text-base">🔖</span>
        <span class="hidden sm:inline">Save</span>
      </button>
    </div>
  `;
}

// Format date string
function formatDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diffInSeconds = Math.floor((now - date) / 1000);

  // Less than 1 minute
  if (diffInSeconds < 60) {
    return 'Just now';
  }

  // Less than 1 hour
  if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60);
    return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
  }

  // Less than 1 day
  if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600);
    return `${hours} hour${hours > 1 ? 's' : ''} ago`;
  }

  // Less than 7 days
  if (diffInSeconds < 604800) {
    const days = Math.floor(diffInSeconds / 86400);
    return `${days} day${days > 1 ? 's' : ''} ago`;
  }

  // Default: show date
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// UI state functions
function showLoadingIndicator() {
  if (loadingIndicator) {
    loadingIndicator.classList.remove('hidden');
  }
}

function hideLoadingIndicator() {
  if (loadingIndicator) {
    loadingIndicator.classList.add('hidden');
  }
}

function showEndOfFeed() {
  if (endOfFeed) {
    endOfFeed.classList.remove('hidden');
  }
}

function showError() {
  if (errorMessage) {
    errorMessage.classList.remove('hidden');
  }
}

function hideError() {
  if (errorMessage) {
    errorMessage.classList.add('hidden');
  }
}

// Export for use in other scripts
window.loadContent = loadContent;

// Infinite Scroll Implementation for Kirat

// Configuration
const SCROLL_THRESHOLD = 0.8; // Trigger at 80% of page height
const DEBOUNCE_DELAY = 100; // ms

// Scroll state
let scrollTimeout = null;
let isScrollEnabled = true;

// Initialize infinite scroll when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initializeInfiniteScroll();
});

// Set up infinite scroll
function initializeInfiniteScroll() {
  // Add scroll event listener with debouncing
  window.addEventListener('scroll', handleScrollDebounced, { passive: true });

  // Also check on window resize
  window.addEventListener('resize', handleScrollDebounced, { passive: true });

  console.log('Infinite scroll initialized');
}

// Debounced scroll handler
function handleScrollDebounced() {
  // Clear existing timeout
  if (scrollTimeout) {
    clearTimeout(scrollTimeout);
  }

  // Set new timeout
  scrollTimeout = setTimeout(() => {
    handleScroll();
  }, DEBOUNCE_DELAY);
}

// Main scroll handler
function handleScroll() {
  if (!isScrollEnabled) return;

  // Calculate scroll position
  const scrollTop = window.scrollY || window.pageYOffset;
  const windowHeight = window.innerHeight;
  const documentHeight = document.documentElement.scrollHeight;

  // Calculate scroll percentage
  const scrollPercentage = (scrollTop + windowHeight) / documentHeight;

  // Check if we've reached the threshold
  if (scrollPercentage >= SCROLL_THRESHOLD) {
    // Trigger content load
    triggerContentLoad();
  }
}

// Trigger content loading
function triggerContentLoad() {
  // Check if loadContent function exists (defined in app.js)
  if (typeof window.loadContent === 'function') {
    window.loadContent();
  } else {
    console.warn('loadContent function not found');
  }
}

// Enable/disable infinite scroll
function enableInfiniteScroll() {
  isScrollEnabled = true;
}

function disableInfiniteScroll() {
  isScrollEnabled = false;
}

// Export functions for external use
window.enableInfiniteScroll = enableInfiniteScroll;
window.disableInfiniteScroll = disableInfiniteScroll;

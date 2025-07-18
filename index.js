// Import core CSS styles
import './dist/cssanimation.css';
import './dist/cssanimation-utility.css';

// Letter, word, and line animation enhancements
import './dist/plugins/ca-letteranimation.js';

if (typeof window !== 'undefined' && window.__CA_DEBUG) {
  window.addEventListener('DOMContentLoaded', () => {
    console.log('[cssanimation.io] Core CSS & letter animations loaded');
  });
}

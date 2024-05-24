import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Component to scroll to top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the pathname changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;

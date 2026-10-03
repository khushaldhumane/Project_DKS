import { useEffect, useRef } from 'react';

/**
 * Custom hook that adds a 'visible' class to elements when they scroll into view.
 * Works with the `.reveal` CSS class defined in index.css.
 */
export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    // Observe all children with .reveal class
    const revealElements = node.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    // Also observe the node itself if it has .reveal
    if (node.classList.contains('reveal')) {
      observer.observe(node);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

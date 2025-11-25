import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import { animated, useSpring, useSpringRef } from 'react-spring';

// Configure Prism to not auto-highlight (we'll control it manually)
Prism.manual = true;

/**
 * Escapes HTML special characters to prevent XSS and ensure proper display
 */
const escapeStr = (str) => str
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

/**
 * CodePanel component displays code snippets with scroll-based reveal animation
 * As the user scrolls, code is progressively revealed character by character
 * Once fully revealed, it transitions to show the child component (GitRepoCard)
 *
 * @param {Object} scrollRef - Reference to the scroll container
 * @param {string} language - Programming language for syntax highlighting
 * @param {string} snippet - Code snippet to display
 * @param {number} max - Scroll percentage threshold to complete reveal (0-1 scale)
 * @param {number} min - Scroll percentage threshold to start reveal (0-1 scale)
 * @param {ReactNode} children - Component to show after code is fully revealed
 * @param {string} className - Additional CSS classes
 */
export const CodePanel = ({
  scrollRef, language, snippet, max, min = 0, children, className,
}) => {
  const codeStr1 = useRef();
  const springRef = useSpringRef();

  /**
   * Scroll listener that progressively reveals code based on scroll position
   * - Calculates scroll percentage
   * - Reveals code characters proportionally to scroll progress
   * - Transitions to show child component when scroll exceeds max threshold
   */
  const listener = (e) => {
    const { height } = e.target.getBoundingClientRect();
    const top = e.target.scrollTop;
    const percent = Math.ceil((top / height) * 100000) / 100000;

    if (percent < max) {
      // Still in reveal phase - show partial code
      const adjPercent = percent - min < 0 ? 0 : percent - min;
      const val = Math.ceil(snippet.length * adjPercent);
      codeStr1.current.innerHTML = escapeStr(snippet.slice(0, val));
      springRef.start({ opacity: 0 }); // Hide child component
      Prism.highlightElement(codeStr1.current); // Apply syntax highlighting
    } else {
      // Reveal complete - show child component
      codeStr1.current.innerHTML = '';
      springRef.start({ opacity: 1 }); // Show child component
      Prism.highlightElement(codeStr1.current);
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    const ref = scrollRef.current;
    ref.addEventListener('scroll', listener);
    return () => {
      ref.removeEventListener('scroll', listener);
    };
  });

  const style = useSpring({ opacity: 0, ref: springRef });

  return (
    <div className={`flex-1 flex items-center justify-center pointer-events-auto ${className}`}>
      <div className="w-full lg:max-w-screen-md 2xl:max-w-xl h-40 lg:h-96 overflow-visible relative bg-gray-800 flex items-center justify-center pointer-events-auto">
        {/* Code snippet display */}
        <div className="absolute w-full top-0">
          <pre className="bg-gray-800 m-0 code-block text-white w-full h-full">
            <code ref={codeStr1} className={`language-${language} w-full`} />
          </pre>
        </div>
        {/* Child component overlay (GitRepoCard) */}
        <animated.div style={style} className="absolute top-0 w-full h-full rounded-lg bg-white p-1">
          {children}
        </animated.div>
      </div>
    </div>
  );
};

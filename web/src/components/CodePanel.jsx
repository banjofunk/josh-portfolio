import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import { animated, useSpring, useSpringRef } from 'react-spring';

const escapeStr = (str) => str
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

export const CodePanel = ({
  scrollRef, language, snippet, max, min = 0, children, className,
}) => {
  const codeStr1 = useRef();
  const springRef = useSpringRef();

  const listener = (e) => {
    const { height } = e.target.getBoundingClientRect();
    const top = e.target.scrollTop;
    const percent = Math.ceil((top / height) * 1000) / 1000;

    if (percent < max) {
      const adjPercent = percent - min < 0 ? 0 : percent - min;
      const val = Math.ceil(snippet.length * adjPercent);
      codeStr1.current.innerHTML = escapeStr(snippet.slice(0, val));
      springRef.start({ opacity: 0 });
      Prism.highlightElement(codeStr1.current);
    } else {
      codeStr1.current.innerHTML = '';
      // codeStr1.current.innerHTML = escapeStr(snippet);
      springRef.start({ opacity: 1 });
      Prism.highlightElement(codeStr1.current);
    }
  };

  useEffect(() => {
    const ref = scrollRef.current;
    ref.addEventListener('scroll', listener);
    return () => {
      ref.removeEventListener('scroll', listener);
    };
  });

  const style = useSpring({ opacity: 0, ref: springRef });

  return (
    <div className={`flex-1 flex items-center justify-center ${className}`}>
      <div className="w-full lg:max-w-screen-md 2xl:max-w-xl h-40 lg:h-96 overflow-visible relative bg-gray-800 flex items-center justify-center">
        <div className="absolute w-full top-0">
          <pre className="bg-gray-800 m-0 code-block text-white w-full h-full">
            <code ref={codeStr1} className={`language-${language} w-full`} />
          </pre>
        </div>
        <animated.div style={style} className="absolute top-0 w-full h-full rounded-lg bg-white p-1 lg:p-2">
          {children}
        </animated.div>
      </div>
    </div>
  );
};

import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
// https://fullscale.io/blog/11-best-it-recruiters-in-denver-colorado/
// import { JoshGuy } from './components/JoshGuy';

import './App.css';
import './prism.css';

/**
 *
  josh pages
    - self-promotion is uncomfortable, but a quote would look nice here
    - Responsive: im not a designer i just flex a lot
    - Frameworks: React, Amplify, Tailwind, Serverless
    - Where i live
    - What im looking for Work / Life
 */

const JSCode = `const App = props => {
      return (
        <div>
          <h1>Josh & React JS</h1>
          <div>
            <h2>Tailwind CSS</h2>
            <h2>react-spring</h2>
            <h2>lottie</h2>
          </div>
        </div>
      );
    };
    `;

const escapeStr = (str) => str
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#039;');

const App = () => {
  const scrollContainerRef = useRef();
  const scrollRef = useRef({ height: 0, top: 0, percent: 0 });
  const codeStr1 = useRef();
  const codeStr2 = useRef();

  const listener = (e) => {
    const { height } = e.target.getBoundingClientRect();
    const top = e.target.scrollTop;
    const percent = Math.ceil((top / height) * 1000) / 1000;
    scrollRef.current = { height, top, percent };

    if (percent < 1.1) {
      const val = Math.ceil(JSCode.length * percent);
      codeStr1.current.innerHTML = escapeStr(JSCode.slice(0, val));
      Prism.highlightElement(codeStr1.current);
    }

    if (codeStr2.current && percent < 3.1) {
      const adjPercent = percent - 2 < 0 ? 0 : percent - 2;
      const val = Math.ceil(JSCode.length * adjPercent);
      codeStr2.current.innerHTML = escapeStr(JSCode.slice(0, val));
      Prism.highlightElement(codeStr2.current);
    }
  };

  useEffect(() => {
    scrollContainerRef.current.addEventListener('scroll', listener);
    return () => {
      scrollContainerRef.current.removeEventListener('scroll', listener);
    };
  });

  return (
    <div ref={scrollContainerRef} className="w-full h-screen overflow-scroll">
      <div style={{ height: '400vh' }} className="w-full min-h-screen ">
        <div className="sticky top-0 w-full h-screen flex items-center justify-center bg-sky-500">
          <div className="flex-1 h-full flex flex-col p-8">
            <div className="w-full max-w-sm flex flex-col space-y-1 font-serif text-right">
              <h1 className="text-7xl text-gray-800 font-medium">josh garner</h1>
              <h2 className="text-4xl text-gray-800 pr-2">full stack developer</h2>
            </div>
          </div>
          <div className="w-full max-w-screen-sm h-full">
            <Code codeRef={codeStr1} language="javascript" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Code = ({ codeRef, language }) => (
  <div className="w-full h-full">
    <pre className="bg-gray-800 m-0 code-block text-white w-full h-full">
      <code ref={codeRef} className={`language-${language} w-full`} />
    </pre>
  </div>
);

export default App;

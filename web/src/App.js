import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import { JoshGuy } from './components/JoshGuy';
import { Monitor } from './components/Monitor';

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

    if (percent < 3.1) {
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
        <div className="sticky top-0 w-full h-screen flex items-center justify-center bg-blue-900">
          <JoshGuy className="h-40" />
          <div className="w-full max-w-screen-sm h-96 relative">
            <Monitor className="absolute w-full h-full fill-gray-400 stroke-gray-900" />
            <div className="w-full h-full py-8 px-4 md:px-8">
              <Code codeRef={codeStr1} language="javascript" />
            </div>
          </div>
        </div>
        <div className="h-screen" />

        <div className="sticky top-0 w-full h-screen flex items-center justify-center bg-red-900">
          <div className="rounded bg-white w-full max-w-screen-md h-72">
            <Code codeRef={codeStr2} language="javascript" />
          </div>
        </div>
      </div>
    </div>
  );
};

const Code = ({ codeRef, language }) => (
  <div className="w-full h-full">
    <pre className="bg-gray-800 border-gray-900 border-2 m-0 code-block rounded text-white w-full h-full">
      <code ref={codeRef} className={`language-${language} w-full`} />
    </pre>
  </div>
);

export default App;

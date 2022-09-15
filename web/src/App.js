import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import { Cloud } from './Cloud';
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

  return (
    <div ref={scrollContainerRef} className="w-full h-screen overflow-scroll">
      <div style={{ height: '400vh' }} className="w-full min-h-screen">
        <div className="sticky top-0 w-full h-screen flex items-center justify-center bg-gray-800">
          <div className="flex-1 h-full flex flex-col p-8">
            <Header />
            <CodeBubble language="javascript" scrollContainerRef={scrollContainerRef} max={1.1} />
          </div>
          <SidePanel scrollContainerRef={scrollContainerRef} />
        </div>
      </div>
    </div>
  );
};

const SidePanel = ({ scrollContainerRef }) => (
  <div className="w-full max-w-screen-sm h-full">
    <div className="w-full h-full">
      <div className="bg-sky-800 m-0 code-block text-white w-full h-full">
        <CodeBubble language="javascript" scrollContainerRef={scrollContainerRef} min={2} max={3.1} />
      </div>
    </div>
  </div>

);

const Header = () => (
  <div className="w-full flex items-center justify-between">
    <div className="flex flex-col space-y-1 font-serif text-right text-sky-800 opacity-60">
      <h1 className="text-7xl font-medium">josh garner</h1>
      <h2 className="text-4xl pr-2">full stack developer</h2>
    </div>
    <div className="w-64">
      <Cloud />
    </div>
  </div>

);

const CodeBubble = ({
  scrollContainerRef, language, max, min = 0,
}) => {
  const codeStr1 = useRef();

  const listener = (e) => {
    const { height } = e.target.getBoundingClientRect();
    const top = e.target.scrollTop;
    const percent = Math.ceil((top / height) * 1000) / 1000;

    if (percent < max) {
      const adjPercent = percent - min < 0 ? 0 : percent - min;
      const val = Math.ceil(JSCode.length * adjPercent);
      codeStr1.current.innerHTML = escapeStr(JSCode.slice(0, val));
      Prism.highlightElement(codeStr1.current);
    }
  };

  useEffect(() => {
    scrollContainerRef.current.addEventListener('scroll', listener);
    return () => {
      scrollContainerRef.current.removeEventListener('scroll', listener);
    };
  });

  return (
    <div className="w-96 h-96 rounded-full bg-gray-900 shadow overflow-hidden flex items-center justify-center">
      <div className="w-full h-full">
        <pre className="bg-sky-800 m-0 code-block text-white w-full h-full">
          <code ref={codeStr1} className={`language-${language} w-full`} />
        </pre>
      </div>
    </div>
  );
};

export default App;

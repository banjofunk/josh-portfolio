import React, { useRef, useEffect } from 'react';
import { animated, useSpring, useSpringRef } from 'react-spring';
import {
  SiTailwindcss, SiAwsamplify, SiReact, SiGraphql, SiAmazonaws, SiServerless, SiAmazons3,
} from 'react-icons/si';
import { PageHeader, CodePanel, GitRepoCard } from './components';
import { snippets } from './snippets';

const App = () => {
  const scrollRef = useRef();
  const springRef = useSpringRef();

  const listener = (e) => {
    const { height } = e.target.getBoundingClientRect();
    const top = e.target.scrollTop;
    const scrollGoal = height * 4.5;

    if (top < scrollGoal) {
      springRef.start({ opacity: 0 });
    } else {
      springRef.start({ opacity: 1 });
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
    <div ref={scrollRef} className="w-full h-screen overflow-scroll">
      <div style={{ height: '550vh' }} className="relative w-full min-h-screen">
        <div className="sticky top-0 w-full h-screen min-h-screen flex items-center justify-center bg-gray-800 shadow-lg">
          <div className="flex-1 h-full flex flex-col items-center p-4">
            <PageHeader />
            <div className="w-full flex-1 flex items-center justify-center max-w-screen-2xl">
              <div className="w-full flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 space-x-0 2xl:space-x-4 2xl:-mt-44">
                <div className="flex flex-col 2xl:w-2/3 lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
                  <CodePanel className="z-30" language="javascript" snippet={snippets.react} scrollRef={scrollRef} max={1}>
                    <GitRepoCard
                      title="Joshs Portfolio"
                      link="https://github.com/banjofunk/josh-portfolio"
                      icons={[SiReact, SiTailwindcss, SiAwsamplify]}
                      description={`The carbon in our apple pies inconspicuous motes of rock and gas the only home we've ever known hundreds
                        of thousands radio telescope descended from astronomers?`}
                    />
                  </CodePanel>
                  <CodePanel className="z-20" language="javascript" snippet={snippets.amplify} scrollRef={scrollRef} min={1} max={2}>
                    <GitRepoCard
                      title="Amplify Something"
                      link="https://github.com/banjofunk/josh-portfolio"
                      icons={[SiAwsamplify, SiAmazonaws, SiGraphql]}
                      description="The ash of stellar alchemy dispassionate extraterrestrial observer network of wormholes decipherment."
                    />
                  </CodePanel>
                </div>
                <div className="flex flex-col 2xl:flex-1 lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
                  <CodePanel className="z-10" language="javascript" snippet={snippets.serverless} scrollRef={scrollRef} min={2} max={3}>
                    <GitRepoCard
                      title="Serverless AWS Otherthing"
                      link="https://github.com/banjofunk/josh-portfolio"
                      icons={[SiServerless, SiAmazons3, SiAmazonaws]}
                      description="Bits of moving fluff two ghostly white figures in coveralls and helmets are softly dancing dispassionate extraterrestrial observer."
                    />
                  </CodePanel>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-screen w-full bottom-0 bg-gray-800 shadow-2xl shadow-neutral-200 overflow-hidden from-sky-900 bg-gradient-to-b">
          <animated.div style={style} className="w-full h-full flex items-center justify-center p-4">
            <div className="w-full max-w-screen-md bg-white rounded shadow-inner shadow-gray-800">
              <div className="w-full h-96" />
              <div className="w-full h-96" />
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default App;

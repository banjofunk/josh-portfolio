import React, { useRef, useEffect } from 'react';
import { animated, useSpring, useSpringRef } from 'react-spring';
import {
  SiTailwindcss, SiAwsamplify, SiReact, SiGraphql, SiAmazonaws, SiServerless, SiAmazons3,
} from 'react-icons/si';
import { PageHeader, CodePanel, GitRepoCard } from './components';
import { snippets } from './snippets';

const App = () => {
  const scrollRef = useRef();
  const infoRef = useRef();
  const springRef = useSpringRef();

  const listener = (e) => {
    const { height } = e.target.getBoundingClientRect();
    const top = e.target.scrollTop;
    const scrollGoal = height * 4.5;
    const revealDur = height * 0.25;
    const remaining = (scrollGoal - top) > revealDur ? revealDur : (scrollGoal - top);
    const opacity = (revealDur - remaining) / revealDur;

    springRef.start({ opacity });
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
          <div className="flex-1 h-full flex flex-col items-center py-2 lg:py-4 px-4">
            <PageHeader />
            <div className="w-full flex-1 flex lg:items-center justify-center max-w-screen-2xl">
              <div className="w-full flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 space-x-0 2xl:space-x-4 2xl:-mt-44">
                <div className="flex flex-col 2xl:w-2/3 lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
                  <CodePanel className="z-30" language="javascript" snippet={snippets.react} scrollRef={scrollRef} max={1}>
                    <GitRepoCard
                      title="React - TailwindCSS"
                      link="https://github.com/banjofunk/josh-portfolio"
                      icons={[SiReact, SiTailwindcss, SiAwsamplify]}
                      description="The carbon in our apple pies inconspicuous motes of rock and gas?"
                    />
                  </CodePanel>
                  <CodePanel className="z-20" language="javascript" snippet={snippets.amplify} scrollRef={scrollRef} min={1} max={2}>
                    <GitRepoCard
                      title="Amplify - GraphQL"
                      link="https://github.com/banjofunk/josh-portfolio"
                      icons={[SiAwsamplify, SiAmazonaws, SiGraphql]}
                      description="The ash of stellar alchemy dispassionate extraterrestrial observer network of wormholes decipherment."
                    />
                  </CodePanel>
                </div>
                <div className="flex flex-col 2xl:flex-1 border-0">
                  <CodePanel className="z-10" language="javascript" snippet={snippets.serverless} scrollRef={scrollRef} min={2} max={3}>
                    <GitRepoCard
                      title="Serverless - CloudFormation"
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
          <animated.div style={style} className="w-full h-full flex items-center justify-center p-4 opacity-0">
            <div className="w-full max-w-sm sm:max-w-screen-sm lg:max-w-screen-md bg-white rounded-full shadow p-2">
              <div className="w-full bg-sky-800 rounded-full p-4">
                <div className="w-full flex flex-col space-y-6 py-6 items-center justify-center">
                  <div className="w-full flex space-x-2 items-end justify-center">
                    <div className="rounded-full w-20 h-20 overflow-hidden">
                      <img src="/joshco.jpeg" alt="josh profile pic" className="w-full h-full" />
                    </div>
                    <div className="block">
                      <p className="text-lg text-white  leading-snug">Josh Garner</p>
                      <p className="text-lg text-white  leading-snug">full stack developer</p>
                      <p className="text-lg text-white  leading-snug">your company here</p>
                    </div>
                  </div>
                  <div className="border-b-2 border-sky-600 rounded w-full max-w-xs h-0" />
                  <div className="flex w-full justify-center">

                    <div className="flex flex-col space-y-2 items-center justify-center">

                      <img src="/expectTech.png" alt="josh profile pic" className="w-44" />
                      <div className="flex space-x-2">
                        <p className="text-lg text-white  leading-snug">p: 123-123-1231</p>
                        <p className="text-lg text-white  leading-snug">e: email@email.com</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </animated.div>
        </div>
      </div>
    </div>
  );
};

export default App;

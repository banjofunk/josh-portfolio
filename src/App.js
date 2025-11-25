import React, { useRef, useEffect } from 'react';
import { animated, useSpring, useSpringRef } from 'react-spring';
import { BiChevronDown } from 'react-icons/bi';
import {
  SiTailwindcss, SiAwsamplify, SiReact, SiGraphql, SiAmazonaws, SiServerless, SiAmazons3,
} from 'react-icons/si';
import {
  CodePanel, ContactInfo, GitRepoCard, PageHeader,
} from './components';
import { snippets } from './snippets';

const App = () => {
  const scrollRef = useRef();
  const springRef = useSpringRef();
  const titleSpringRef = useSpringRef();
  const secondarySpringRef = useSpringRef();

  const listener = (e) => {
    const { height } = e.target.getBoundingClientRect();
    const top = e.target.scrollTop;
    const scrollGoal = height * 4.5;
    const revealDur = height * 0.25;
    const remaining = (scrollGoal - top) > revealDur ? revealDur : (scrollGoal - top);
    const opacity = (revealDur - remaining) / revealDur;

    springRef.start({ opacity });
    secondarySpringRef.start({
      opacity: remaining ? 0 : 1,
      delay: remaining ? 0 : 100,
      immediate: !!remaining,
    });
    titleSpringRef.start({
      opacity: top ? 0 : 1,
      delay: top ? 0 : 200,
    });
  };

  useEffect(() => {
    const ref = scrollRef.current;
    ref.addEventListener('scroll', listener);
    return () => {
      ref.removeEventListener('scroll', listener);
    };
  });

  const style = useSpring({ opacity: 0, ref: springRef });
  const titleStyle = useSpring({ opacity: 1, ref: titleSpringRef });
  const secondaryStyle = useSpring({ opacity: 0, ref: secondarySpringRef });

  return (
    <div ref={scrollRef} className="w-full h-screen overflow-scroll">
      <div style={{ height: '550vh' }} className="relative w-full min-h-screen">
        <div className="sticky top-0 w-full h-screen min-h-screen flex items-center justify-center bg-gray-800 shadow-lg">
          <div className="flex-1 h-full flex flex-col items-center py-2 lg:py-4 px-4">
            <animated.div style={titleStyle} className="z-50 w-full max-w-screen h-0 overflow-visible pointer-events-none">
              <div className="z-30 h-screen w-full flex items-center justify-center">
                <div className="bg-radial-gradient via-transparent from-sky-900">
                  <div className="w-full max-w-sm flex flex-col items-center justify-center text-center">
                    <blockquote className="p-4 italic text-white quote text-xl opacity-75">
                      <p>Check out what Josh has been working on lately</p>
                    </blockquote>
                    <div className="h-0 overflow-visible opacity-25">
                      <BiChevronDown className=" mt-8 text-white w-10 h-10" />
                    </div>
                  </div>
                </div>
              </div>
            </animated.div>
            <div className="w-full px-4">
              <PageHeader />
            </div>
            <div className="w-full flex-1 flex lg:items-center justify-center max-w-screen-2xl">
              <div className="w-full flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 space-x-0 2xl:space-x-4 2xl:-mt-44">
                <div className="flex flex-col 2xl:w-2/3 lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
                  <CodePanel className="z-30" language="javascript" snippet={snippets.react} scrollRef={scrollRef} max={1}>
                    <GitRepoCard
                      title="React - TailwindCSS"
                      link="https://github.com/banjofunk/josh-portfolio"
                      icons={[SiReact, SiTailwindcss, SiAwsamplify]}
                      description="The code for this very site! ReactJS / TailwindCS."
                    />
                  </CodePanel>
                  <CodePanel className="z-20" language="GraphQL" snippet={snippets.amplify} scrollRef={scrollRef} min={1} max={2}>
                    <GitRepoCard
                      title="Amplify - Appsync Resolvers"
                      link="https://github.com/banjofunk/amplify-resolvers"
                      icons={[SiAwsamplify, SiAmazonaws, SiGraphql]}
                      description="This repo contains a few custom appsync (VTL) resolvers. elasticsearch  / geoJson / script aggregation"
                    />
                  </CodePanel>
                </div>
                <div className="flex flex-col 2xl:flex-1 border-0">
                  <CodePanel className="z-10" language="YAML" snippet={snippets.serverless} scrollRef={scrollRef} min={2} max={3}>
                    <GitRepoCard
                      title="Serverless - CloudFormation"
                      link="https://github.com/banjofunk/serverless-resources"
                      icons={[SiServerless, SiAmazons3, SiAmazonaws]}
                      description="Uses serverless cli to create various AWS resources including an example using S3 Object Lambda"
                    />
                  </CodePanel>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-screen w-full bottom-0 bg-gray-800 shadow-2xl shadow-neutral-200 overflow-hidden from-sky-900 bg-gradient-to-b">
          <div className="w-full h-0 overflow-visible">
            <animated.div style={secondaryStyle} className="w-full py-2 lg:py-4 px-8">
              <PageHeader secondary />
            </animated.div>
          </div>
          <animated.div style={style} className="w-full h-full flex flex-col items-center justify-center p-4 opacity-0">
            <div className="w-full max-w-lg aspect-square bg-gray-800 rounded-full shadow p-1.5">
              <div className="w-full h-full flex items-center bg-sky-900 rounded-full p-4">
                <div className="w-full flex flex-col space-y-6 py-6 items-center justify-center">
                  <div className="w-full flex space-x-4 items-center justify-center">
                    <div className="rounded-full w-20 h-20 border-2 border-white overflow-hidden">
                      <img src="/joshco.jpeg" alt="josh profile pic" className="w-full h-full" />
                    </div>
                    <div className="block">
                      <p className="text-lg lg:text-xl text-white leading-snug">Josh Garner</p>
                      <p className="text-sm lg:text-base text-gray-300 leading-snug">senior software engineer</p>
                      <p className="text-sm lg:text-base text-sky-500 leading-snug">your company here</p>
                    </div>
                  </div>
                  {/* <div className="border-2 border-gray-800 rounded w-full max-w-xs h-0" />
                  <ContactInfo /> */}
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

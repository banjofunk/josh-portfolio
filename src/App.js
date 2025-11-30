import React, { useRef, useEffect } from 'react';
import { animated, useSpring, useSpringRef } from 'react-spring';
import { BiChevronDown } from 'react-icons/bi';
import {
  SiTailwindcss, SiAwsamplify, SiReact, SiGraphql,
  SiAmazonaws, SiServerless, SiAmazons3, SiMarkdown,
} from 'react-icons/si';
import {
  CodePanel, GitRepoCard, PageHeader,
} from './components';
import { snippets } from './snippets';

/**
 * Main App component for Josh Garner's portfolio
 * Features scroll-based animations that reveal content as the user scrolls
 */
const App = () => {
  // Refs for scroll container and animation springs
  const scrollRef = useRef();
  const springRef = useSpringRef();
  const titleSpringRef = useSpringRef();
  const secondarySpringRef = useSpringRef();

  /**
   * Scroll event listener that controls animation states based on scroll position
   * - Fades out the initial title as user scrolls
   * - Reveals the bottom section (profile card) after scrolling past a threshold
   * - Shows secondary header when bottom section is visible
   */
  const listener = (e) => {
    const { height } = e.target.getBoundingClientRect();
    const top = e.target.scrollTop;
    const scrollGoal = height * 4.5; // Target scroll position for full reveal
    const revealDur = height * 0.25; // Duration/distance for reveal animation
    const remaining = (scrollGoal - top) > revealDur ? revealDur : (scrollGoal - top);
    const opacity = (revealDur - remaining) / revealDur;

    // Animate bottom section opacity based on scroll progress
    springRef.start({ opacity });

    // Show/hide secondary header based on whether bottom section is visible
    secondarySpringRef.start({
      opacity: remaining ? 0 : 1,
      delay: remaining ? 0 : 100,
      immediate: !!remaining,
    });

    // Fade out initial title when user starts scrolling
    titleSpringRef.start({
      opacity: top ? 0 : 1,
      delay: top ? 0 : 200,
    });
  };

  // Set up scroll event listener
  useEffect(() => {
    const ref = scrollRef.current;
    ref.addEventListener('scroll', listener);
    return () => {
      ref.removeEventListener('scroll', listener);
    };
  });

  // Initialize spring animations
  const style = useSpring({ opacity: 0, ref: springRef });
  const titleStyle = useSpring({ opacity: 1, ref: titleSpringRef });
  const secondaryStyle = useSpring({ opacity: 0, ref: secondarySpringRef });

  return (
    // Main scroll container
    <div ref={scrollRef} className="w-full h-screen overflow-scroll">
      {/* Extended height container (550vh) to enable scroll-based animations */}
      <div style={{ height: '640vh' }} className="relative w-full min-h-screen">

        {/* Sticky header section that stays in view while scrolling */}
        <div className="sticky top-0 w-full h-screen min-h-screen flex items-center justify-center bg-gray-800 shadow-lg">
          <div className="flex-1 h-full flex flex-col items-center py-2 lg:py-4 px-4">

            {/* Initial title overlay - fades out on scroll */}
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

            {/* Main page header */}
            <div className="w-full px-4">
              <PageHeader />
            </div>

            {/* Project showcase section with code panels and repository cards */}
            <div className="w-full flex-1 flex lg:items-center justify-center max-w-screen-2xl">
              {/* Grid layout: mobile (1 col), tablet (2x2), desktop (2x2) */}
              <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-4 2xl:-mt-44">
                {/* React/TailwindCSS Portfolio Project */}
                <CodePanel className="z-40" language="javascript" snippet={snippets.react} scrollRef={scrollRef} max={1}>
                  <GitRepoCard
                    title="React - TailwindCSS"
                    link="https://github.com/banjofunk/josh-portfolio"
                    icons={[SiReact, SiTailwindcss, SiAwsamplify]}
                    description="The code for this very site! ReactJS / TailwindCS."
                  />
                </CodePanel>

                {/* Amplify Resolvers Project */}
                <CodePanel className="z-30" language="GraphQL" snippet={snippets.amplify} scrollRef={scrollRef} min={1} max={2}>
                  <GitRepoCard
                    title="Amplify - Appsync Resolvers"
                    link="https://github.com/banjofunk/amplify-resolvers"
                    icons={[SiAwsamplify, SiAmazonaws, SiGraphql]}
                    description="This repo contains a few custom appsync (VTL) resolvers. elasticsearch  / geoJson / script aggregation"
                  />
                </CodePanel>

                {/* Serverless CloudFormation Project */}
                <CodePanel className="z-20" language="YAML" snippet={snippets.serverless} scrollRef={scrollRef} min={2} max={3}>
                  <GitRepoCard
                    title="Serverless - CloudFormation"
                    link="https://github.com/banjofunk/serverless-resources"
                    icons={[SiServerless, SiAmazons3, SiAmazonaws]}
                    description="Uses serverless cli to create various AWS resources including an example using S3 Object Lambda"
                  />
                </CodePanel>

                {/* AI Markdown Project */}
                <CodePanel className="z-10" language="markdown" snippet={snippets.markdown} scrollRef={scrollRef} min={3} max={4}>
                  <GitRepoCard
                    title="AI Markdown - Note Taking"
                    link="https://github.com/banjofunk/ai-markdown"
                    icons={[SiMarkdown, SiReact]}
                    description="AI-powered markdown note-taking application with intelligent analysis and insights."
                  />
                </CodePanel>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section - Profile card (revealed after scrolling) */}
        <div className="absolute h-screen w-full bottom-0 bg-gray-800 shadow-2xl shadow-neutral-200 overflow-hidden from-sky-900 bg-gradient-to-b">
          {/* Secondary header - appears when profile section is visible */}
          <div className="w-full h-0 overflow-visible">
            <animated.div style={secondaryStyle} className="w-full py-2 lg:py-4 px-8">
              <PageHeader secondary />
            </animated.div>
          </div>

          {/* Profile card with animated fade-in */}
          <animated.div style={style} className="w-full h-full flex flex-col items-center justify-center p-4 opacity-0">
            <div className="w-full max-w-lg aspect-square bg-gray-800 rounded-full shadow p-1.5">
              <div className="w-full h-full flex items-center bg-sky-900 rounded-full p-4">
                <div className="w-full flex flex-col space-y-6 py-6 items-center justify-center">
                  <div className="w-full flex space-x-4 items-center justify-center">
                    {/* Profile picture */}
                    <div className="rounded-full w-20 h-20 border-2 border-white overflow-hidden">
                      <img src="/joshco.jpeg" alt="josh profile pic" className="w-full h-full" />
                    </div>
                    {/* Profile information */}
                    <div className="block">
                      <p className="text-lg lg:text-xl text-white leading-snug">Josh Garner</p>
                      <p className="text-sm lg:text-base text-gray-300 leading-snug">senior software engineer</p>
                      <p className="text-sm lg:text-base text-sky-500 leading-snug">your company here</p>
                    </div>
                  </div>
                  {/* Contact info section (currently commented out) */}
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

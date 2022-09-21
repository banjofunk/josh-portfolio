import React, { useRef } from 'react';
import { SiTailwindcss, SiAwsamplify, SiReact } from 'react-icons/si';
import { PageHeader, CodePanel, GitRepoCard } from './components';

const App = () => {
  const scrollContainerRef = useRef();

  return (
    <div ref={scrollContainerRef} className="w-full h-screen overflow-scroll">
      <div style={{ height: '550vh' }} className="relative w-full min-h-screen">
        <div className="sticky top-0 w-full h-screen flex items-center justify-center bg-gray-800">
          <div className="flex-1 h-full flex flex-col items-center p-4">
            <PageHeader />
            <div className="w-full flex-1 flex items-center justify-center max-w-screen-2xl">
              <div className="w-full flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 space-x-0 2xl:space-x-4 2xl:-mt-44">
                <div className="flex flex-col 2xl:w-2/3 lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
                  <CodePanel language="javascript" scrollContainerRef={scrollContainerRef} max={1}>
                    <GitRepoCard
                      title="Joshs Portfolio"
                      link="https://github.com/banjofunk/josh-portfolio"
                      description={`The carbon in our apple pies inconspicuous motes of rock and gas the only home we've ever known hundreds
                        of thousands radio telescope descended from astronomers?`}
                    >
                      <SiReact className="w-8 h-8" />
                      <SiTailwindcss className="w-8 h-8" />
                      <SiAwsamplify className="w-8 h-8" />
                    </GitRepoCard>
                  </CodePanel>
                  <CodePanel language="javascript" scrollContainerRef={scrollContainerRef} min={1} max={2}>
                    <GitRepoCard
                      title="Amplify Something"
                      link="https://github.com/banjofunk/josh-portfolio"
                      description={`The carbon in our apple pies inconspicuous motes of rock and gas the only home we've ever known hundreds
                        of thousands radio telescope descended from astronomers?`}
                    >
                      <SiReact className="w-8 h-8" />
                      <SiTailwindcss className="w-8 h-8" />
                      <SiAwsamplify className="w-8 h-8" />
                    </GitRepoCard>
                  </CodePanel>
                </div>
                <div className="flex flex-col 2xl:flex-1 lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
                  <CodePanel language="javascript" scrollContainerRef={scrollContainerRef} min={2} max={3}>
                    <GitRepoCard
                      title="Serverless AWS Otherthing"
                      link="https://github.com/banjofunk/josh-portfolio"
                      description={`The carbon in our apple pies inconspicuous motes of rock and gas the only home we've ever known hundreds
                        of thousands radio telescope descended from astronomers?`}
                    >
                      <SiReact className="w-8 h-8" />
                      <SiTailwindcss className="w-8 h-8" />
                      <SiAwsamplify className="w-8 h-8" />
                    </GitRepoCard>
                  </CodePanel>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-screen w-full bottom-0 bg-sky-900 shadow-2xl shadow-neutral-200">
          <span>welp</span>
        </div>
      </div>
    </div>
  );
};

export default App;

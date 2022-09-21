import React, { useRef } from 'react';
import { SiTailwindcss, SiAwsamplify, SiReact, SiGraphql, SiAmazonaws, SiServerless, SiAmazons3 } from 'react-icons/si';
import { PageHeader, CodePanel, GitRepoCard } from './components';
import { snippets } from './snippets';

const App = () => {
  const scrollRef = useRef();

  return (
    <div ref={scrollRef} className="w-full h-screen overflow-scroll">
      <div style={{ height: '580vh' }} className="relative w-full min-h-screen">
        <div className="fixed pointer-events-none h-screen w-full top-0 bg-sky-900">
          <span>welp</span>
        </div>
        <div style={{ height: '420vh' }} className="relative w-full min-h-screen">
          <div className="sticky top-0 w-full lg:h-screen min-h-screen flex items-center justify-center bg-gray-800 shadow-lg">
            <div className="flex-1 h-full flex flex-col items-center p-4">
              <PageHeader />
              <div className="w-full flex-1 flex items-center justify-center max-w-screen-2xl">
                <div className="w-full flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 space-x-0 2xl:space-x-4 2xl:-mt-44">
                  <div className="flex flex-col 2xl:w-2/3 lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
                    <CodePanel language="javascript" snippet={snippets.react} scrollRef={scrollRef} max={1}>
                      <GitRepoCard
                        title="Joshs Portfolio"
                        link="https://github.com/banjofunk/josh-portfolio"
                        icons={[SiReact, SiTailwindcss, SiAwsamplify]}
                        description={`The carbon in our apple pies inconspicuous motes of rock and gas the only home we've ever known hundreds
                        of thousands radio telescope descended from astronomers?`}
                      />
                    </CodePanel>
                    <CodePanel language="javascript" snippet={snippets.amplify} scrollRef={scrollRef} min={1} max={2}>
                      <GitRepoCard
                        title="Amplify Something"
                        link="https://github.com/banjofunk/josh-portfolio"
                        icons={[SiAwsamplify, SiAmazonaws, SiGraphql]}
                        description="The ash of stellar alchemy dispassionate extraterrestrial observer network of wormholes decipherment."
                      />
                    </CodePanel>
                  </div>
                  <div className="flex flex-col 2xl:flex-1 lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-4">
                    <CodePanel
                      language="javascript"
                      snippet={snippets.serverless}
                      scrollRef={scrollRef}
                      min={2}
                      max={3}
                    >
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
        </div>
      </div>
    </div>
  );
};

export default App;

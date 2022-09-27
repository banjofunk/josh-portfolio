import { Cloud } from './Cloud';

export const PageHeader = () => (
  <div className="w-full flex items-center justify-between p-4 pt-0 z-30">
    <div className="flex flex-col space-y-2 font-serif text-right">
      <h1 className="text-2xl lg:text-7xl font-medium text-white">josh garner</h1>
      <h2 className="text-lg lg:text-2xl pr-2 text-sky-600">full stack developer</h2>
    </div>
    <Cloud className="w-20 lg:w-52 text-sky-900" />
  </div>
);

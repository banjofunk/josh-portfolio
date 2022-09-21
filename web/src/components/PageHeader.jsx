import { Cloud } from './Cloud';

export const PageHeader = () => (
  <div className="w-full flex items-center justify-between text-sky-600 pb-4">
    <div className="flex flex-col space-y-1 font-serif text-right">
      <h1 className="text-2xl lg:text-7xl font-medium">josh garner</h1>
      <h2 className="text-xl lg:text-4xl pr-2">full stack developer</h2>
    </div>
    <Cloud className="opacity-60 w-20 lg:w-64" />
  </div>
);

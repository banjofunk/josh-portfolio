import { Cloud } from './Cloud';

/**
 * PageHeader component displays the portfolio header with name and title
 *
 * @param {boolean} secondary - If true, uses dark text for light backgrounds
 */
export const PageHeader = ({ secondary }) => (
  <div className="w-full flex items-center justify-between p-4 pt-0 z-30">
    <div className="flex flex-col space-y-2 font-serif text-right">
      <h1 className={`text-2xl lg:text-7xl font-medium ${secondary ? 'text-gray-800' : 'text-white'}`}>josh garner</h1>
      <h2 className="text-lg lg:text-2xl pr-2 text-sky-600">full-stack developer</h2>
    </div>
    <Cloud className={`w-20 lg:w-52 ${secondary ? 'text-gray-800 opacity-90' : 'text-sky-800'}`} />
  </div>
);

import { SiGithub } from 'react-icons/si';

/**
 * GitRepoCard component displays information about a GitHub repository
 * Includes technology icons, title, description, and a link to view on GitHub
 *
 * @param {string} title - Repository title
 * @param {Array} icons - Array of React icon components to display
 * @param {string} link - GitHub repository URL
 * @param {string} description - Repository description
 */
export const GitRepoCard = ({
  title, icons, link, description,
}) => (
  <div className="w-full h-full flex flex-col items-center justify-center rounded-md bg-sky-900">
    {/* Technology icons header - hidden on mobile */}
    <div className="w-full h-12 bg-sky-600 rounded-t-md hidden lg:flex justify-evenly items-center text-white">
      {icons.map((Icon) => (
        <Icon key={Icon?.name} className="text-white h-5 w-5" />
      ))}
    </div>

    {/* Card content */}
    <div className="w-full flex-1 flex flex-col space-y-2 py-0 lg:py-4 px-4">
      <div className="w-full flex-1 flex flex-col pt-2 lg:pt-4 space-y-2 lg:space-y-4">
        <h2 className="text-base lg:text-xl font-semibold text-white">{title}</h2>
        <p className="text-sm lg:text-base text-white">{description}</p>
      </div>

      {/* GitHub link button */}
      <div className="w-full h-12 flex items-center justify-center">
        <button
          type="button"
          onClick={() => window.open(link)}
          className="w-full flex lg:flex justify-center items-center space-x-3 rounded bg-sky-600 px-4 py-0 h-8 lg:h-12 lg:py-2 shadow hover:shadow-md hover:opacity-90"
        >
          <SiGithub className="text-white w-5 h-5 lg:w-6 lg:h-6" />
          <span className="text-white text-base lg:text-lg font-medium">View on GitHub</span>
        </button>
      </div>
    </div>
  </div>
);

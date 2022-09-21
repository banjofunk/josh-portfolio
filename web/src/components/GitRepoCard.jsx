import { SiGithub } from 'react-icons/si';

export const GitRepoCard = ({ title, icons, link, description }) => (
  <div className="w-full h-full flex flex-col items-center justify-center rounded-md bg-sky-900">
    <div className="w-full h-12 bg-sky-600 rounded-t-md flex justify-evenly items-center text-white">
      {icons.map((Icon) => (
        <Icon className="text-white h-5 w-5" />
      ))}
    </div>
    <div className="w-full flex-1 flex flex-col space-y-2 p-4">
      <div className="w-full flex-1 flex flex-col pt-4 space-y-4">
        <h2 className="text-xl font-semibold text-white">{title}</h2>
        <p className="text-base text-white">{description}</p>
      </div>
      <div className="w-full flex items-center justify-center">
        <button
          type="button"
          onClick={() => window.open(link)}
          className="w-full flex justify-center space-x-3 rounded bg-sky-600 px-4 py-2 shadow hover:shadow-md hover:opacity-90"
        >
          <SiGithub className="text-white w-6 h-6" />
          <span className="text-white text-lg font-medium">View on GitHub</span>
        </button>
      </div>
    </div>
  </div>
);

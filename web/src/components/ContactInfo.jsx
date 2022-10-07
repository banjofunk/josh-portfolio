import { BsPhone, BsEnvelope } from 'react-icons/bs';

export const ContactInfo = () => {
  const phone = window.atob('MzAzLTk0Ni0zNDM2');
  const emailAddress = window.atob('Y2hyaXNAZXhwZWN0bGxjLmNvbQ==');
  const emailLink = `mailto:${emailAddress}?subject=Interested in Josh Garner`;

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col space-y-2 items-center justify-center">
        <img src="/expectTech.png" alt="josh profile pic" className=" w-56" />
        <div className="flex flex-col lg:flex-row space-y-4 space-x-0 lg:space-y-0 lg:space-x-4 items-center pt-2">
          <a href={emailLink} className="text-sm text-sky-600 hover:opacity-60">
            <div className="flex space-x-1 items-center">
              <BsEnvelope className="stroke-current w-4 h-4" />
              <span className="text-sm">
                {emailAddress}
              </span>
            </div>
          </a>
          <a href={`tel:${phone}`} className="text-lg text-sky-600 hover:opacity-60">
            <div className="flex space-x-1 items-center">
              <BsPhone className="stroke-current  w-4 h-4" />
              <span className="text-sm">
                {phone}
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>

  );
};

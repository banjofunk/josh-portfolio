import { BsPhone, BsEnvelope } from 'react-icons/bs';

/**
 * ContactInfo component displays contact information with email and phone
 * Contact details are base64-encoded to prevent scraping by bots
 */
export const ContactInfo = () => {
  // Decode contact information from base64
  const phone = window.atob('MzAzLTk0Ni0zNDM2');
  const emailAddress = window.atob('Y2hyaXNAZXhwZWN0bGxjLmNvbQ==');
  const emailLink = `mailto:${emailAddress}?subject=Interested in Josh Garner`;

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col space-y-2 items-center justify-center">
        {/* Company logo - currently commented out */}
        {/* <img src="/expectTech.png" alt="josh profile pic" className=" w-56" /> */}

        <div className="flex flex-col lg:flex-row space-y-4 space-x-0 lg:space-y-0 lg:space-x-4 items-center pt-2">
          {/* Email link */}
          <a href={emailLink} className="text-sm text-sky-600 hover:opacity-60">
            <div className="flex space-x-1 items-center">
              <BsEnvelope className="stroke-current w-4 h-4" />
              <span className="text-sm">
                {emailAddress}
              </span>
            </div>
          </a>

          {/* Phone link */}
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

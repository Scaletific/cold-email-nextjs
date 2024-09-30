"use client";

function Output() {
  return (
    <>
      <div className="px-2 space-y-4 md:space-y-5">
        <div className="flex flex-col md:flex-row -mx-2 gap-4 md:gap-6">
          {/* Meta data */}
          <div className="w-full md:w-2/3 px-2">
            <div className="p-8 flex flex-col h-full">
              <div className="flex h-full flex-col md:flex-col justify-between">
                <span>INDUSTRY / HEALTHCARE</span>
                <span>09 JAN 2024</span>
                <h3>Lorem ipsum dolor sit amet</h3>
                <p>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur.{" "}
                </p>
              </div>
            </div>
          </div>
          {/* Featured Image */}
          <div className="w-full md:w-1/3 px-2">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col h-full">
              <div className="flex h-full flex-col md:flex-row items-center justify-between"></div>
            </div>
          </div>
        </div>
        {/* Job Titles */}
        <div className="w-full px-7 mt-10 h-full relative flex flex-col">
          <h2> Job Titles in Healthcare Industry</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* Ideal Customer Profile */}
        <div className="w-full px-7 mt-10 h-full relative flex flex-col">
          <h2> Ideal Customer Profiles in Healthcare Industry</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        {/* ColdEmails */}
        <div className="w-full px-7 mt-10 h-full relative flex flex-col">
          <h2> Cold Emails for the Healthcare Industry</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Output;

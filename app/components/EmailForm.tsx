"use client";
import { useState } from "react";

type ActiveForm = "about" | "account" | "address";

const EmailForm: React.FC = () => {
  const [activeForm, setActiveForm] = useState<ActiveForm>("about");

  const handleNext = (form: ActiveForm) => {
    setActiveForm(form);
  };

  return (
    <div className="w-full max-w-full px-3 text-center flex-0">
      <h3 className="mt-12">Build Your Profile</h3>
      <h5 className="font-normal text-slate-400 dark:text-white">
        This information will let us know more about you.
      </h5>

      <div className="mb-12">
        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 mx-auto my-12 flex-0 lg:w-8/12">
            <div className="grid grid-cols-3">
              <button
                onClick={() => handleNext("about")}
                className={`before:w-3.4 before:h-3.4 before:rounded-circle before:scale-120 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 ${
                  activeForm === "about" ? "text-slate-700" : "text-slate-400"
                }`}
                title="About"
              >
                <span>About</span>
              </button>
              <button
                onClick={() => handleNext("account")}
                className={`before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 ${
                  activeForm === "account" ? "text-slate-100" : "text-slate-400"
                }`}
                title="Account"
              >
                Account
              </button>
              <button
                onClick={() => handleNext("address")}
                className={`before:w-3.4 before:h-3.4 before:rounded-circle after:top-1.25 relative m-0 cursor-pointer border-none bg-transparent px-1.5 pb-0.5 pt-5 ${
                  activeForm === "address" ? "text-slate-100" : "text-slate-400"
                }`}
                title="Address"
              >
                Address
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mx-3">
          <div className="w-full max-w-full px-3 m-auto flex-0 lg:w-8/12">
            <form className="relative mb-32">
              {/* About Form */}
              <div
                className={`absolute top-0 left-0 flex flex-col w-full p-4 bg-white shadow-soft-xl rounded-2xl transition-all ${
                  activeForm === "about"
                    ? "visible opacity-100"
                    : "invisible opacity-0 h-0"
                }`}
              >
                <div className="flex flex-wrap -mx-3 text-center">
                  <div className="w-10/12 max-w-full px-3 mx-auto flex-0">
                    <h5 className="font-normal dark:text-white">
                      Let&apos;s start with the basic information
                    </h5>
                    <p>
                      Let us know your name and email address. Use an address
                      you don&apos;t mind other users contacting you at.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap mt-4 -mx-3">
                  <div className="w-full max-w-full px-3 flex-0 sm:w-4/12">
                    <div className="relative inline-flex items-center justify-center w-28 h-28 text-base text-white transition-all duration-200 rounded-xl">
                      {/* Image upload or placeholder */}
                      {/* Add any image or user avatar logic here */}
                    </div>
                  </div>
                  <div className="w-full max-w-full px-3 flex-0 sm:w-8/12">
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full p-3 border rounded-md text-slate-700"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        placeholder="Email Address"
                        className="w-full p-3 border rounded-md text-slate-700"
                      />
                    </div>
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                      onClick={() => handleNext("account")}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* Account Form */}
              <div
                className={`absolute top-0 left-0 flex flex-col w-full p-4 bg-white shadow-soft-xl rounded-2xl transition-all ${
                  activeForm === "account"
                    ? "visible opacity-100"
                    : "invisible opacity-0 h-0"
                }`}
              >
                <div className="flex flex-wrap -mx-3 text-center">
                  <div className="w-10/12 max-w-full px-3 mx-auto flex-0">
                    <h5 className="font-normal dark:text-white">
                      Set up your account details
                    </h5>
                    <p>Enter your username and password for your profile.</p>
                  </div>
                </div>
                <div className="flex flex-wrap mt-4 -mx-3">
                  <div className="w-full max-w-full px-3 flex-0 sm:w-8/12 mx-auto">
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Username"
                        className="w-full p-3 border rounded-md text-slate-700"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 border rounded-md text-slate-700"
                      />
                    </div>
                    <button
                      type="button"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                      onClick={() => handleNext("address")}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>

              {/* Address Form */}
              <div
                className={`absolute top-0 left-0 flex flex-col w-full p-4 bg-white shadow-soft-xl rounded-2xl transition-all ${
                  activeForm === "address"
                    ? "visible opacity-100"
                    : "invisible opacity-0 h-0"
                }`}
              >
                <div className="flex flex-wrap -mx-3 text-center">
                  <div className="w-10/12 max-w-full px-3 mx-auto flex-0">
                    <h5 className="font-normal dark:text-white">
                      Where do you live?
                    </h5>
                    <p>
                      Please provide your address so we know where to reach you.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap mt-4 -mx-3">
                  <div className="w-full max-w-full px-3 flex-0 sm:w-8/12 mx-auto">
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="Street Address"
                        className="w-full p-3 border rounded-md text-slate-700"
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        placeholder="City"
                        className="w-full p-3 border rounded-md text-slate-700"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-500 text-white px-4 py-2 rounded-md"
                    >
                      Finish
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailForm;

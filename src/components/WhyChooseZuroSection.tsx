import { User } from "lucide-react";
import React from "react";

const WhyChooseZuro: React.FC = () => {
  return (
    <section className="bg-[#194636] py-16 px-10 md:px-14 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12">
          Why Choose Zuro?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#18483B] rounded-lg flex flex-col justify-between">
            <div className="flex flex-col items-center justify-center h-full">
              <button className="bg-white text-black py-3 px-6 rounded-xl text-lg font-semibold flex items-center gap-2 shadow-md">
                <span>Sign Up For Free</span>
                <User />
              </button>
            </div>
            <div className="px-5 py-3 bg-[#356254] rounded-b-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Sign Up & Onboard
              </h3>
              <p className="text-gray-300">
                Create an account to receive a customized onboarding experience.
              </p>
            </div>
          </div>

          <div className="bg-[#18483B] rounded-lg flex flex-col justify-between">
            <div className="flex items-center justify-center h-24 mb-8">
              <div className="flex mt-20 space-x-4">
                <div className="bg-[#2a7a5c] rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="bg-[#2a7a5c] rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <div className="bg-[#2a7a5c] rounded-full p-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className="px-5 py-3 bg-[#356254] rounded-b-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Customize & Integrate
              </h3>
              <p className="text-gray-300">
                Choose from a library of integrations to sync data and unify
                your workflow.
              </p>
            </div>
          </div>

          <div className="bg-[#18483B] rounded-lg flex flex-col justify-between">
            <div className="flex items-center justify-center my-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-[#2a7a5c] rounded-lg h-16 w-16 flex items-center justify-center"></div>
                <div className="bg-[#2a7a5c] rounded-full h-16 w-16 flex items-center justify-center"></div>
                <div className="bg-[#2a7a5c] rounded-full h-16 w-16 flex items-center justify-center"></div>
                <div className="bg-[#2a7a5c] rounded-lg h-16 w-16 flex items-center justify-center"></div>
              </div>
            </div>
            <div className="px-5 py-3 bg-[#356254] rounded-b-lg">
              <h3 className="text-xl font-semibold mb-2 text-white">
                Customize & Integrate
              </h3>
              <p className="text-gray-300">
                Choose from a library of integrations to sync data and unify
                your workflow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseZuro;

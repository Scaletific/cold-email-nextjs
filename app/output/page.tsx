"use client";
import Image from "next/image";
import Blog from "@/public/blog.jpg";

function Output() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      {/* Meta and Featured Section */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Meta Data */}
        <div className="md:w-1/2">
          <div className="p-8  h-full flex flex-col justify-between">
            <div>
              <span className="block text-sm text-gray-600 mb-1">
                INDUSTRY / HEALTHCARE
              </span>
              <span className="block text-sm text-gray-600 mb-3">
                09 JAN 2024
              </span>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Lorem ipsum dolor sit amet
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </p>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="md:w-1/2">
          <div className="shadow-lg rounded-lg overflow-hidden">
            <Image
              src={Blog}
              alt="Blog image"
              layout="responsive"
              height={240}
              width={550}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      {/* Job Titles Section */}
      <div className="p-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Job Titles in Healthcare Industry
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Ideal Customer Profile Section */}
      <div className="p-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Ideal Customer Profiles in Healthcare Industry
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Cold Emails Section */}
      <div className="p-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">
          Cold Emails for the Healthcare Industry
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </div>
  );
}

export default Output;

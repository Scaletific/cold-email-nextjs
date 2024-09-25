"use client";

import OpenRate from "../components/OpenRate";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { useContext } from "react";
// import { ThemeContext } from "../components/Provider";
// import TitlePage from "../components/TitlePage";
import WelcomeImg from "@/public/team_engineering_white.svg";
import HomeImg from "@/public/homeimg.png";
import ProfileIcon from "@/public/profileicon.png";

// Define the structure of the email data
interface EmailEntry {
  company: string;
  industry: string;
  revenue: string;
  date: string;
  email: string;
  subindustry?: string;
}

// Example email data (you can replace this with dynamic data)
const emailData: EmailEntry[] = [
  {
    company: "Tesla",
    industry: "Automotive",
    revenue: "25.5B",
    date: "12/10/2024",
    email: "info@tesla.com",
    subindustry: "Electric Cars",
  },
  {
    company: "Apple",
    industry: "Technology",
    revenue: "100.5B",
    date: "09/20/2024",
    email: "info@apple.com",
    subindustry: "Consumer Electronics",
  },
  {
    company: "Amazon",
    industry: "E-Commerce",
    revenue: "280.5B",
    date: "08/12/2024",
    email: "info@amazon.com",
    subindustry: "Retail",
  },
];

function DashboardPage() {
  // const theme = useContext(ThemeContext);

  const goToProfile = () => {
    window.location.href = "/profile";
  };

  const goToEmail = () => {
    window.location.href = "/email";
  };

  return (
    <>
      <div className="px-2 space-y-4 md:space-y-5">
        <div className="flex flex-col md:flex-row -mx-2 gap-4 md:gap-6">
          {/* Welcome Card */}
          <div className="w-full md:w-2/3 px-2">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col h-full">
              <div className="flex h-full flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col space-y-4 w-full md:w-1/2">
                  <h2 className="text-2xl font-bold">Welcome, John Doe</h2>
                  <p className="text-gray-600">
                    Unlock the Power of Personalized Outreach with Our Cold
                    Email Generator. Craft Compelling Connections.
                  </p>
                  <button
                    onClick={goToEmail}
                    className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Generate Cold Email
                  </button>
                </div>
                <div className="hidden md:block w-full md:w-1/2 mt-6 md:mt-0 ml-0 md:ml-10">
                  <Image
                    src={HomeImg}
                    alt="welcome image"
                    width={500}
                    height={250}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Profile Card */}
          <div className="w-full md:w-1/3 px-2">
            <div className="h-full w-full flex items-stretch">
              <div className="h-full w-full bg-white rounded-lg shadow-xl flex flex-col justify-between">
                {/* Top Image Section */}
                <div className="h-32 overflow-hidden rounded-t-lg">
                  <Image
                    className="w-full h-full object-cover"
                    alt="Profile background"
                    src={WelcomeImg}
                    layout="responsive"
                    height={128}
                    width={512}
                  />
                </div>

                {/* Profile Picture */}
                <div className="relative w-24 h-24 mx-auto -mt-12 border-4 border-white rounded-full overflow-hidden z-20">
                  <Image
                    className="object-cover"
                    alt="Profile picture"
                    src={ProfileIcon}
                    layout="fill"
                  />
                </div>

                {/* User Info */}
                <div className="text-center mt-2">
                  <h2 className="text-lg md:text-xl font-semibold">John Doe</h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    John.doe@gmail.com
                  </p>
                </div>

                {/* Edit Button */}
                <div className="p-4 border-t mt-4">
                  <button
                    onClick={goToProfile}
                    className="w-full px-4 md:px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="px-2 flex flex-col md:flex-row -mx-2 gap-4 md:gap-6">
          <OpenRate />

          {/**Resources */}
          <div className="sm:w-2/4 p-6 mb-6 items-center shadow-lg rounded-lg bg-gradient-to-r from-gray-800 via-gray-900 to-black">
            <svg
              className="w-7 h-7 text-gray-500 mb-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M18 5h-.7c.229-.467.349-.98.351-1.5a3.5 3.5 0 0 0-3.5-3.5c-1.717 0-3.215 1.2-4.331 2.481C8.4.842 6.949 0 5.5 0A3.5 3.5 0 0 0 2 3.5c.003.52.123 1.033.351 1.5H2a2 2 0 0 0-2 2v3a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2ZM8.058 5H5.5a1.5 1.5 0 0 1 0-3c.9 0 2 .754 3.092 2.122-.219.337-.392.635-.534.878Zm6.1 0h-3.742c.933-1.368 2.371-3 3.739-3a1.5 1.5 0 0 1 0 3h.003ZM11 13H9v7h2v-7Zm-4 0H2v5a2 2 0 0 0 2 2h3v-7Zm6 0v7h3a2 2 0 0 0 2-2v-5h-5Z" />
            </svg>
            <a href="#">
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-white">
                Need a guide for creating mails?
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to create
              effective cold emails that convert:
            </p>
            <a
              href="#"
              className="inline-flex font-medium items-center text-blue-600 hover:underline"
            >
              See our guideline
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11v4.833A1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        </div>
        {/* Recent Emails Table */}
        <div className="w-full px-2 h-full relative flex flex-col mb-0 shadow-xl rounded-2xl bg-white">
          <div className="p-6 pb-0 bg-white rounded-t-2xl">
            <h6 className="text-lg font-bold">Recent Emails</h6>
          </div>
          <div className="flex-auto px-0 pt-0 pb-2">
            <div className="p-0 overflow-x-auto">
              <table className="items-center w-full mb-0 align-top text-slate-500">
                <thead className="align-bottom">
                  <tr>
                    <th className="px-6 py-3 text-left uppercase text-slate-400">
                      Company
                    </th>
                    <th className="px-6 py-3 text-left uppercase text-slate-400">
                      Industry
                    </th>
                    <th className="px-6 py-3 text-center uppercase text-slate-400">
                      Revenue
                    </th>
                    <th className="px-6 py-3 text-center uppercase text-slate-400">
                      Created
                    </th>
                    <th className="px-6 py-3 text-center uppercase text-slate-400">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {emailData.map((email, index) => (
                    <tr key={index}>
                      <td className="p-2 align-middle border-b text-sm text-slate-400">
                        <div className="flex align-items-center">
                          <span className="ml-3 font-bold">
                            {email.company}
                          </span>
                        </div>
                      </td>
                      <td className="p-2 align-middle border-b text-sm text-slate-400">
                        {email.industry}
                      </td>
                      <td className="p-2 align-middle border-b text-sm text-slate-400 text-center">
                        {email.revenue}
                      </td>
                      <td className="p-2 align-middle border-b text-sm text-slate-400 text-center">
                        {email.date}
                      </td>
                      <td className="p-2 align-middle border-b text-sm text-slate-400 text-center">
                        <Button variant="link">Edit</Button>
                        <Button variant="link" className="ml-2">
                          Delete
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;

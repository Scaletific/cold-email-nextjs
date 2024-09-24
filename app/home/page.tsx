"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "../components/Provider";
import TitlePage from "../components/TitlePage";
import WelcomeImg from "@/public/team_engineering_white.svg";
import { Pie, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

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

// Sample data for the charts
const doughnutChartData = {
  datasets: [
    {
      data: [75, 25], // Example data
      backgroundColor: ["#4CAF50", "#FF6384"],
      hoverOffset: 4,
    },
  ],
};

const pieChartData = {
  datasets: [
    {
      data: [30, 70], // Example data
      backgroundColor: ["#36A2EB", "#FFCE56"],
      hoverOffset: 4,
    },
  ],
};

// Chart options to hide the legend
const chartOptions = {
  plugins: {
    legend: {
      display: false, // Hides the legend
    },
  },
};

function DashboardPage() {
  const theme = useContext(ThemeContext);

  return (
    <>
      <div className="px-2 space-y-4 md:space-y-5">
        <div className="flex flex-col md:flex-row -mx-2 gap-4 md:gap-6">
          {/* Welcome Card */}
          <div className="w-full md:w-2/3 px-2">
            <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col h-full">
              <div className="flex h-full flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col space-y-4 w-full md:w-1/2">
                  <h2 className="text-2xl font-bold">Welcome, Jane Doe</h2>
                  <p className="text-gray-600">
                    Unlock the Power of Personalized Outreach with Our Cold
                    Email Generator. Craft Compelling Connections.
                  </p>
                  <button className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
                    Generate Cold Email
                  </button>
                </div>
                <div className="hidden md:block w-full md:w-1/2 mt-6 md:mt-0 ml-0 md:ml-10">
                  <Image
                    src={WelcomeImg}
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
                    src={WelcomeImg}
                    layout="fill"
                  />
                </div>

                {/* User Info */}
                <div className="text-center mt-2">
                  <h2 className="text-lg md:text-xl font-semibold">Jane Doe</h2>
                  <p className="text-gray-500 text-sm md:text-base">
                    jane.doe@gmail.com
                  </p>
                </div>

                {/* Edit Button */}
                <div className="p-4 border-t mt-4">
                  <button className="w-full px-4 md:px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all">
                    Edit Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Open Rate Card */}
          <Card className="flex-1 h-90 flex flex-col">
            <CardHeader>
              <CardTitle>Open Rate</CardTitle>
            </CardHeader>
            {/* <CardContent className="flex flex-row items-center justify-between h-full">
              <Doughnut data={doughnutChartData} height={15} />
              <div className="flex flex-col justify-center ml-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#4CAF50] rounded-full mr-2"></span>
                  <span>Opened: 75%</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#FF6384] rounded-full mr-2"></span>
                  <span>Not Opened: 25%</span>
                </div>
              </div>
            </CardContent> */}
          </Card>

          {/* Response Rate Card */}
          <Card className="flex-1 h-90 flex flex-col">
            <CardHeader>
              <CardTitle>Response Rate</CardTitle>
            </CardHeader>
            {/* <CardContent className="flex flex-row items-center justify-between h-full">
              <Pie data={pieChartData} height={15} />
              <div className="flex flex-col justify-center ml-4">
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#36A2EB] rounded-full mr-2"></span>
                  <span>Response: 30%</span>
                </div>
                <div className="flex items-center">
                  <span className="w-3 h-3 bg-[#FFCE56] rounded-full mr-2"></span>
                  <span>No Response: 70%</span>
                </div>
              </div>
            </CardContent> */}
          </Card>
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

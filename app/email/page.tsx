"use client";

import React from "react";
import TitlePage from "../components/TitlePage";

function DashboardPage() {
  return (
    <>
      <h3>New Email</h3>
      <p>Generate Emails that convert</p>
      <div className="px-2 space-y-4 md:space-y-5">
        <div className="flex flex-col md:flex-row -mx-2 gap-4 md:gap-6">
          {/* Input Card */}
          <div className="w-full md:w-1/3 px-2"></div>

          {/* Output Card */}
          <div className="w-full md:w-2/3 px-2"></div>
        </div>
      </div>
    </>
  );
}

export default DashboardPage;

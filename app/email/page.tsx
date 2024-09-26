"use client";

import React, { useState } from "react";
import Stepper from "../components/Stepper";

const Home: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  return (
    <div className="p-8">
      <Stepper currentStep={currentStep} />
      <div className="mt-4">
        {/* Add functionality to move between steps */}
        <button
          className="px-4 py-2 mr-2 bg-gray-200 rounded"
          onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded"
          onClick={() => setCurrentStep((prev) => Math.min(prev + 1, 3))}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Home;

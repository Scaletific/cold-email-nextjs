import React from "react";

interface StepperProps {
  currentStep: number;
}

const steps = ["Profile", "Customer", "Industry", "Email"];

const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  return (
    <div className="flex items-center space-x-4">
      <h2 className="font-bold text-xl">Create Cold Email</h2>
      <div className="flex space-x-2">
        {steps.map((step, index) => (
          <React.Fragment key={step}>
            <div className="flex items-center">
              <span
                className={`${
                  currentStep === index
                    ? "text-blue-600 font-bold underline"
                    : "text-gray-500"
                }`}
              >
                {step}
              </span>
            </div>
            {index < steps.length - 1 && (
              <span className="text-gray-400">{">"}</span>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Stepper;

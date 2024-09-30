"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Next from "../components/Questionnaire";
import Intro from "../components/Welcome";
import DocumentUploadForm from "../components/Upload"; // Import your Document Upload component
import TitlePage from "../components/TitlePage"; // Import TitlePage component
import EmailOutput from "../components/EmailOutput"; // Import the EmailOutput component
import OpenRate from "../components/OpenRate"; // Import OpenRate component

const Home: React.FC = () => {
  const [showNext, setShowNext] = useState(false);
  const [showDocumentUpload, setShowDocumentUpload] = useState(false); // New state for Document Upload
  const [showEmailOutput, setShowEmailOutput] = useState(false); // New state for Email Output

  // Function to handle the Get Started click
  const handleGetStarted = () => {
    setShowNext(true);
  };

  // Function to handle the form submission in the Next component
  const handleSubmit = () => {
    setShowNext(false); // Hide Next component
    setShowDocumentUpload(true); // Show Document Upload component
  };

  // Function to handle "Generate Email" click and show the EmailOutput
  const handleGenerateEmail = () => {
    setShowDocumentUpload(false); // Hide Document Upload component
    setShowEmailOutput(true); // Show Email Output component
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <AnimatePresence>
        {!showNext && !showDocumentUpload && !showEmailOutput ? (
          // Intro component, displayed until "Get Started" is clicked
          <motion.section
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full flex justify-center"
          >
            <div className="text-center">
              <Intro onGetStarted={handleGetStarted} />
            </div>
          </motion.section>
        ) : showNext ? (
          // Next component, displayed after "Get Started" is clicked
          <motion.section
            key="next"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full flex justify-center"
          >
            <div className="text-center">
              <Next onSubmit={handleSubmit} />{" "}
              {/* Pass handleSubmit to Next component */}
            </div>
          </motion.section>
        ) : showDocumentUpload ? (
          // Document Upload component, displayed after the Next component is submitted
          <motion.section
            key="documentUpload"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full flex justify-center"
          >
            <div className="text-center">
              <DocumentUploadForm />
            </div>
          </motion.section>
        ) : showEmailOutput ? (
          // Email Output component, displayed after "Generate Email" is clicked
          <motion.section
            key="emailOutput"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full flex justify-center"
          >
            <div className="text-center">
              <TitlePage
                title="Your Cold Email Results"
                description="Here is the email we have generated for you."
              />
              <EmailOutput />
            </div>
          </motion.section>
        ) : null}
      </AnimatePresence>
    </main>
  );
};

export default Home;

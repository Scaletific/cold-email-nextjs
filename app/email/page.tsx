"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Next from "../components/Questionnaire";
import Intro from "../components/Welcome";
import DocumentUploadForm from "../components/Upload"; // Import your Document Upload component

const Home: React.FC = () => {
  const [showNext, setShowNext] = useState(false);
  const [showDocumentUpload, setShowDocumentUpload] = useState(false); // New state for Document Upload

  // Function to handle the Get Started click
  const handleGetStarted = () => {
    setShowNext(true);
  };

  // Function to handle the form submission in the Next component
  const handleSubmit = () => {
    setShowNext(false); // Hide Next component
    setShowDocumentUpload(true); // Show Document Upload component
  };

  return (
    <main className="flex justify-center items-center h-screen">
      <AnimatePresence>
        {!showNext && !showDocumentUpload ? (
          // Intro component, displayed until "Get Started" is clicked
          <motion.section
            key="intro"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full flex justify-center"
          >
            <Intro onGetStarted={handleGetStarted} />
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
            <Next onSubmit={handleSubmit} />{" "}
            {/* Pass handleSubmit to Next component */}
          </motion.section>
        ) : (
          // Document Upload component, displayed after the Next component is submitted
          <motion.section
            key="documentUpload"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5, type: "spring" }}
            className="w-full flex justify-center"
          >
            <DocumentUploadForm />
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Home;

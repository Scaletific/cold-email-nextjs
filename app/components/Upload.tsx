import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiUpload } from "react-icons/hi"; // Upload icon
import { FaLink, FaRegCommentDots } from "react-icons/fa"; // Link and comment icons

const DocumentUploadForm: React.FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center gap-6 max-w-md mx-auto p-8 bg-white shadow-lg rounded-lg border border-gray-300"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, type: "spring" }}
    >
      <h2 className="text-xl font-semibold text-center text-gray-800">
        Business Portfolio: What services do you offer?
      </h2>
      <p className="text-center text-gray-600">
        Have a documentation of services?
      </p>

      {/* Single Document Upload */}
      <motion.label
        className="flex items-center justify-center p-4 border-2 border-blue-600 rounded-lg cursor-pointer hover:bg-blue-100 transition-all"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <input
          type="file"
          id="uploadDocument"
          onChange={handleFileChange}
          className="hidden"
        />
        <div className="flex items-center gap-2">
          <HiUpload className="text-blue-600" size={24} />
          {fileName ? `Selected: ${fileName}` : "Upload Document"}
        </div>
      </motion.label>

      {/* Link Paste Field */}
      <motion.div className="relative w-full">
        <FaLink className="absolute left-3 top-3 text-gray-400" />
        <motion.input
          type="text"
          placeholder="Have a website with services?"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          className="p-3 pl-10 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all w-full"
        />
      </motion.div>

      {/* Text Area */}
      <motion.div className="relative w-full">
        <FaRegCommentDots className="absolute left-3 top-3 text-gray-400" />
        <motion.textarea
          placeholder="Want to provide detailed description about your?"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="p-3 pl-10 border-2 border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all w-full h-24"
        />
      </motion.div>

      {/* Submit Button */}
      <motion.button
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all mt-4"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => alert("Form Submitted!")}
      >
        Generate Email
      </motion.button>
    </motion.div>
  );
};

export default DocumentUploadForm;

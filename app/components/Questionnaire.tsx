import { motion } from "framer-motion";
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";
import {
  Book,
  Computer,
  DollarSign,
  Factory,
  Hospital,
  Megaphone,
} from "lucide-react";

// Motion settings for subtle and smooth animations
const buttonMotion = {
  initial: { scale: 1 },
  whileHover: { scale: 1.05 },
  whileTap: { scale: 0.95 },
  transition: { duration: 0.2 },
};

// Update the Next component to accept an onSubmit prop
interface NextProps {
  onSubmit: () => void; // Accept the onSubmit function
}

export default function Next({ onSubmit }: NextProps) {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault(); // Prevent default form submission
    onSubmit(); // Call the onSubmit function passed from Home component
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen space-y-8 p-6"
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        show: {
          opacity: 1,
          scale: 1,
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
      initial="hidden"
      animate="show"
      exit="hidden"
      transition={{ duration: 0.4, type: "spring" }}
    >
      {/* Heading Section */}
      <motion.div variants={STAGGER_CHILD_VARIANTS} className="text-center">
        <h3 className="text-xl font-bold text-gray-900 leading-tight mt-2">
          Choose an industry for your cold email
        </h3>
      </motion.div>

      {/* Industry Buttons */}
      <motion.div
        variants={STAGGER_CHILD_VARIANTS}
        className="grid grid-cols-3 gap-6 w-full max-w-md"
      >
        {[
          { Icon: Factory, label: "Manufacturing" },
          { Icon: Computer, label: "Technology" },
          { Icon: DollarSign, label: "Finance" },
          { Icon: Hospital, label: "Health" },
          { Icon: Megaphone, label: "Marketing" },
          { Icon: Book, label: "Education" },
        ].map(({ Icon, label }) => (
          <motion.button
            key={label}
            className="flex flex-col items-center justify-center space-y-2 p-4 text-gray-700 hover:text-blue-600 transition-all"
            {...buttonMotion}
          >
            <Icon size={40} className="text-current" />
            <span className="text-sm font-medium">{label}</span>
          </motion.button>
        ))}
      </motion.div>

      {/* "Other" Input Field */}
      <motion.input
        type="text"
        placeholder="Other industry..."
        className="w-full max-w-md p-3 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition-all"
        {...buttonMotion}
      />

      {/* Submit Button */}
      <motion.button
        className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all mt-4"
        onClick={handleSubmit} // Call handleSubmit on click
        {...buttonMotion}
      >
        Submit
      </motion.button>
    </motion.div>
  );
}

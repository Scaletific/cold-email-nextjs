import { motion } from "framer-motion";
import { STAGGER_CHILD_VARIANTS } from "@/lib/constants";

// Reusable transition settings
const motionSettings = {
  exit: { opacity: 0, scale: 0.95 },
  transition: { duration: 0.3, type: "spring" },
};

// ClassName variables for reuse and cleaner JSX
const headingClass = "text-4xl font-bold text-gray-900";
const paragraphClass =
  "max-w-md text-black-200 transition-colors sm:text-lg mt-4";
const buttonClass =
  "mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600";

// Main component
export default function Intro({ onGetStarted }: { onGetStarted: () => void }) {
  return (
    <motion.div
      className="z-10"
      {...motionSettings} // Spread reusable motion settings
    >
      <motion.div
        variants={{
          show: {
            transition: {
              staggerChildren: 0.2, // Delayed child animation
            },
          },
        }}
        initial="hidden"
        animate="show"
        className="flex flex-col items-center text-center"
      >
        <motion.h1 className={headingClass} variants={STAGGER_CHILD_VARIANTS}>
          Welcome to precisionReach
        </motion.h1>
        <motion.p className={paragraphClass} variants={STAGGER_CHILD_VARIANTS}>
          Create personalized cold-emails with AI. Target emails that resonate
          with recipients' pain points and job roles, improving engagement and
          response rates.
        </motion.p>
        <motion.button
          onClick={onGetStarted} // Call the passed function when button is clicked
          variants={STAGGER_CHILD_VARIANTS}
          className={buttonClass}
        >
          Get Started
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

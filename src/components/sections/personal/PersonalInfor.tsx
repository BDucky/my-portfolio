import { motion } from "framer-motion";

export default function PersonalInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-2xl font-bold">About Me</h2>
      <p>Frontend Developer with experience in Web3...</p>
    </motion.div>
  );
}
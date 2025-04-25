import { motion } from "framer-motion";

export default function Timeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold">🕒 Timeline</h2>
      <p>Chronological journey through your career</p>
    </motion.div>
  );
}
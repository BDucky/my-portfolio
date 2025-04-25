import { motion } from "framer-motion";
import { FaBriefcase, FaRegCircle } from "react-icons/fa";

const experiences = [
  {
    company: "Dision GmbH",
    role: "Frontend Developer",
    from: "Mar 2023",
    to: "Present",
    description: [
      "Developed and maintained web applications for German clients.",
      "Collaborated with backend teams to integrate RESTful APIs.",
      "Implemented responsive UI using React, TypeScript, and Tailwind CSS."
    ]
  },
  {
    company: "Halozend",
    role: "Frontend Developer",
    from: "May 2021",
    to: "Feb 2023",
    description: [
      "Built and enhanced UI components for US and Vietnam clients.",
      "Worked on real-time features using WebSocket.",
      "Optimized performance and accessibility across browsers."
    ]
  },
  {
    company: "Freelance",
    role: "Web Developer",
    from: "2019",
    to: "2021",
    description: [
      "Delivered custom websites for small businesses.",
      "Managed deployments and ongoing maintenance."
    ]
  }
];

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto px-2 md:px-8 py-4 md:py-12 flex flex-col gap-12"
    >
      {/* Section header with icon and divider */}
      <div className="flex items-center gap-4 mb-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
          <FaBriefcase size={20} />
        </div>
        <h3 className="text-xl font-bold text-primary">Experience</h3>
        <div className="flex-1 h-px bg-primary/20 mx-2" />
      </div>
      {/* Timeline: Each section is one bullet, styled like About */}
      <ol className="relative border-l-2 border-primary/40 pl-6 space-y-12">
        {experiences.map((exp, idx) => (
          <li key={idx} className="relative">
            {/* Timeline bullet for section */}
            <div className="absolute -left-4 top-2 w-6 h-6 bg-primary rounded-full border-2 border-white dark:border-zinc-900 flex items-center justify-center text-white shadow">
              <FaRegCircle size={16} />
            </div>
            <div className="ml-4">
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-1">
                <span className="text-primary font-semibold text-sm md:text-base min-w-[120px]">
                  {exp.from} - {exp.to}
                </span>
                <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
                  {exp.role}
                </span>
                <span className="text-zinc-600 dark:text-zinc-400 font-medium">@ {exp.company}</span>
              </div>
              <ul className="list-disc list-inside text-zinc-700 dark:text-zinc-200 text-sm md:text-base mb-2">
                {exp.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </motion.section>
  );
}
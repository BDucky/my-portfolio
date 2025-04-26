import { motion } from "framer-motion";
import { FaRegCircle } from "react-icons/fa";

const experiences = [
  {
    company: "Dision GmbH",
    role: "Frontend Developer",
    from: "Mar 2023",
    to: "Present",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    description: [
      "Developed and maintained web applications for German clients.",
      "Collaborated with backend teams to integrate RESTful APIs.",
      "Implemented responsive UI using React, TypeScript, and Tailwind CSS.",
    ],
  },
  {
    company: "Halozend",
    role: "Frontend Developer",
    from: "May 2021",
    to: "Feb 2023",
    tech: ["React", "WebSocket", "Accessibility"],
    description: [
      "Built and enhanced UI components for US and Vietnam clients.",
      "Worked on real-time features using WebSocket.",
      "Optimized performance and accessibility across browsers.",
    ],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    from: "2019",
    to: "2021",
    tech: ["Custom Websites", "Deployment", "Maintenance"],
    description: [
      "Delivered custom websites for small businesses.",
      "Managed deployments and ongoing maintenance.",
    ],
  },
];

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 w-full max-w-2xl mx-auto px-2 md:px-8 py-4 md:py-12 !shadow-none"
    >
      {experiences.map((exp, idx) => (
        <section key={idx} className="!pb-0 !mb-0 !shadow-none">
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              <FaRegCircle size={20} />
            </div>
            <h3 className="font-semibold text-lg text-primary">
              {exp.company}
            </h3>
            <div className="flex-1 h-px bg-primary/20 mx-2" />
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-2 mb-8">
            <span className="text-primary font-semibold text-sm md:text-base min-w-[120px]">
              {exp.from} - {exp.to}
            </span>
            {/* <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
              {exp.role}
            </span> */}
          </div>
          {exp.tech && (
            <div className="mb-2">
              <span className="font-semibold text-sm text-blue-600 dark:text-blue-400">
                Tech:
              </span>
              <span className="text-sm text-zinc-700 dark:text-zinc-200 ml-2">
                {exp.tech.join(", ")}
              </span>
            </div>
          )}
          <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 dark:text-zinc-200 mb-8 text-left space-y-2">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </section>
      ))}
    </motion.section>
  );
}

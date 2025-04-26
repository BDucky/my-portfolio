import { motion } from "framer-motion";
import { FaRegCircle } from "react-icons/fa";

const experiences = [
  {
    company: "Vietnam Blockchain Corporation",
    role: "Frontend Developer",
    from: "August 2024",
    to: "Present",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "Next.js",
      "Ant Design",
      "Bootstrap",
      "jQuery",
      "REST API",
      "WebSocket",
      "Redux",
      "Zustand",
      "Git",
      "MySQL",
      "GraphQl",
      "Figma",
      "Responsive Design",
      "Accessibility",
      "Google Index"
    ],
    description: [
      "Developed and maintained web applications for clients.",
      "Collaborated with backend teams to integrate RESTful and GraphQL APIs.",
      "Implemented responsive UI using React, TypeScript, and Tailwind CSS.",
    ],
  },
  {
    company: "Freelance",
    role: "Frontend Developer",
    from: "October 2023",
    to: "March 2024",
    tech: [
      "React",
      "WebSocket",
      "Accessibility",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Ant Design",
      "ShadcnUi",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Next.js",
      "REST API",
      "Git",
      "Figma",
      "Responsive Design",
    ],
    description: [
      "Built and enhanced UI components for Europe X (former Twitter) Web3 game extension.",
      "Worked on real-time features using WebSocket.",
      "Implemented responsive UI using React, TypeScript, and Tailwind CSS."
    ],
  },
  {
    company: "DISION Tech LLC.",
    role: "Frontend Developer",
    from: "May 2023",
    to: "August 2024",
    tech: [
      "React",
      "WebSocket",
      "Accessibility",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Ant Design",
      "ShadcnUi",
      "Bootstrap",
      "JavaScript",
      "jQuery",
      "Next.js",
      "REST API",
      "Git",
      "Figma",
      "Responsive Design",
    ],
    description: [
      "Built and enhanced UI components for Europe and Vietnam clients.",
      "Worked on real-time features using WebSocket.",
      "Implemented responsive UI using React, TypeScript, and Tailwind CSS.",
      "Optimized performance and accessibility across browsers.",
    ],
  },
  {
    company: "Quano6 - Web3 Company",
    role: "Web Developer",
    from: "2021",
    to: "2023",
    tech: [
      "Custom Websites",
      "Deployment",
      "Maintenance",
      "HTML5",
      "CSS3",
      "ReactJs",
      "TypeScript",
      "JavaScript",
      "Figma",
      "Ant Design",
      "Wagmi",
      "Git",
      "Notion",
      "Responsive Design",
    ],
    description: [
      "Delivered custom websites for small businesses.",
      "Implemented responsive UI using React, TypeScript, and Tailwind CSS.",
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
          <div className="flex flex-col text-left md:flex-row md:items-center gap-2 mb-8">
            <span className="text-primary font-semibold text-sm md:text-base min-w-[120px]">
              {exp.from} - {exp.to}
            </span>
            {/* <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">
              {exp.role}
            </span> */}
          </div>
          {exp.tech && (
            <div className="mb-2 text-left">
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

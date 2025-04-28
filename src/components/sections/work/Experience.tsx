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
      "Implemented responsive UI using React, TypeScript, and Tailwind CSS.",
      "Optimized page load speed, reducing average load time by 25% across key projects.",
      "Collaborated closely with backend and design teams to deliver seamless user experiences.",
      "Reduced bug rate by 25% by introducing stricter TypeScript and code reviews.",
      "Mentored 2 intern developers and had weekly knowledge sharing sessions.",
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
    ],
  },
  {
    company: "Quano6 - Web3 Company",
    role: "Frontend Developer",
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
      "Launched 5+ client sites, each with SEO best practices and mobile-first design.",
      "Recognized for delivering projects ahead of schedule and exceeding client expectations.",
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
        <section key={idx} className="!pb-0 !mb-0 !shadow-none hover:scale-[1.015] hover:shadow-lg transition-transform duration-300 rounded-xl">
          <div className="flex items-center gap-4 mb-8 text-left">
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
              <FaRegCircle size={20} />
            </div>
            <div>
              <span className="font-bold text-lg text-zinc-900 dark:text-zinc-100">{exp.company}</span>
              <span className="block text-sm text-zinc-500 dark:text-zinc-400">{exp.role} ({exp.from} - {exp.to})</span>
            </div>
            <div className="flex-1 h-px bg-primary/20 mx-2" />
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {exp.tech.map((tech, i) => (
              <span key={i} className="inline-block px-2 py-1 rounded cursor-pointer bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold animate-fade-in">
                {tech}
              </span>
            ))}
          </div>
          <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 dark:text-zinc-200 mb-6 text-left space-y-2">
            {exp.description.map((desc, i) => (
              <li key={i}>{desc}</li>
            ))}
          </ul>
        </section>
      ))}
    </motion.section>
  );
}

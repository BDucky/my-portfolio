import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
  image?: string;
  status: "Live" | "In Progress" | "Completed";
}

const projects: Project[] = [
  {
    title: "Corjl Mobile App",
    description:
      "Native iOS and Android applications for the Corjl design platform. Built with Swift/SwiftUI for iOS and Kotlin/Jetpack Compose for Android, featuring AWS Amplify integration with Cognito authentication and AppSync GraphQL APIs.",
    tech: ["Swift", "SwiftUI", "Kotlin", "Jetpack Compose", "AWS Amplify", "Cognito", "AppSync", "GraphQL"],
    status: "In Progress",
  },
  {
    title: "Pathfinder - AI Learning Path Generator",
    description:
      "AI-powered learning path generator using Google Gemini AI and Groq. Features AI Chat Assistant for 24/7 guidance, automatic YouTube video recommendations, progress tracking, and local storage. Built with Vue 3 Composition API.",
    tech: ["Vue 3", "Vite", "Tailwind CSS", "Pinia", "Google Gemini AI", "Groq SDK", "YouTube API"],
    link: "https://pathfinder-rowboat.vercel.app/",
    github: "https://github.com/BDucky/pathfinder",
    status: "Live",
  },
  {
    title: "Health App",
    description:
      "Health tracking dashboard with achievement tracking, body fat charts, exercise graphs, and meal history. Features personal health records with body, exercise, and diary tracking. Responsive design for desktop, tablet, and mobile.",
    tech: ["React", "TypeScript", "Chart.js", "REST API", "Responsive Design"],
    github: "https://github.com/BDucky/health-app",
    status: "Completed",
  },
  {
    title: "Bridge - Mockup UI",
    description:
      "Modern bridge interface mockup built with React, TypeScript, and Vite. Clean UI design showcasing frontend development skills.",
    tech: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    link: "https://bridge-five-smoky.vercel.app",
    github: "https://github.com/BDucky/Bridge",
    status: "Live",
  },
  {
    title: "Smart Water Management System",
    description:
      "Web application for monitoring and managing water resources in Southern Vietnam. Developed at Vietnam Blockchain Corporation with real-time data visualization and IoT integration.",
    tech: ["React", "TypeScript", "Next.js", "Tailwind CSS", "WebSocket", "REST API", "GraphQL"],
    status: "Completed",
  },
  {
    title: "Web3 Game Extension",
    description:
      "Browser extension for Europe X (former Twitter) Web3 game. Built real-time features using WebSocket and implemented responsive UI components.",
    tech: ["React", "TypeScript", "WebSocket", "Chrome Extension", "Web3"],
    status: "Completed",
  },
  {
    title: "Personal Portfolio",
    description:
      "Modern portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations with Framer Motion, dark mode support, and responsive design.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    github: "https://github.com/BDucky/my-portfolio",
    status: "Live",
  },
];

const statusColors = {
  Live: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
  "In Progress": "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-300",
  Completed: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
};

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 w-full max-w-2xl mx-auto px-2 md:px-8 py-4 md:py-12 !shadow-none"
    >
      {projects.map((project, idx) => (
        <motion.article
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="group rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white/50 dark:bg-zinc-800/50 p-6 hover:shadow-lg hover:scale-[1.01] transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-3">
            <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              {project.title}
            </h4>
            <span className={`px-2 py-1 rounded text-xs font-semibold ${statusColors[project.status]}`}>
              {project.status}
            </span>
          </div>
          
          <p className="text-sm text-zinc-600 dark:text-zinc-300 mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span
                key={i}
                className="inline-block px-2 py-1 rounded bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-primary hover:underline"
              >
                <FaExternalLinkAlt size={12} />
                Live Demo
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 hover:text-primary"
              >
                <FaGithub size={14} />
                Source Code
              </a>
            )}
          </div>
        </motion.article>
      ))}
    </motion.section>
  );
}

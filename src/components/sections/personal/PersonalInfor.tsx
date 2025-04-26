import { motion } from "framer-motion";
import { FaGraduationCap, FaTools, FaUserTie } from "react-icons/fa";

export default function PersonalInfo() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6 w-full max-w-2xl mx-auto px-2 md:px-8 py-4 md:py-12 !shadow-none"
    >
      {/* Summary */}
      <div className="flex items-center gap-4 mb-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
          <FaUserTie size={20} />
        </div>
        <h3 className="text-xl font-bold text-primary">Summary</h3>
        <div className="flex-1 h-px bg-primary/20 mx-2" />
      </div>
      <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-200 mb-8">
        Front-end Developer with nearly 4 years of experience, specializing in{" "}
        <span className="font-bold text-blue-500">ReactJS</span> and other
        front-end technologies. Skilled in{" "}
        <span className="font-bold text-blue-400">TypeScript</span>,{" "}
        <span className="font-bold text-blue-400">Ant Design</span>,{" "}
        <span className="font-bold text-blue-400">Bootstrap</span>,{" "}
        <span className="font-bold text-blue-400">jQuery</span>,{" "}
        <span className="font-bold text-blue-400">Tailwinds</span> and{" "}
        <span className="font-bold text-blue-400">JavaScript</span>. After 2
        years at <span className="underline text-blue-400">Halozend</span>, I
        successfully contributed to projects for clients in the US and Vietnam.
        Currently, I am leveraging my skills at{" "}
        <span className="underline text-blue-400">Dision</span> to develop
        innovative solutions for clients in Germany. Additionally, I have
        experience integrating APIs based on backend technologies like Golang
        and PHP, utilizing both NoSQL and SQL databases, and implementing
        real-time features using{" "}
        <span className="font-bold text-blue-500">WebSocket</span>. Renowned for
        my commitment to delivering high-quality results and effectively
        tackling complex challenges.
      </p>
      {/* Education */}
      <div className="flex items-center gap-4 mb-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
          <FaGraduationCap size={20} />
        </div>
        <h4 className="font-semibold text-lg text-primary">Education</h4>
        <div className="flex-1 h-px bg-primary/20 mx-2" />
      </div>
      <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 dark:text-zinc-200 mb-8">
        <li>
          <span className="font-bold">
            Posts and Telecommunications Institute of Technology:
          </span>{" "}
          Engineering degree in technology (2021)
        </li>
        <li>
          <span className="font-bold">Knowledge:</span> C++, C#, Java, Microsoft
          SQL Server,...
        </li>
      </ul>
      {/* Technical skills */}
      <div className="flex items-center gap-4 mb-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
          <FaTools size={20} />
        </div>
        <h4 className="font-semibold text-lg text-primary">Technical skills</h4>
        <div className="flex-1 h-px bg-primary/20 mx-2" />
      </div>
      <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 dark:text-zinc-200 space-y-1">
        <li>
          <span className="font-bold">Programming Languages:</span> Typescript,
          Javascript, PHP
        </li>
        <li>
          <span className="font-bold">Frameworks/Platforms:</span> ReactJS,
          Next.js, Antd, Tailwindcss, Vanilla JS, Wordpress, VueJS, Vitest,
          Laravel, React Native, Angular, NodeJS, Docker, Bootstrap, Tanstack,
          ...
        </li>
        <li>
          <span className="font-bold">Database Management Systems:</span> MySQL,
          PostgreSQL, Microsoft SQL Server
        </li>
        <li>
          <span className="font-bold">IDEs:</span> Visual Studio Code, PHPStorm,
          XCode, Android Studio, Sublime text, Visual Studio
        </li>
        <li>
          <span className="font-bold">Operating Systems:</span> Window, Mac OS
        </li>
        <li>
          <span className="font-bold">Manage Source Code:</span> Gitea, Github,
          Gitlab
        </li>
        <li>
          <span className="font-bold">Data Fetching Libraries:</span> Axios,
          Graphql
        </li>
        <li>
          <span className="font-bold">Web Servers:</span> Apache, Nginx
        </li>
      </ul>
    </motion.section>
  );
}

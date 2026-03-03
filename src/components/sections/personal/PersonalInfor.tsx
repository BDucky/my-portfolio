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
        Front-end Developer with nearly 5 years of experience, specializing in{" "}
        <span className="font-bold text-blue-500">ReactJS</span> and other
        front-end technologies. Skilled in{" "}
        <span className="font-bold text-blue-400">TypeScript</span>,{" "}
        <span className="font-bold text-blue-400">Ant Design</span>,{" "}
        <span className="font-bold text-blue-400">Bootstrap</span>,{" "}
        <span className="font-bold text-blue-400">jQuery</span>,{" "}
        <span className="font-bold text-blue-400">Tailwind CSS</span> and{" "}
        <span className="font-bold text-blue-400">JavaScript</span>. After years
        working at{" "}
        <a
          href="https://dision.tech/"
          target="_blank"
          className="underline text-blue-400"
        >
          DISION Tech LLC
        </a>{" "}
        and{" "}
        <a
          href="https://vietnamblockchain.asia/"
          target="_blank"
          className="underline text-blue-400"
        >
          Vietnam Blockchain Corporation (VBC)
        </a>
        , I successfully contributed to projects for clients in Europe and
        Vietnam. Currently, I am working at{" "}
        <a
          href="https://www.corjl.com/en/web/"
          target="_blank"
          className="underline text-blue-400"
        >
          Rowboat Software Company
        </a>{" "}
        as a Frontend Developer, embracing the AI era by leveraging tools like{" "}
        <span className="font-bold text-blue-400">Windsurf</span>,{" "}
        <span className="font-bold text-blue-400">Cursor</span>,{" "}
        <span className="font-bold text-blue-400">Claude</span>, and{" "}
        <span className="font-bold text-blue-400">MCP</span> to accelerate
        development workflows. Additionally, I have experience integrating APIs
        based on backend technologies like RESTful and GraphQL. Renowned for
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
      <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 dark:text-zinc-200 mb-8 text-left space-y-2">
        <li>
          <span className="font-bold">
            Ho Chi Minh City University of Technology (Bach Khoa University)
          </span>{" "}
          2017 - 2021
        </li>
        <li>
          <span className="font-bold">Tra Vinh University</span> 2024 - now
        </li>
        {/* <li>
          <span className="font-bold">Knowledge:</span> React, ReactJs, NextJs, WebSocket,
          Accessibility, TypeScript, JavaScript, Redux, Ant Design, ShadcnUI,
          Bootstrap, JavaScript, Next.js, REST API, Git, Figma,
          Responsive Design...
        </li> */}
      </ul>
      {/* Technical skills */}
      <div className="flex items-center gap-4 mb-2">
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
          <FaTools size={20} />
        </div>
        <h4 className="font-semibold text-lg text-primary">Technical skills</h4>
        <div className="flex-1 h-px bg-primary/20 mx-2" />
      </div>
      <ul className="list-disc list-inside text-sm md:text-base text-zinc-700 dark:text-zinc-200 space-y-2 text-left">
        <li>
          <span className="font-bold">Programming Languages:</span> Typescript,
          Javascript
        </li>
        <li>
          <span className="font-bold">Frameworks/Platforms:</span> ReactJS,
          Next.js, Antd, Tailwindcss, Vanilla JS, Vite, ...
        </li>
        <li>
          <span className="font-bold">IDEs:</span> Visual Studio Code, Windsurf, Visual Studio
        </li>
        <li>
          <span className="font-bold">Operating Systems:</span> Window, Mac OS
        </li>
        <li>
          <span className="font-bold">Manage Source Code:</span> Github,
          Gitlab
        </li>
        <li>
          <span className="font-bold">Data Fetching Libraries:</span> Axios,
          GraphQL, Apollo Client
        </li>
        <li>
          <span className="font-bold">AI-Era Tools:</span> Windsurf, Cursor,
          Claude, ChatGPT, GitHub Copilot, Gemini.
        </li>
        <li>
          <span className="font-bold">AI Development:</span> MCP (Model Context Protocol),
          Agentic Coding, Prompt Engineering, AI-Assisted Code Review,
          AI Pair Programming
        </li>
        <li>
          <span className="font-bold">CLI & Automation:</span> Terminal, Zsh,
          Bash scripting, npm/yarn/pnpm scripts, Git CLI, Make, Build tools (Vite, Webpack, Turbopack)
        </li>
        <li>
          <span className="font-bold">Testing:</span> Vitest, Jest, React Testing Library,
          Playwright, Cypress, Unit Testing, E2E Testing
        </li>
        <li>
          <span className="font-bold">DevOps & Deployment:</span> Docker, GitHub Actions,
          CI/CD, Vercel, Netlify, AWS (S3, CloudFront), Nginx
        </li>
        <li>
          <span className="font-bold">Backend & Cloud (Basic):</span> AWS (Amplify, Cognito, AppSync, S3),
          Firebase, Supabase, REST API integration, GraphQL
        </li>
        <li>
          <span className="font-bold">Design & Collaboration:</span> Figma, Adobe XD,
          Notion, Jira, Linear, Slack, Discord
        </li>
      </ul>
    </motion.section>
  );
}

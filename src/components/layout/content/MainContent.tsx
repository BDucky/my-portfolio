import { PersonalInfo } from "@/components/sections/personal";
import { Experience, Timeline } from "@/components/sections/work";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, BookOpen } from "lucide-react";
import { JSX } from "react";

interface MainContentProps {
  active: string;
}

const sectionVariants = {
  initial: { opacity: 0, y: 48, scale: 0.97 },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] },
  },
  exit: {
    opacity: 0,
    y: -48,
    scale: 0.97,
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
  },
};

const sectionIconMap: Record<string, JSX.Element> = {
  personal: <User className="w-6 h-6 mr-2 text-primary" />,
  experience: <Briefcase className="w-6 h-6 mr-2 text-primary" />,
  timeline: <BookOpen className="w-6 h-6 mr-2 text-primary" />,
};

export default function MainContent({ active }: MainContentProps) {
  return (
    <div className="flex-1 flex flex-col px-2 md:px-8 pt-0 py-6 backdrop-blur-md">
      <AnimatePresence mode="wait">
        {active === "personal" && (
          <motion.section
            key="personal"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="rounded-2xl bg-white/80 dark:bg-zinc-900/80 shadow-2xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden"
          >
            <div className="flex items-center mb-6">
              {sectionIconMap.personal}
              <h3 className="text-2xl font-bold tracking-wide">About</h3>
            </div>
            <PersonalInfo />
          </motion.section>
        )}
        {active === "experience" && (
          <motion.section
            key="experience"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="rounded-2xl bg-white/80 dark:bg-zinc-900/80 shadow-2xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden"
          >
            <div className="flex items-center mb-6">
              {sectionIconMap.experience}
              <h3 className="text-2xl font-bold tracking-wide">Experiences</h3>
            </div>
            <Experience />
          </motion.section>
        )}
        {active === "timeline" && (
          <motion.section
            key="timeline"
            variants={sectionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="rounded-2xl bg-white/80 dark:bg-zinc-900/80 shadow-2xl p-8 md:p-12 border border-zinc-200 dark:border-zinc-800 relative overflow-hidden"
          >
            <div className="flex items-center mb-6">
              {sectionIconMap.timeline}
              <h3 className="text-2xl font-bold tracking-wide">Projects</h3>
            </div>
            <Timeline />
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

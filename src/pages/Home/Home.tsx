import StarsBackground from "@/components/layout/background/StarsBackground";
import MainContent from "@/components/layout/content/MainContent";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import ThemeToggle from "@/components/ui/theme-toggle";
import { useRef, useState, useEffect } from "react";

const sections = [
  { id: "personal", label: "About" },
  { id: "experience", label: "Experiences" },
  { id: "timeline", label: "Projects" },
];

export default function Home() {
  const sectionRefs = {
    personal: useRef<HTMLDivElement | null>(null),
    experience: useRef<HTMLDivElement | null>(null),
    timeline: useRef<HTMLDivElement | null>(null),
  };
  const [active, setActive] = useState("personal");

  // Scroll handler
  const handleScroll = (id: string) => {
    const ref = sectionRefs[id as keyof typeof sectionRefs];
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Highlight active section on scroll
  useEffect(() => {
    const handle = () => {
      let current = "personal";
      for (const sec of sections) {
        const ref = sectionRefs[sec.id as keyof typeof sectionRefs];
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top;
          if (top < window.innerHeight / 2) {
            current = sec.id;
          }
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <div className="min-h-screen relative transition-colors duration-350 bg-background text-foreground">
      <ThemeToggle />
      <StarsBackground />
      <div className="flex w-full max-w-6xl mx-auto pt-10 gap-8">
        <Sidebar onNavClick={handleScroll} active={active} />
        <MainContent sectionRefs={sectionRefs} />
      </div>
    </div>
  );
}

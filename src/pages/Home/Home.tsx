import StarsBackground from "@/components/layout/background/StarsBackground";
import MainContent from "@/components/layout/content/MainContent";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import Spotlight from "@/components/ui/Spotlight";
import ThemeToggle from "@/components/ui/theme-toggle";;
import { useState } from "react";

const sections = [
  { id: "personal", label: "About" },
  { id: "experience", label: "Experiences" },
  { id: "timeline", label: "Projects" },
];

export default function Home() {
  const [active, setActive] = useState("personal");

  // Handler to change section
  const handleSectionChange = (id: string) => {
    setActive(id);
  };

  return (
    <div className="min-h-screen relative transition-colors duration-350 bg-background text-foreground overflow-hidden">
      <Spotlight />
      <ThemeToggle />
      <StarsBackground />
      <div className="flex w-full max-w-6xl mx-auto pt-10 gap-8 relative z-10">
        <Sidebar onNavClick={handleSectionChange} active={active} />
        <MainContent active={active} />
      </div>
    </div>
  );
}

import StarsBackground from "@/components/layout/background/StarsBackground";
import MainContent from "@/components/layout/content/MainContent";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import Spotlight from "@/components/ui/Spotlight";
import { useState } from "react";
;

export default function Home() {
  const [active, setActive] = useState("personal");

  // Handler to change section
  const handleSectionChange = (id: string) => {
    setActive(id);
  };

  return (
    <div className="min-h-screen relative transition-colors duration-350 bg-background text-foreground overflow-hidden">
      <Spotlight />
      {/* <ThemeToggle /> */}
      <StarsBackground />
      <div className="flex w-full max-w-6xl mx-auto pt-10 gap-8 relative z-10">
        {/* Use flex for Sidebar to ensure sticky works with scrolling */}
        <Sidebar onNavClick={handleSectionChange} active={active} />
        <div className="flex-1 pl-2 md:pl-8 ml-72">
          <MainContent active={active} />
        </div>
      </div>
    </div>
  );
}

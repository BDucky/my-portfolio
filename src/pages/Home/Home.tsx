import StarsBackground from "@/components/layout/background/StarsBackground";
import MainContent from "@/components/layout/content/MainContent";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import Spotlight from "@/components/ui/Spotlight";
import { useState } from "react";

export default function Home() {
  const [active, setActive] = useState("personal");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Handler to change section
  const handleSectionChange = (id: string) => {
    setActive(id);
    setSidebarOpen(false); // close sidebar on mobile after selection
  };

  return (
    <div className="min-h-screen relative transition-colors duration-350 bg-background text-foreground overflow-hidden">
      <Spotlight />
      {/* <ThemeToggle /> */}
      <StarsBackground />
      {/* Mobile sidebar toggle button */}
      <button
        className="fixed top-4 left-4 z-40 flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
        aria-label="Toggle sidebar"
        onClick={() => setSidebarOpen((open) => !open)}
      >
        {/* Hamburger icon */}
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      <div className="flex w-full max-w-6xl mx-auto pt-10 gap-8 relative z-10">
        {/* Sidebar Overlay - only on mobile */}
        <div
          className={`fixed inset-0 z-30 bg-black/40 md:hidden transition-opacity duration-300 ${sidebarOpen ? 'block opacity-100' : 'hidden opacity-0'}`}
          onClick={() => setSidebarOpen(false)}
        />
        {/* Sidebar: mobile slides in, desktop as before */}
        <div
          className={`md:static md:block md:w-72 md:min-w-[260px] md:max-w-xs ${
            sidebarOpen ? 'fixed top-0 left-0 h-full w-72 z-40 transition-transform duration-300 translate-x-0 md:translate-x-0' :
            'fixed top-0 left-0 h-full w-72 z-40 transition-transform duration-300 -translate-x-full md:translate-x-0 md:relative md:left-0 md:top-0'
          }`}
          style={{ maxWidth: '20rem', minWidth: '16.25rem' }}
        >
          <Sidebar onNavClick={handleSectionChange} active={active} />
        </div>
        {/* Main content: full width on mobile, margin left on desktop */}
        <div className="flex-1 pl-0">
          <MainContent active={active} />
        </div>
      </div>
    </div>
  );
}

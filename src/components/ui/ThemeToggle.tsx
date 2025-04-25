import React, { useEffect, useState } from "react";

// Simple sun and moon icons
const Sun = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2"/><path stroke="currentColor" strokeWidth="2" d="M12 1v2m0 18v2m11-11h-2M3 12H1m16.95 6.95-1.414-1.414M6.464 6.464 5.05 5.05m12.02 0-1.414 1.414M6.464 17.536 5.05 18.95"/></svg>
);
const Moon = () => (
  <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="2" d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 1 0 9.79 9.79z"/></svg>
);

const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<string>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light";
    }
    return "light";
  });
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setAnimating(true);
    setTimeout(() => {
      setTheme(theme === "dark" ? "light" : "dark");
      setAnimating(false);
    }, 350); // match transition duration
  };

  return (
    <button
      className={`fixed top-4 right-4 z-50 p-2 rounded-full border transition-colors bg-background text-foreground shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 ${animating ? "theme-switching" : ""}`}
      aria-label="Toggle theme"
      onClick={toggleTheme}
      style={{ transition: "background 0.35s, color 0.35s" }}
    >
      <span className="block transition-transform duration-300 ease-in-out" style={{ transform: animating ? "rotate(180deg) scale(1.2)" : "none" }}>
        {theme === "dark" ? <Sun /> : <Moon />}
      </span>
    </button>
  );
};

export default ThemeToggle;

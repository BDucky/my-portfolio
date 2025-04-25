import { useEffect, useRef } from "react";

const getTheme = () => {
  if (typeof window === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
};

export default function Spotlight() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveSpot = (e: MouseEvent) => {
      if (!spotRef.current) return;
      const x = e.clientX;
      const y = e.clientY;
      spotRef.current.style.left = `${x - 250}px`;
      spotRef.current.style.top = `${y - 250}px`;
    };
    window.addEventListener("mousemove", moveSpot);
    return () => window.removeEventListener("mousemove", moveSpot);
  }, []);

  // Theme-aware radial gradient
  const theme = getTheme();
  const gradient =
    theme === "dark"
      ? "radial-gradient(circle at center, rgba(56,189,248,0.15) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)"
      : "radial-gradient(circle at center, rgba(56,189,248,0.18) 0%, rgba(255,255,255,0.1) 60%, transparent 100%)";

  return (
    <div
      ref={spotRef}
      style={{
        position: "fixed",
        zIndex: 1,
        pointerEvents: "none",
        width: 500,
        height: 500,
        left: 0,
        top: 0,
        background: gradient,
        borderRadius: "50%",
        filter: "blur(30px)",
        transition: "background 0.3s",
        mixBlendMode: "lighten",
      }}
    />
  );
}

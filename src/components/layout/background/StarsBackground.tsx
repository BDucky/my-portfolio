import { useEffect } from "react";
import "./index.css";

function Stars() {
  useEffect(() => {
    const count = 80;
    const container = document.getElementById("stars");
    if (!container) return;
    container.innerHTML = "";
    for (let i = 0; i < count; i++) {
      const star = document.createElement("div");
      star.className = "galaxy-star";
      star.style.top = Math.random() * 100 + "vh";
      star.style.left = Math.random() * 100 + "vw";
      star.style.animationDuration = 1.5 + Math.random() + "s";
      container.appendChild(star);
    }
  }, []);
  return <div id="stars" className="stars" />;
}
export default function StarsBackground() {
  return <Stars />;
}

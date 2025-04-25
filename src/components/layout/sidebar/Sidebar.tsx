// import React from "react";

const navLinks = [
  { id: "personal", label: "About" },
  { id: "experience", label: "Experiences" },
  { id: "timeline", label: "Projects" },
];

export default function Sidebar({ onNavClick, active }: { onNavClick: (id: string) => void; active: string }) {
  return (
    <aside className="sidebar flex flex-col items-center w-72 min-w-[260px] max-w-xs rounded-2xl py-8 px-6 bg-white/90 dark:bg-zinc-900/90 shadow-xl border border-zinc-200 dark:border-zinc-800">
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-28 h-28 rounded-xl object-cover mb-4 border-4 border-primary shadow-md"
      />
      {/* Name & Title */}
      <h2 className="text-2xl font-bold text-primary mb-1 text-center">Nguyễn Thanh Diệu</h2>
      <p className="text-sm text-muted-foreground mb-3 text-center">Software Engineer - Front end</p>
      {/* Contact Info */}
      <div className="text-xs text-zinc-700 dark:text-zinc-300 mb-4 w-full">
        <div><b>Birthday:</b> 1996/09/21</div>
        <div><b>Email:</b> nguyenthanhdieu96@gmail.com</div>
        <div><b>Phone:</b> (+84) 373 766 052</div>
        <div><b>Skype Live:</b> live:nguyenthanhdieu96</div>
      </div>
      {/* Navigation */}
      <nav className="flex gap-4 w-full justify-center mb-4">
        {navLinks.map((link) => (
          <button
            key={link.id}
            className={`px-3 py-1 rounded-lg font-medium transition-all duration-300 text-sm
              ${active === link.id ? "bg-primary text-primary-foreground scale-105 shadow-md" : "hover:bg-zinc-100 dark:hover:bg-zinc-800"}
            `}
            onClick={() => onNavClick(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>
      {/* Socials */}
      <div className="flex gap-4 mt-2 text-xl text-zinc-600 dark:text-zinc-300">
        <a href="#" aria-label="GitHub"><i className="fa-brands fa-github" /></a>
        <a href="#" aria-label="LinkedIn"><i className="fa-brands fa-linkedin" /></a>
        <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook" /></a>
      </div>
    </aside>
  );
}

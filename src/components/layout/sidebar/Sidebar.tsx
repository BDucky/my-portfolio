import { User, Briefcase, BookOpen } from "lucide-react";

const navLinks = [
  { id: "personal", label: "About", icon: User },
  { id: "experience", label: "Experiences", icon: Briefcase },
  { id: "timeline", label: "Projects", icon: BookOpen },
];

export default function Sidebar({ onNavClick, active }: { onNavClick: (id: string) => void; active: string }) {
  return (
    <aside className="sidebar flex flex-col items-center w-72 min-w-[260px] max-w-xs rounded-2xl py-8 px-6 bg-white/90 dark:bg-zinc-900/90 shadow-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-md">
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-28 h-28 rounded-xl object-cover mb-4 border-4 border-primary shadow-md"
      />
      {/* Name & Title */}
      <h2 className="text-2xl font-bold text-primary mb-1 text-center">Lê Bình</h2>
      <p className="text-sm text-muted-foreground mb-3 text-center">Software Engineer - Frontend Developer</p>
      {/* Contact Info */}
      <div className="text-xs text-zinc-700 dark:text-zinc-300 mb-4 w-full">
        <div><b>DOB:</b> Jan 3rd, 1999</div>
        <div><b>Email:</b> lebinh030199@gmail.com</div>
        <div><b>Phone:</b> (+84) 972 711 157</div>
      </div>
      {/* Navigation */}
      <nav className="flex flex-col gap-2 w-full mb-4">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = active === link.id;
          return (
            <button
              key={link.id}
              className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-base tracking-wide outline-none border border-transparent focus:ring-2 focus:ring-primary/50
                ${isActive
                  ? "bg-primary/90 text-primary-foreground scale-[1.04] shadow-lg border-primary/70 ring-2 ring-primary/40"
                  : "hover:bg-zinc-100 dark:hover:bg-zinc-800 bg-transparent text-zinc-700 dark:text-zinc-200"}
              `}
              style={{overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}
              onClick={() => onNavClick(link.id)}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-zinc-500 dark:text-zinc-400'} transition-colors`} />
              {link.label}
            </button>
          );
        })}
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

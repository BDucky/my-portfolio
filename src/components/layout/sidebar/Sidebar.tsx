import { Briefcase, User } from "lucide-react";

const navLinks = [
  { id: "personal", label: "About", icon: User },
  { id: "experience", label: "Experiences", icon: Briefcase },
  // { id: "timeline", label: "Projects", icon: BookOpen },
];

export default function Sidebar({ onNavClick, active }: { onNavClick: (id: string) => void; active: string }) {
  return (
    <aside className="sidebar fixed top-16 w-72 min-w-[260px] max-w-xs flex flex-col gap-2 items-center rounded-2xl py-6 px-6 bg-white/90 dark:bg-zinc-900/90 shadow-2xl border border-zinc-200 dark:border-zinc-800 backdrop-blur-md z-30">
      {/* Profile Image */}
      <img
        src="/profile.jpg"
        alt="Profile"
        className="w-24 h-24 rounded-xl object-cover mb-3 border-4 border-primary shadow-md"
      />
      {/* Name & Title */}
      <h2 className="text-2xl font-bold text-primary mb-1 text-center">Binh Le (Mr.)</h2>
      <p className="text-sm text-muted-foreground mb-2 text-center">Software Engineer - Frontend Developer</p>
      {/* Contact Info */}
      <div className="text-xs text-zinc-700 dark:text-zinc-300 mb-3 w-full space-y-1">
        <div><b>DOB:</b> Jan 3rd, 1999</div>
        <div><b>Email:</b> lebinh030199@gmail.com</div>
        <div><b>Phone:</b> (+84) 972 711 157</div>
      </div>
      {/* Navigation */}
      <nav className="flex flex-col gap-2 w-full mb-3">
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
      <div className="flex gap-3 w-full justify-around mt-2 text-lg text-zinc-600 dark:text-zinc-300">
        <a href="https://github.com/BDucky" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-primary transition-colors">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.426 2.865 8.181 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.156-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
        </a>
        <a href="https://www.linkedin.com/in/binh-le-855374272/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-primary transition-colors">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.268h-3v-4.604c0-1.099-.021-2.513-1.531-2.513-1.531 0-1.767 1.195-1.767 2.429v4.688h-3v-9h2.881v1.233h.041c.401-.756 1.381-1.555 2.844-1.555 3.041 0 3.604 2.003 3.604 4.605v4.717z"/></svg>
        </a>
        <a href="https://www.facebook.com/lebinhh0301/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-primary transition-colors">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.676 0h-21.352c-.731 0-1.324.593-1.324 1.324v21.352c0 .731.593 1.324 1.324 1.324h11.495v-9.294h-3.124v-3.622h3.124v-2.672c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24h-1.918c-1.504 0-1.797.715-1.797 1.763v2.314h3.587l-.467 3.622h-3.12v9.294h6.116c.73 0 1.324-.593 1.324-1.324v-21.352c0-.731-.593-1.324-1.324-1.324z"/></svg>
        </a>
        <a href="https://x.com/DraxyDucky" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-primary transition-colors">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.48 4.48 0 0 0 1.964-2.475 8.94 8.94 0 0 1-2.828 1.084A4.478 4.478 0 0 0 11.08 9.03c0 .351.04.693.116 1.02-3.724-.187-7.028-1.97-9.24-4.677a4.49 4.49 0 0 0-.606 2.253c0 1.553.791 2.924 2 3.73a4.466 4.466 0 0 1-2.03-.561v.057a4.48 4.48 0 0 0 3.59 4.393c-.192.052-.395.08-.604.08-.148 0-.29-.014-.43-.04.292.91 1.14 1.572 2.144 1.59A8.98 8.98 0 0 1 2 19.54a12.7 12.7 0 0 0 6.88 2.017c8.258 0 12.783-6.838 12.783-12.77 0-.195-.004-.39-.013-.583A9.14 9.14 0 0 0 24 4.59a8.97 8.97 0 0 1-2.54.698z"/></svg>
        </a>
      </div>
    </aside>
  );
}

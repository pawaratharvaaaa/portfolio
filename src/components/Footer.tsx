import { Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#262626] px-6 py-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-[#404040]">
          © {new Date().getFullYear()} Atharva Anil Pawar
        </p>
        <div className="flex items-center gap-5">
          {[
            { href: "https://github.com/", icon: Github, label: "GitHub" },
            { href: "https://linkedin.com/", icon: Linkedin, label: "LinkedIn" },
            { href: "https://twitter.com/", icon: Twitter, label: "Twitter" },
          ].map(({ href, icon: Icon, label }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer"
              className="text-[#404040] hover:text-[#737373] transition-colors" aria-label={label}>
              <Icon size={15} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

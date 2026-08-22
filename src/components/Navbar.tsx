import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#262626]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#"
          className="font-display font-semibold text-base tracking-tight text-[#f5f5f5] hover:text-white transition-colors"
        >
          AP<span className="text-[#737373]">.</span>
        </a>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center text-sm px-4 py-2 rounded-full border border-[#262626] text-[#f5f5f5] hover:bg-[#f5f5f5] hover:text-[#0a0a0a] transition-all duration-200"
        >
          Hire me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={cn(
              "block w-5 h-px bg-[#f5f5f5] transition-transform origin-center",
              open && "rotate-45 translate-y-[7px]"
            )}
          />
          <span
            className={cn(
              "block w-5 h-px bg-[#f5f5f5] transition-opacity",
              open && "opacity-0"
            )}
          />
          <span
            className={cn(
              "block w-5 h-px bg-[#f5f5f5] transition-transform origin-center",
              open && "-rotate-45 -translate-y-[7px]"
            )}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#262626] px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

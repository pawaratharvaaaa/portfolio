import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#0a0a0a]">
      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(#f5f5f5 1px, transparent 1px), linear-gradient(90deg, #f5f5f5 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_60%,rgba(255,255,255,0.04),transparent)]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-2xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-[#262626] bg-[#111111]/80">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-[#a3a3a3]">Available for work</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-[#f5f5f5] mb-6">
            Atharva
            <br />
            <span className="text-[#737373]">Anil Pawar</span>
          </h1>

          <p className="text-base sm:text-lg text-[#a3a3a3] leading-relaxed mb-10 max-w-lg">
            19-year-old frontend developer crafting minimal, high-performance
            web experiences. I turn ideas into clean, interactive interfaces.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f5f5f5] text-[#0a0a0a] text-sm font-medium hover:bg-white transition-colors"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#262626] text-[#f5f5f5] text-sm hover:border-[#404040] transition-colors"
            >
              Get in touch
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-5 mt-12">
            <a
              href="https://github.com/pawaratharvaaaa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737373] hover:text-[#f5f5f5] transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737373] hover:text-[#f5f5f5] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#737373] hover:text-[#f5f5f5] transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-[#737373] hover:text-[#a3a3a3] transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-xs tracking-widest uppercase">scroll</span>
          <ArrowDown size={14} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}

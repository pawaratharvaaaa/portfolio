import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react";
import { ImageStreamHero } from "@/components/ui/image-stream-hero";

const IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80",
    alt: "Code on screen",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80",
    alt: "Developer workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80",
    alt: "Laptop with code",
  },
  {
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80",
    alt: "Programming",
  },
  {
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80",
    alt: "Working on laptop",
  },
  {
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80",
    alt: "Code abstract",
  },
  {
    src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80",
    alt: "Code editor",
  },
  {
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80",
    alt: "Technology circuit",
  },
  {
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80",
    alt: "Digital world",
  },
  {
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80",
    alt: "Matrix code",
  },
  {
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80",
    alt: "Gaming setup",
  },
  {
    src: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&q=80",
    alt: "Developer at work",
  },
];

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col">
      <ImageStreamHero
        images={IMAGES}
        cards={9}
        speed={20}
        axis={52}
        className="absolute inset-0 w-full h-full"
      >
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/60 via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/80 via-transparent to-[#0a0a0a]/80" />
      </ImageStreamHero>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 max-w-6xl mx-auto px-6 pt-32 pb-24">
        <div className="max-w-2xl">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 mb-8 px-3 py-1.5 rounded-full border border-[#262626] bg-[#111111]/80 backdrop-blur-sm">
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
              href="https://github.com/"
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

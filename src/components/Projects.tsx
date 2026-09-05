import { useState, useEffect } from "react";
import { ArrowUpRight, Github, GitFork, X, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { RadialScrollGallery } from "@/components/ui/portfolio-and-image-gallery";
import { cn } from "@/lib/utils";

type Project = {
  number: string;
  title: string;
  cat: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Muscle Empire",
    cat: "Fitness",
    description:
      "A fitness-focused web app for tracking workouts, building muscle programs, and exploring exercises. Clean UI with a strong visual identity.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80",
    github: "https://github.com/pawaratharvaaaa/muscleempire",
  },
  {
    number: "02",
    title: "Appeul Music",
    cat: "Music",
    description:
      "An Apple Music-inspired music player UI with smooth animations, playlist browsing, and a polished player interface built for the web.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&q=80",
    github: "https://github.com/pawaratharvaaaa/appeul-music",
  },
  {
    number: "03",
    title: "WeDoIt",
    cat: "Productivity",
    description:
      "A collaborative task management web app. Create tasks, assign them, and track progress — all in a minimal, distraction-free interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=400&q=80",
    github: "https://github.com/pawaratharvaaaa/wedoithttps",
  },
  {
    number: "04",
    title: "Portfolio",
    cat: "Dev",
    description:
      "This very portfolio — built with React, TypeScript, Tailwind CSS v4, and a custom 3D corridor image stream hero. Minimal, fast, and responsive.",
    tags: ["React", "TypeScript", "Tailwind", "Vite"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=400&q=80",
    github: "https://github.com/pawaratharvaaaa/portfolio",
  },
  {
    number: "05",
    title: "Muscle Empire",
    cat: "Collab",
    description:
      "A collaborative version of Muscle Empire built with kinjal-webdev. Extended features, shared codebase, and refined design details.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80",
    github: "https://github.com/kinjal-webdev/muscle-empire",
  },
];

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-6xl bg-[#111111] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl grid lg:grid-cols-[1fr_360px]">
        {/* Left */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <p className="text-xs text-[#404040] font-mono mb-4">{project.number}</p>
            <h3 className="font-display text-xl font-semibold text-[#f5f5f5] mb-3">{project.title}</h3>
            <p className="text-sm text-[#a3a3a3] leading-relaxed mb-6 max-w-md">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 rounded-full border border-[#262626] text-[#737373]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f5f5f5] text-[#0a0a0a] text-sm font-medium hover:bg-white transition-colors"
            >
              <Github size={15} /> View on GitHub
            </a>
            <a
              href={`${project.github}/fork`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#262626] text-[#a3a3a3] text-sm hover:border-[#404040] hover:text-[#f5f5f5] transition-all"
            >
              <GitFork size={15} /> Fork me on GitHub
            </a>
          </div>
        </div>
        {/* Right — image */}
        <div className="relative overflow-hidden h-48 lg:h-auto">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent lg:block hidden" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-[#0a0a0a]/80 border border-[#262626] flex items-center justify-center text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors"
            aria-label="Close"
          >
            <X size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="border-t border-[#262626] bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-4">
        <p className="text-xs tracking-widest uppercase text-[#737373] mb-4">Projects</p>
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#f5f5f5] leading-tight">
            Selected work
          </h2>
          <a
            href="https://github.com/pawaratharvaaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[#737373] hover:text-[#f5f5f5] transition-colors"
          >
            All projects <ExternalLink size={13} />
          </a>
        </div>
        <p className="text-xs text-[#404040] mt-3">Scroll to explore →</p>
      </div>

      {/* Radial Gallery */}
      <RadialScrollGallery
        baseRadius={420}
        mobileRadius={220}
        visiblePercentage={52}
        scrollDuration={2200}
        className="!min-h-[700px]"
        onItemSelect={(i) => setSelected(PROJECTS[i])}
      >
        {(hoveredIndex) =>
          PROJECTS.map((project, index) => {
            const isActive = hoveredIndex === index;
            return (
              <div
                key={project.number}
                className={cn(
                  "relative w-[180px] h-[240px] sm:w-[210px] sm:h-[280px] overflow-hidden rounded-xl border border-[#262626] shadow-lg bg-[#111111]",
                  "transition-all duration-500"
                )}
              >
                {/* Image */}
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={cn(
                      "h-full w-full object-cover transition-transform duration-700 ease-out",
                      isActive ? "scale-110 blur-0" : "scale-100 blur-[1px] grayscale-[30%]"
                    )}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/10 to-transparent opacity-70" />
                </div>

                {/* Overlay content */}
                <div className="absolute inset-0 flex flex-col justify-between p-4">
                  <div className="flex justify-between items-start">
                    <Badge
                      variant="secondary"
                      className="text-[10px] px-2 py-0 bg-[#0a0a0a]/80 backdrop-blur text-[#a3a3a3] border-[#262626]"
                    >
                      {project.cat}
                    </Badge>
                    <div
                      className={cn(
                        "w-6 h-6 rounded-full bg-[#f5f5f5] text-[#0a0a0a] flex items-center justify-center transition-all duration-500",
                        isActive ? "opacity-100 rotate-0" : "opacity-0 -rotate-45"
                      )}
                    >
                      <ArrowUpRight size={12} />
                    </div>
                  </div>

                  <div className={cn("transition-transform duration-500", isActive ? "translate-y-0" : "translate-y-2")}>
                    <p className="text-[10px] text-[#404040] font-mono mb-1">{project.number}</p>
                    <h3 className="text-base font-bold leading-tight text-[#f5f5f5]">{project.title}</h3>
                    <div
                      className={cn(
                        "h-px bg-[#f5f5f5] mt-2 transition-all duration-500",
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      )}
                    />
                  </div>
                </div>
              </div>
            );
          })
        }
      </RadialScrollGallery>

      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}

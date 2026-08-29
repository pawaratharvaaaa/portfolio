import { useState, useEffect } from "react";
import { ExternalLink, Github, X, GitFork } from "lucide-react";
import { cn } from "@/lib/utils";

type Project = {
  number: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  github: string;
  live?: string;
};

const PROJECTS: Project[] = [
  {
    number: "01",
    title: "Muscle Empire",
    description:
      "A fitness-focused web app for tracking workouts, building muscle programs, and exploring exercises. Clean UI with a strong visual identity.",
    tags: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
    github: "https://github.com/pawaratharvaaaa/muscleempire",
    live: "https://github.com/pawaratharvaaaa/muscleempire",
  },
  {
    number: "02",
    title: "Appeul Music",
    description:
      "An Apple Music-inspired music player UI. Smooth animations, playlist browsing, and a polished player interface built for the web.",
    tags: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80",
    github: "https://github.com/pawaratharvaaaa/appeul-music",
    live: "https://github.com/pawaratharvaaaa/appeul-music",
  },
  {
    number: "03",
    title: "WeDoIt",
    description:
      "A collaborative task management web app. Create tasks, assign them, and track progress — all in a minimal, distraction-free interface.",
    tags: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80",
    github: "https://github.com/pawaratharvaaaa/wedoithttps",
    live: "https://github.com/pawaratharvaaaa/wedoithttps",
  },
  {
    number: "04",
    title: "Portfolio",
    description:
      "This very portfolio — built with React, TypeScript, Tailwind CSS v4, and a custom 3D corridor image stream hero. Minimal, fast, and responsive.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&q=80",
    github: "https://github.com/pawaratharvaaaa/portfolio",
    live: "https://github.com/pawaratharvaaaa/portfolio",
  },
  {
    number: "05",
    title: "Muscle Empire (Collab)",
    description:
      "A collaborative version of Muscle Empire built with kinjal-webdev. Extended features, shared codebase, and refined design details.",
    tags: ["HTML", "CSS", "JavaScript"],
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    github: "https://github.com/kinjal-webdev/muscle-empire",
    live: "https://github.com/kinjal-webdev/muscle-empire",
  },
];

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal — same width & grid as cards */}
      <div className="relative z-10 w-full max-w-6xl bg-[#111111] border border-[#262626] rounded-2xl overflow-hidden shadow-2xl grid lg:grid-cols-[1fr_360px]">
        {/* Left — content */}
        <div className="p-8 flex flex-col justify-between">
          <div>
            <p className="text-xs text-[#404040] font-mono mb-4">{project.number}</p>
            <h3 className="font-display text-xl font-semibold text-[#f5f5f5] mb-3">
              {project.title}
            </h3>
            <p className="text-sm text-[#a3a3a3] leading-relaxed mb-6 max-w-md">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2.5 py-1 rounded-full border border-[#262626] text-[#737373]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f5f5f5] text-[#0a0a0a] text-sm font-medium hover:bg-white transition-colors"
            >
              <Github size={15} />
              View on GitHub
            </a>
            <a
              href={`${project.github}/fork`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#262626] text-[#a3a3a3] text-sm hover:border-[#404040] hover:text-[#f5f5f5] transition-all"
            >
              <GitFork size={15} />
              Fork me on GitHub
            </a>
          </div>
        </div>

        {/* Right — image */}
        <div className="relative overflow-hidden h-48 lg:h-auto">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent lg:block hidden" />

          {/* Close button */}
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
    <section id="projects" className="py-28 px-6 border-t border-[#262626]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#737373] mb-4">
          Projects
        </p>
        <div className="flex items-end justify-between mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#f5f5f5] leading-tight">
            Selected work
          </h2>
          <a
            href="https://github.com/pawaratharvaaaa"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[#737373] hover:text-[#f5f5f5] transition-colors"
          >
            All projects
            <ExternalLink size={13} />
          </a>
        </div>

        <div className="space-y-4">
          {PROJECTS.map((project) => (
            <article
              key={project.number}
              onClick={() => setSelected(project)}
              className={cn(
                "group grid lg:grid-cols-[1fr_360px] rounded-2xl border border-[#262626] bg-[#111111]",
                "hover:border-[#404040] hover:bg-[#141414] transition-all duration-300 overflow-hidden cursor-pointer"
              )}
            >
              {/* Text */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#404040] font-mono mb-4">
                    {project.number}
                  </p>
                  <h3 className="font-display text-xl font-semibold text-[#f5f5f5] mb-3 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#a3a3a3] leading-relaxed mb-6 max-w-md line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full border border-[#262626] text-[#737373]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <p className="mt-6 text-xs text-[#404040] group-hover:text-[#737373] transition-colors">
                  Click to view details →
                </p>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden h-48 lg:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent lg:block hidden" />
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  );
}

import { ExternalLink, Github } from "lucide-react";

const PROJECTS = [
  {
    number: "01",
    title: "DevFlow",
    description:
      "A productivity dashboard for developers with task tracking, GitHub integration, and a Pomodoro timer. Built for speed and minimal distraction.",
    tags: ["React", "TypeScript", "Tailwind", "Node.js"],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    github: "https://github.com/",
    live: "https://example.com/",
  },
  {
    number: "02",
    title: "Nuvra UI",
    description:
      "An open-source component library with accessible, minimal React components. Includes 30+ components with full TypeScript support.",
    tags: ["React", "TypeScript", "CSS Variables", "Storybook"],
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    github: "https://github.com/",
    live: "https://example.com/",
  },
  {
    number: "03",
    title: "Pulse",
    description:
      "A real-time crypto price tracker with custom charts, watchlists, and price alerts. Handles live WebSocket data with smooth animations.",
    tags: ["Next.js", "WebSocket", "Chart.js", "REST API"],
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    github: "https://github.com/",
    live: "https://example.com/",
  },
  {
    number: "04",
    title: "Folio CMS",
    description:
      "A headless CMS prototype for portfolios and blogs. Drag-and-drop layout editor, image optimization, and Markdown support.",
    tags: ["React", "Node.js", "Express", "MongoDB"],
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    github: "https://github.com/",
    live: "https://example.com/",
  },
];

export function Projects() {
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
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm text-[#737373] hover:text-[#f5f5f5] transition-colors"
          >
            All projects
            <ExternalLink size={13} />
          </a>
        </div>

        <div className="space-y-6">
          {PROJECTS.map((project) => (
            <article
              key={project.number}
              className="group grid lg:grid-cols-[1fr_360px] gap-0 rounded-2xl border border-[#262626] bg-[#111111] hover:border-[#404040] transition-all duration-300 overflow-hidden"
            >
              {/* Text */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <p className="text-xs text-[#404040] font-mono mb-4">
                    {project.number}
                  </p>
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
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#737373] hover:text-[#f5f5f5] transition-colors"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={15} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-[#f5f5f5] hover:text-white transition-colors"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink size={15} />
                    Live demo
                  </a>
                </div>
              </div>

              {/* Image */}
              <div className="relative overflow-hidden h-48 lg:h-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-transparent to-transparent lg:block hidden" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

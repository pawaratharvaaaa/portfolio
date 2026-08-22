const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    category: "Frameworks",
    items: ["React", "Next.js", "Vite", "Node.js"],
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Framer Motion", "GSAP", "CSS Modules"],
  },
  {
    category: "Tools",
    items: ["Git", "Figma", "VS Code", "Vercel"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-28 px-6 border-t border-[#262626]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#737373] mb-4">
          Skills
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#f5f5f5] mb-16 leading-tight">
          What I work with
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILLS.map((group) => (
            <div
              key={group.category}
              className="p-6 rounded-2xl bg-[#111111] border border-[#262626] hover:border-[#404040] transition-colors"
            >
              <p className="text-xs tracking-widest uppercase text-[#737373] mb-5">
                {group.category}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-2.5 text-sm text-[#a3a3a3]"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#404040] flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Marquee strip */}
        <div className="mt-16 overflow-hidden border-t border-b border-[#262626] py-4">
          <div
            className="flex gap-8 whitespace-nowrap"
            style={{
              animation: "marquee 20s linear infinite",
            }}
          >
            {[
              "React",
              "TypeScript",
              "Tailwind",
              "Next.js",
              "Node.js",
              "Figma",
              "Vite",
              "GSAP",
              "Framer Motion",
              "Git",
              "Vercel",
              "REST APIs",
              "React",
              "TypeScript",
              "Tailwind",
              "Next.js",
              "Node.js",
              "Figma",
              "Vite",
              "GSAP",
              "Framer Motion",
              "Git",
              "Vercel",
              "REST APIs",
            ].map((t, i) => (
              <span
                key={i}
                className="text-xs text-[#404040] tracking-widest uppercase flex-shrink-0"
              >
                {t}
                <span className="ml-8 text-[#262626]">✦</span>
              </span>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
}

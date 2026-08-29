import { ImageStreamHero } from "@/components/ui/image-stream-hero";

const SKILLS = [
  { category: "Languages", items: ["TypeScript", "JavaScript", "HTML5", "CSS3"] },
  { category: "Frameworks", items: ["React", "Next.js", "Vite", "Node.js"] },
  { category: "Styling", items: ["Tailwind CSS", "Framer Motion", "GSAP", "CSS Modules"] },
  { category: "Tools", items: ["Git", "Figma", "VS Code", "Vercel"] },
];

const IMAGES = [
  { src: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=400&q=80", alt: "Code" },
  { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&q=80", alt: "Dev workspace" },
  { src: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=400&q=80", alt: "Laptop code" },
  { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&q=80", alt: "Programming" },
  { src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=80", alt: "Code abstract" },
  { src: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=400&q=80", alt: "Code editor" },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=80", alt: "Tech circuit" },
  { src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&q=80", alt: "Working" },
  { src: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?w=400&q=80", alt: "Developer" },
  { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=80", alt: "Matrix" },
  { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=80", alt: "Setup" },
  { src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=80", alt: "Digital" },
];

export function Skills() {
  return (
    <section id="skills" className="relative border-t border-[#262626] overflow-hidden">
      {/* Corridor stream as full background */}
      <ImageStreamHero
        images={IMAGES}
        cards={9}
        speed={22}
        axis={50}
        className="absolute inset-0 w-full h-full"
      />

      {/* Dark overlay so content stays readable */}
      <div className="absolute inset-0 bg-[#0a0a0a]/85" />

      {/* Content */}
      <div className="relative z-10 py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="text-xs tracking-widest uppercase text-[#737373] mb-4">Skills</p>
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#f5f5f5] mb-16 leading-tight">
            What I work with
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-2xl bg-[#111111]/70 backdrop-blur-sm border border-[#262626] hover:border-[#404040] transition-colors"
              >
                <p className="text-xs tracking-widest uppercase text-[#737373] mb-5">
                  {group.category}
                </p>
                <ul className="space-y-2.5">
                  {group.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-sm text-[#a3a3a3]">
                      <span className="w-1 h-1 rounded-full bg-[#404040] flex-shrink-0" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Marquee strip */}
          <div className="mt-16 overflow-hidden border-t border-b border-[#262626]/60 py-4">
            <div
              className="flex gap-8 whitespace-nowrap"
              style={{ animation: "marquee 20s linear infinite" }}
            >
              {[
                "React","TypeScript","Tailwind","Next.js","Node.js","Figma",
                "Vite","GSAP","Framer Motion","Git","Vercel","REST APIs",
                "React","TypeScript","Tailwind","Next.js","Node.js","Figma",
                "Vite","GSAP","Framer Motion","Git","Vercel","REST APIs",
              ].map((t, i) => (
                <span key={i} className="text-xs text-[#404040] tracking-widest uppercase flex-shrink-0">
                  {t}<span className="ml-8 text-[#262626]">✦</span>
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
      </div>
    </section>
  );
}

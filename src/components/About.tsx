export function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <p className="text-xs tracking-widest uppercase text-[#737373] mb-4">
              About
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#f5f5f5] leading-tight mb-6">
              Building the web,
              <br />
              one pixel at a time.
            </h2>
            <div className="space-y-4 text-[#a3a3a3] text-sm leading-relaxed">
              <p>
                I'm Atharva, a 19-year-old frontend developer from India. I
                care deeply about the intersection of design and code — building
                interfaces that feel as good as they look.
              </p>
              <p>
                I work with React, TypeScript, and Tailwind CSS to craft fast,
                accessible, and visually sharp web experiences. Whether it's a
                side project or a client product, I bring the same attention to
                detail to every pixel.
              </p>
              <p>
                When I'm not coding, I'm exploring new UI patterns, reading
                about design systems, or experimenting with creative dev ideas.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { label: "Age", value: "19" },
                { label: "Focus", value: "Frontend" },
                { label: "Status", value: "Open to work" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs text-[#737373] mb-1">{item.label}</p>
                  <p className="text-sm font-medium text-[#f5f5f5]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — photo placeholder / decorative block */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-[#111111] border border-[#262626] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=600&q=80"
                alt="Developer working"
                className="w-full h-full object-cover opacity-60"
              />
              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#0a0a0a]/80 backdrop-blur-md rounded-xl p-4 border border-[#262626]">
                <p className="text-xs text-[#737373] mb-1">Currently building</p>
                <p className="text-sm font-medium text-[#f5f5f5]">
                  Personal portfolio v2
                </p>
              </div>
            </div>

            {/* Floating tag */}
            <div className="absolute -top-4 -right-4 bg-[#111111] border border-[#262626] rounded-xl px-4 py-3 hidden sm:block">
              <p className="text-2xl font-display font-semibold text-[#f5f5f5]">
                19
              </p>
              <p className="text-xs text-[#737373]">years old</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

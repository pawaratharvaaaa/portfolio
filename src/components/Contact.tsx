import { Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const WHATSAPP_NUMBER = "918850061997"; // country code + number, no +

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    const text = `Hi Atharva! 👋\n\n*Name:* ${name}\n*Email:* ${email}\n\n*Message:*\n${message}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="py-28 px-6 border-t border-[#262626]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#737373] mb-4">
          Contact
        </p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#f5f5f5] mb-16 leading-tight">
          Let's build something
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left — contact info */}
          <div>
            <p className="text-sm text-[#a3a3a3] leading-relaxed mb-10 max-w-sm">
              I'm open to freelance projects, internships, and full-time roles.
              Drop me a message and I'll get back within 24 hours.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:pawaratharvaak@gmail.com"
                className="flex items-center gap-3 text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors group"
              >
                <span className="w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center group-hover:border-[#404040] transition-colors">
                  <Mail size={14} className="text-[#737373]" />
                </span>
                pawaratharvaak@gmail.com
              </a>

              <a
                href="https://wa.me/918850061997"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors group"
              >
                <span className="w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center group-hover:border-[#404040] transition-colors">
                  <Phone size={14} className="text-[#737373]" />
                </span>
                +91 88500 61997
              </a>

              <div className="flex items-center gap-3 text-sm text-[#a3a3a3]">
                <span className="w-8 h-8 rounded-full border border-[#262626] flex items-center justify-center">
                  <MapPin size={14} className="text-[#737373]" />
                </span>
                India
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918850061997"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2.5 px-5 py-3 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-[#25D366] text-sm hover:bg-[#25D366]/20 transition-colors"
            >
              {/* WhatsApp icon */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-xs text-[#737373] mb-2">
                  {f.label}
                </label>
                <input
                  id={f.id}
                  name={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  className="w-full bg-[#111111] border border-[#262626] rounded-xl px-4 py-3 text-sm text-[#f5f5f5] placeholder-[#404040] focus:outline-none focus:border-[#525252] transition-colors"
                />
              </div>
            ))}

            <div>
              <label htmlFor="message" className="block text-xs text-[#737373] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project..."
                required
                rows={5}
                className="w-full bg-[#111111] border border-[#262626] rounded-xl px-4 py-3 text-sm text-[#f5f5f5] placeholder-[#404040] focus:outline-none focus:border-[#525252] transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] text-white text-sm font-medium hover:bg-[#22c55e] transition-colors"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Send via WhatsApp
            </button>

            <p className="text-xs text-[#404040]">
              Submitting will open WhatsApp with your message pre-filled.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

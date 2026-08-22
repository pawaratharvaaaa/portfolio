import { useState } from "react";
import { Send, Mail, MapPin } from "lucide-react";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-28 px-6 border-t border-[#262626]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#737373] mb-4">Contact</p>
        <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#f5f5f5] mb-16 leading-tight">
          Let's build something
        </h2>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <p className="text-sm text-[#a3a3a3] leading-relaxed mb-10 max-w-sm">
              I'm open to freelance projects, internships, and full-time roles.
              Drop me a message and I'll get back within 24 hours.
            </p>
            <div className="space-y-5">
              <a href="mailto:atharva@example.com" className="flex items-center gap-3 text-sm text-[#a3a3a3] hover:text-[#f5f5f5] transition-colors">
                <Mail size={16} className="text-[#737373]" />
                atharva@example.com
              </a>
              <div className="flex items-center gap-3 text-sm text-[#a3a3a3]">
                <MapPin size={16} className="text-[#737373]" />
                India
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map((f) => (
              <div key={f.id}>
                <label htmlFor={f.id} className="block text-xs text-[#737373] mb-2">{f.label}</label>
                <input
                  id={f.id}
                  type={f.type}
                  placeholder={f.placeholder}
                  required
                  value={form[f.id as "name" | "email"]}
                  onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                  className="w-full bg-[#111111] border border-[#262626] rounded-xl px-4 py-3 text-sm text-[#f5f5f5] placeholder-[#404040] focus:outline-none focus:border-[#525252] transition-colors"
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" className="block text-xs text-[#737373] mb-2">Message</label>
              <textarea
                id="message"
                placeholder="Tell me about your project..."
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#111111] border border-[#262626] rounded-xl px-4 py-3 text-sm text-[#f5f5f5] placeholder-[#404040] focus:outline-none focus:border-[#525252] transition-colors resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={status !== "idle"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#f5f5f5] text-[#0a0a0a] text-sm font-medium hover:bg-white transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : status === "sent" ? "Message sent ✓" : (
                <><Send size={14} /> Send message</>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

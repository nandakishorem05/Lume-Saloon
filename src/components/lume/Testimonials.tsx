import { useEffect, useState } from "react";
import { Reveal } from "./Reveal";
import { Quote } from "lucide-react";

const reviews = [
  { name: "Ameena Shirin", text: "The service quality, products used, and overall vibe are just outstanding." },
  { name: "Janhara Sanah", text: "Good service and nice atmosphere. The team made me feel pampered and at ease." },
  { name: "Shabu Aash", text: "The salon is beautifully designed and the staff are very welcoming." },
];

export function Testimonials() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10 opacity-60" style={{ background: "radial-gradient(ellipse at bottom, oklch(from var(--gold) l c h / 0.06), transparent 60%)" }} />
      <div className="max-w-5xl mx-auto text-center">
        <Reveal variant="rotate"><span className="eyebrow">Kind Words</span></Reveal>
        <Reveal variant="blur" delay={100}>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
            Loved by our <em className="not-italic text-gradient-gold">guests</em>
          </h2>
        </Reveal>

        <div className="mt-10 sm:mt-16 relative min-h-[240px] sm:min-h-[280px]">
          {reviews.map((r, idx) => (
            <div
              key={r.name}
              className={`absolute inset-0 transition-all duration-1000 ${idx === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}
            >
              <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-14 max-w-3xl mx-auto">
                <Quote className="h-7 w-7 sm:h-10 sm:w-10 text-gold mx-auto mb-4 sm:mb-6 opacity-50" strokeWidth={1} />
                <p className="text-lg sm:text-xl md:text-2xl font-display italic text-foreground/85 leading-relaxed">"{r.text}"</p>
                <div className="hairline w-12 sm:w-16 mx-auto my-5 sm:my-8" />
                <div className="text-gold tracking-[0.2em] sm:tracking-[0.3em] text-[10px] sm:text-xs uppercase">{r.name}</div>
                <div className="mt-1 sm:mt-2 text-gold text-xs sm:text-sm">★ ★ ★ ★ ★</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 flex justify-center gap-2 sm:gap-3">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Show review ${idx + 1}`}
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all duration-500 ${idx === i ? "w-8 sm:w-10 bg-gold" : "w-3 sm:w-4 bg-gold/30"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

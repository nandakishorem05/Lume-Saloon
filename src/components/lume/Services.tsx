import { Reveal } from "./Reveal";
import { Scissors, Palette, Sparkles, Heart, Droplets, Flower2, User, Wand2 } from "lucide-react";

const services = [
  { icon: Scissors, title: "Hair Cut & Styling", desc: "Precision cuts and contemporary styling crafted to your features." },
  { icon: Palette, title: "Hair Coloring", desc: "Global color, balayage and highlights using premium ammonia-free brands." },
  { icon: Wand2, title: "Keratin & Smoothing", desc: "Frizz-free, glossy hair with advanced keratin and smoothing therapies." },
  { icon: Heart, title: "Bridal Makeup", desc: "Cinematic bridal looks with HD, airbrush and traditional artistry." },
  { icon: Sparkles, title: "Facials & Skin Care", desc: "Result-driven facials and clinical skincare for radiant complexion." },
  { icon: Flower2, title: "Spa & Relaxation", desc: "Restorative head, hair and body therapies in a serene atmosphere." },
  { icon: User, title: "Grooming Services", desc: "Refined grooming for the modern gentleman — beard, skin and hair." },
  { icon: Droplets, title: "Hair Treatments", desc: "Deep nourishment, hair spa and scalp therapies for healthy hair." },
];

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(ellipse at top, oklch(from var(--gold) l c h / 0.05), transparent 60%)" }} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal variant="blur"><span className="eyebrow">Our Services</span></Reveal>
          <Reveal variant="blur" delay={100}>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
              Crafted with <em className="not-italic text-gradient-gold">precision</em>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 sm:mt-6 text-foreground/60 text-sm sm:text-base">A curated menu of luxury beauty and grooming experiences.</p>
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 80} variant={i % 2 === 0 ? "up" : "scale"}>
              <div className="group relative h-full glass-card rounded-xl sm:rounded-2xl p-5 sm:p-8 transition-all duration-700 hover:-translate-y-2 hover:shadow-gold cursor-default overflow-hidden">
                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
                  <div className="absolute -inset-[100%] bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-45 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                </div>
                
                <div className="absolute -inset-px rounded-xl sm:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                     style={{ background: "linear-gradient(135deg, oklch(from var(--gold) l c h / 0.2), transparent 60%)", padding: 1 }} />
                
                <div className="relative">
                  <div className="h-10 w-10 sm:h-14 sm:w-14 rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 group-hover:scale-110"
                       style={{ background: "oklch(from var(--gold) l c h / 0.08)", border: "1px solid oklch(from var(--gold) l c h / 0.2)" }}>
                    <s.icon className="h-4 w-4 sm:h-6 sm:w-6 text-gold" strokeWidth={1.3} />
                  </div>
                  <h3 className="text-base sm:text-xl font-display text-foreground">{s.title}</h3>
                  <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground/55 leading-relaxed hidden sm:block">{s.desc}</p>
                  <div className="hairline w-8 sm:w-10 mt-4 sm:mt-6 opacity-50 group-hover:w-16 sm:group-hover:w-20 transition-all duration-700" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";
import { Award, Leaf, ShieldCheck, UserCheck, TrendingUp, Sparkles } from "lucide-react";

const features = [
  { icon: Award, title: "Experienced Stylists", desc: "Hand-picked artists with years of luxury salon expertise." },
  { icon: Leaf, title: "Premium Products", desc: "Globally trusted, ammonia-free and skin-safe brands only." },
  { icon: ShieldCheck, title: "Hygienic Environment", desc: "Sterilised tools, single-use linens and clinical hygiene." },
  { icon: UserCheck, title: "Personalized Care", desc: "Bespoke beauty plans tailored to you, never templated." },
  { icon: TrendingUp, title: "Latest Techniques", desc: "Continually trained on the newest global trends and tech." },
  { icon: Sparkles, title: "Luxury Experience", desc: "A serene, cinematic atmosphere from arrival to farewell." },
];

export function WhyUs() {
  return (
    <section className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal variant="blur"><span className="eyebrow">Why Lume</span></Reveal>
          <Reveal variant="blur" delay={100}>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
              The <em className="not-italic text-gradient-gold">Lume</em> difference
            </h2>
          </Reveal>
        </div>

        <div className="mt-12 sm:mt-20 grid grid-cols-2 lg:grid-cols-3 gap-px bg-border/60 rounded-2xl sm:rounded-3xl overflow-hidden">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 80} variant={i % 2 === 0 ? "up" : "scale"}>
              <div className="bg-background p-5 sm:p-10 h-full group transition-colors duration-700 hover:bg-card">
                <f.icon className="h-6 w-6 sm:h-8 sm:w-8 text-gold mb-4 sm:mb-6 transition-transform duration-500 group-hover:scale-110" strokeWidth={1.2} />
                <h3 className="text-base sm:text-xl font-display">{f.title}</h3>
                <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-foreground/55 leading-relaxed hidden sm:block">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";
import lounge from "@/assets/lume-lounge.jpg";
import wash from "@/assets/lume-washbay.jpg";

export function About() {
  return (
    <section id="about" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <Reveal variant="left" className="order-2 lg:order-1">
          <div className="relative">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <img src={lounge} alt="Lume salon lounge interior" className="rounded-xl object-cover h-52 sm:h-72 w-full shadow-card" />
              <img src={wash} alt="Lume premium wash bay" className="rounded-xl object-cover h-52 sm:h-72 w-full mt-8 sm:mt-12 shadow-card" />
            </div>
            <div className="absolute -inset-4 -z-10 rounded-3xl" style={{ background: "var(--gradient-radial-gold)", opacity: 0.25 }} />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal variant="right"><span className="eyebrow">About Lume</span></Reveal>
          <Reveal variant="right" delay={100}>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
              The biggest <em className="not-italic text-gradient-gold">unisex salon</em> in Vadakara
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <div className="hairline w-24 my-6 sm:my-8" />
          </Reveal>
          <Reveal delay={300}>
            <p className="text-foreground/65 text-base sm:text-lg leading-relaxed">
              Experience premium beauty and grooming at the biggest unisex salon in Vadakara. We specialize in
              professional haircuts, hair coloring, styling, smoothing, keratin, facials, skincare treatments,
              bridal makeup, grooming, spa services, and personalized beauty solutions.
            </p>
          </Reveal>
          <Reveal variant="scale" delay={400}>
            <div className="mt-8 sm:mt-10 grid grid-cols-3 gap-4 sm:gap-6">
              {[
                { k: "5.0★", v: "Google Rating" },
                { k: "1000+", v: "Happy Clients" },
                { k: "10+", v: "Expert Stylists" },
              ].map((s) => (
                <div key={s.v} className="text-center">
                  <div className="text-xl sm:text-2xl md:text-3xl font-display text-gradient-gold">{s.k}</div>
                  <div className="mt-1 sm:mt-2 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] uppercase text-muted-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import bg from "@/assets/lume-styling.jpg";
import { Reveal } from "./Reveal";
import { Phone, Calendar } from "lucide-react";
import { useMagnetic } from "@/hooks/useMagnetic";

export function Booking() {
  const btn1Ref = useMagnetic(0.2);
  const btn2Ref = useMagnetic(0.2);

  const whatsappMessage = encodeURIComponent("Hello Lume Salon! I would like to book an appointment.\n\nService: \nDate: \nTime: ");
  const whatsappLink = `https://wa.me/919747677676?text=${whatsappMessage}`;

  return (
    <section id="booking" className="relative py-20 sm:py-32 px-4 sm:px-6 overflow-hidden">
      <div className="absolute inset-0">
        <img src={bg} alt="" className="w-full h-full object-cover opacity-20" />
        <div
          className="absolute inset-0"
          style={{ background: `linear-gradient(to bottom, var(--hero-overlay-from), var(--hero-overlay-via) 50%, var(--hero-overlay-to))` }}
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)", opacity: 0.15 }} />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        <Reveal variant="blur"><span className="eyebrow">Reserve</span></Reveal>
        <Reveal variant="blur" delay={100}>
          <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-light leading-tight">
            Ready for your <em className="not-italic text-gradient-gold">luxury</em>
            <br className="hidden sm:block" /> transformation?
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-6 sm:mt-8 max-w-xl mx-auto text-foreground/65 text-sm sm:text-base">
            Step into Lume — where every visit is an experience designed around you.
          </p>
        </Reveal>
        <Reveal variant="scale" delay={300}>
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a ref={btn1Ref as any} href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn-gold animate-pulse-glow w-full sm:w-auto">
              <Calendar className="h-4 w-4" /> Book Appointment
            </a>
            <a ref={btn2Ref as any} href="tel:+919747677676" className="btn-ghost-gold w-full sm:w-auto">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

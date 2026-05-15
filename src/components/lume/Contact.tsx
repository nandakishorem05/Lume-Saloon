import { Reveal } from "./Reveal";
import { MapPin, Clock, Phone, Instagram, MessageCircle, Facebook } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-20">
          <Reveal variant="blur"><span className="eyebrow">Visit Us</span></Reveal>
          <Reveal variant="blur" delay={100}>
            <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
              Find your way to <em className="not-italic text-gradient-gold">Lume</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10">
          <Reveal variant="left">
            <div className="glass-card rounded-2xl sm:rounded-3xl p-6 sm:p-10 h-full flex flex-col gap-6 sm:gap-8">
              <div className="flex gap-4 sm:gap-5">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-gold shrink-0 mt-1" strokeWidth={1.3} />
                <div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold mb-1 sm:mb-2">Address</div>
                  <p className="text-foreground/75 text-sm sm:text-base leading-relaxed">
                    Opposite Family Wedding Centre,<br />
                    Near Acura Health Care, Nut Street,<br />
                    Vadakara, Kerala 673101
                  </p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-gold shrink-0 mt-1" strokeWidth={1.3} />
                <div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold mb-1 sm:mb-2">Hours</div>
                  <p className="text-foreground/75 text-sm sm:text-base">Open daily · 10 AM onwards</p>
                </div>
              </div>

              <div className="flex gap-4 sm:gap-5">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-gold shrink-0 mt-1" strokeWidth={1.3} />
                <div>
                  <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold mb-1 sm:mb-2">Reservations</div>
                  <a href="tel:+919747677676" className="text-foreground/75 hover:text-gold transition-colors text-sm sm:text-base">+91 97476 77676</a>
                </div>
              </div>

              <div className="hairline" />

              <div>
                <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold mb-3 sm:mb-4">Follow</div>
                <div className="flex gap-2 sm:gap-3">
                  {[
                    { Icon: Instagram, href: "#" },
                    { Icon: Facebook, href: "#" },
                    { Icon: MessageCircle, href: `https://wa.me/919747677676?text=${encodeURIComponent("Hello Lume Salon! I would like to book an appointment.\n\nService: \nDate: \nTime: ")}` },
                  ].map(({ Icon, href }, i) => (
                    <a key={i} href={href} target="_blank" rel="noopener noreferrer"
                       className="h-10 w-10 sm:h-11 sm:w-11 rounded-full flex items-center justify-center border border-gold/30 text-gold hover:bg-gold transition-all duration-500"
                       style={{ "--tw-text-opacity": 1 } as React.CSSProperties}
                       onMouseEnter={(e) => (e.currentTarget.style.color = `var(--social-hover-text)`)}
                       onMouseLeave={(e) => (e.currentTarget.style.color = `var(--gold)`)}>
                      <Icon className="h-4 w-4" strokeWidth={1.4} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal variant="right" delay={150}>
            <div className="rounded-2xl sm:rounded-3xl overflow-hidden h-full min-h-[300px] sm:min-h-[420px] border border-border">
              <iframe
                title="Lume Salon location map"
                src="https://www.google.com/maps?q=Nut+Street,+Vadakara,+Kerala+673101&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

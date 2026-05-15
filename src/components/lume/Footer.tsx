import logo from "@/assets/lume-logo.png";

export function Footer() {
  return (
    <footer className="relative border-t border-border px-4 sm:px-6 py-10 sm:py-16" style={{ backgroundColor: "var(--footer-bg)" }}>
      <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 items-start">
        <div>
          <div className="flex items-center gap-2 sm:gap-3">
            <img src={logo} alt="Lume Salon" className="h-10 w-10 sm:h-12 sm:w-12 object-contain" />
            <div>
              <div className="font-cinzel text-gold tracking-[0.3em] text-base sm:text-lg" style={{ fontFamily: "Cinzel, serif" }}>LUME</div>
              <div className="text-[8px] sm:text-[9px] tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mt-0.5 sm:mt-1">ELEGANCE, DEFINING YOU</div>
            </div>
          </div>
          <p className="mt-4 sm:mt-6 text-xs sm:text-sm text-foreground/55 leading-relaxed max-w-sm">
            Vadakara's premier luxury unisex salon — crafting timeless beauty with modern artistry.
          </p>
        </div>

        <div>
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold mb-3 sm:mb-5">Explore</div>
          <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-foreground/65">
            {["About","Services","Gallery","Reviews","Contact"].map((l) => (
              <li key={l}><a href={`#${l.toLowerCase()}`} className="hover:text-gold transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-gold mb-3 sm:mb-5">Visit</div>
          <p className="text-xs sm:text-sm text-foreground/65 leading-relaxed">
            Opposite Family Wedding Centre,<br />
            Nut Street, Vadakara, Kerala 673101<br />
            Open daily · 10 AM onwards
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10 sm:mt-16 pt-6 sm:pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} Lume Salon · All rights reserved.</div>
        <div className="tracking-[0.2em] sm:tracking-[0.3em] uppercase">Crafted with elegance</div>
      </div>
    </footer>
  );
}

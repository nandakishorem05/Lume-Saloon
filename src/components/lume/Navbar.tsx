import { useEffect, useState } from "react";
import logo from "@/assets/lume-logo.png";
import { ThemeToggle } from "./ThemeToggle";
import { useMagnetic } from "@/hooks/useMagnetic";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b border-border/40 py-3 shadow-sm"
          : "bg-transparent py-5"
      }`}
      style={scrolled ? { backgroundColor: "var(--navbar-scrolled-bg)" } : undefined}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 sm:gap-3 group">
          <img src={logo} alt="Lume Salon" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
          <div className="leading-none">
            <div className="font-cinzel text-gold text-base sm:text-lg tracking-[0.3em]" style={{ fontFamily: "Cinzel, serif" }}>LUME</div>
            <div className="text-[8px] sm:text-[9px] tracking-[0.3em] text-muted-foreground mt-0.5 sm:mt-1">SALON · VADAKARA</div>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 lg:gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs uppercase tracking-[0.25em] text-foreground/70 hover:text-gold transition-colors duration-300 relative after:absolute after:left-0 after:-bottom-2 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a href="#booking" className="btn-gold py-2 px-8 text-[0.7rem] whitespace-nowrap">Book Now</a>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button
            aria-label="Menu"
            className="text-gold p-1"
            onClick={() => setOpen((o) => !o)}
          >
            <div className="space-y-1.5">
              <span className={`block h-px w-6 bg-gold transition-all duration-300 ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-px w-6 bg-gold transition-all duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-6 bg-gold transition-all duration-300 ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`md:hidden fixed inset-0 top-0 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ backgroundColor: "oklch(0 0 0 / 0.4)" }}
        onClick={() => setOpen(false)}
      />

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed right-0 top-0 z-50 h-full w-[280px] transition-transform duration-500 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ backgroundColor: "var(--background)" }}
      >
        <div className="flex flex-col h-full p-6 pt-20">
          <div className="flex flex-col gap-6">
            {links.map((l, idx) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.25em] text-foreground/80 hover:text-gold transition-all duration-300"
                style={{ animationDelay: `${idx * 50}ms` }}
              >
                {l.label}
              </a>
            ))}
          </div>
          <div className="mt-8">
            <a href="#booking" onClick={() => setOpen(false)} className="btn-gold w-full text-center">Book Now</a>
          </div>
        </div>
      </div>
    </header>
  );
}

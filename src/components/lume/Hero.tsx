import { useEffect, useRef, useState } from "react";
import reception from "@/assets/lume-reception.jpg";
import lounge from "@/assets/lume-lounge.jpg";
import { Reveal } from "./Reveal";
import { useMagnetic } from "@/hooks/useMagnetic";

/**
 * High-fidelity Cinematic Hero.
 * Seamlessly 'dives' from reception to lounge via a crystal-clear zoom & crossfade.
 */
export function Hero() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const btn1Ref = useMagnetic(0.2);
  const btn2Ref = useMagnetic(0.2);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = wrap.getBoundingClientRect();
        const wh = window.innerHeight;
        const scrollable = wrap.offsetHeight - wh;
        const raw = (-rect.top) / scrollable;
        setProgress(Math.max(0, Math.min(1, raw)));
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ── Animation Timings (Clean & High-Quality) ──
  
  // Crossfade progress
  const p = Math.max(0, Math.min(1, (progress - 0.1) / 0.8));

  // Layer 1: Reception (Base)
  // Zooms from 1.0 to 1.4
  const recScale = 1 + progress * 0.4;
  const recOpacity = 1 - p;

  // Layer 2: Lounge (Reveal)
  // Zooms from 1.15 down to 1.05
  const loungeScale = 1.15 - p * 0.1;
  const loungeOpacity = p;

  return (
    <div ref={wrapRef} className="relative" style={{ height: "300vh" }}>
      {/* Sticky viewport frame */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        
        {/* ── Layer 1: The Reception (Crystal Clear) ── */}
        <div
          className="absolute inset-0 origin-center transition-opacity duration-100"
          style={{
            opacity: recOpacity,
            transform: `scale(${recScale})`,
            willChange: "transform, opacity",
          }}
        >
          <img 
            src={reception} 
            alt="Lume Salon Reception" 
            className="w-full h-full object-cover"
            style={{ imageRendering: "auto" }} 
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, var(--hero-overlay-from), var(--hero-overlay-via) 50%, var(--hero-overlay-to))`,
              opacity: 0.8,
            }}
          />
        </div>

        {/* ── Layer 2: The Lounge (Destination) ── */}
        <div
          className="absolute inset-0 origin-center"
          style={{
            opacity: loungeOpacity,
            transform: `scale(${loungeScale})`,
            willChange: "transform, opacity",
          }}
        >
          <img 
            src={lounge} 
            alt="Lume Salon Lounge" 
            className="w-full h-full object-cover"
            style={{ imageRendering: "auto" }}
          />
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, var(--hero-overlay-from), var(--hero-overlay-via) 50%, var(--hero-overlay-to))`,
              opacity: 0.5,
            }}
          />
        </div>

        {/* ── CONTENT OVERLAY (Stable & High Quality) ── */}
        <div
          className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6"
          style={{ transform: `translateY(${progress * -15}px)` }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <Reveal variant="blur">
              <span className="eyebrow">Lume · Vadakara</span>
            </Reveal>
            <Reveal variant="blur" delay={100}>
              <h1 className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] sm:leading-[1.05] text-foreground">
                Experience <em className="not-italic text-gradient-gold font-medium">Luxury</em>
                <br />
                Beauty &amp; Grooming
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 sm:mt-8 max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-foreground/65 leading-relaxed">
                Vadakara's premium unisex salon for hair, skin & bridal excellence — where every detail is crafted to define your elegance.
              </p>
            </Reveal>
            <Reveal variant="scale" delay={300}>
              <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                <a ref={btn1Ref as any} href="#booking" className="btn-gold w-full sm:w-auto">Book Appointment</a>
                <a ref={btn2Ref as any} href="#services" className="btn-ghost-gold w-full sm:w-auto">Explore Services</a>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3 text-muted-foreground transition-opacity duration-500"
          style={{ opacity: 1 - progress * 2 }}
        >
          <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>

        {/* Vignette for Depth */}
        <div
          className="absolute inset-0 pointer-events-none z-40"
          style={{ background: `radial-gradient(circle at center, transparent 30%, oklch(from var(--background) l c h / 0.3) 100%)` }}
        />
      </div>
    </div>
  );
}

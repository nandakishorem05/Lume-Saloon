import { Reveal } from "./Reveal";
import reception from "@/assets/lume-reception.jpg";
import lounge from "@/assets/lume-lounge.jpg";
import wash from "@/assets/lume-washbay.jpg";
import styling from "@/assets/lume-styling.jpg";
import { useEffect, useRef, useState } from "react";

const items = [
  { src: reception, label: "The Reception", h: "h-[280px] sm:h-[420px]" },
  { src: styling, label: "Hair Artistry", h: "h-[220px] sm:h-[320px]" },
  { src: wash, label: "Wash Sanctuary", h: "h-[240px] sm:h-[360px]" },
  { src: lounge, label: "Client Lounge", h: "h-[260px] sm:h-[440px]" },
  { src: styling, label: "Color & Highlights", h: "h-[200px] sm:h-[300px]" },
  { src: reception, label: "Brand Atelier", h: "h-[240px] sm:h-[380px]" },
];

function GalleryItem({ item, index }: { item: typeof items[0]; index: number }) {
  const imgRef = useRef<HTMLImageElement>(null);
  
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const rect = img.getBoundingClientRect();
        const center = window.innerHeight / 2;
        const diff = (rect.top + rect.height / 2) - center;
        const move = diff * 0.1;
        img.style.transform = `scale(1.15) translateY(${move}px)`;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Reveal delay={index * 60} variant={index % 3 === 0 ? "scale" : index % 3 === 1 ? "blur" : "up"} className="break-inside-avoid mb-3 sm:mb-5">
      <div className={`group relative overflow-hidden rounded-xl sm:rounded-2xl ${item.h}`}>
        <img 
          ref={imgRef}
          src={item.src} 
          alt={item.label} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 ease-out will-change-transform" 
          style={{ transform: "scale(1.15)" }}
          loading="lazy" 
        />
        <div className="absolute inset-0 opacity-70 group-hover:opacity-90 transition-opacity duration-700" style={{ background: "var(--gallery-overlay)" }} />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
          <div className="hairline w-6 sm:w-8 mb-2 sm:mb-3 opacity-70" />
          <div className="text-[10px] sm:text-xs uppercase tracking-[0.3em]" style={{ color: "var(--gallery-label)" }}>{item.label}</div>
        </div>
      </div>
    </Reveal>
  );
}

export function Gallery() {
  return (
    <section id="gallery" className="relative py-20 sm:py-32 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-6 mb-10 sm:mb-16">
          <div>
            <Reveal variant="left"><span className="eyebrow">Atelier</span></Reveal>
            <Reveal variant="left" delay={100}>
              <h2 className="mt-4 sm:mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">
                Inside <em className="not-italic text-gradient-gold">Lume</em>
              </h2>
            </Reveal>
          </div>
          <Reveal variant="right" delay={200}>
            <p className="text-foreground/55 max-w-md text-sm sm:text-base">A peek into the spaces, light and details that make Lume a destination.</p>
          </Reveal>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 sm:gap-5 [column-fill:_balance]">
          {items.map((it, i) => (
            <GalleryItem key={i} item={it} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

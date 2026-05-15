import { useEffect, useRef, useState, type ReactNode, type CSSProperties, type ElementType } from "react";

export type RevealVariant = "up" | "left" | "right" | "scale" | "blur" | "rotate";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: ElementType;
  variant?: RevealVariant;
  /** Intersection threshold (0–1). Lower = triggers earlier */
  threshold?: number;
}

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  blur: "reveal-blur",
  rotate: "reveal-rotate",
};

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
  variant = "up",
  threshold = 0.12,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.disconnect();
          }
        });
      },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const style: CSSProperties = { transitionDelay: `${delay}ms` };

  return (
    <Tag ref={ref as never} style={style} className={`${variantClass[variant]} ${shown ? "in-view" : ""} ${className}`}>
      {children}
    </Tag>
  );
}

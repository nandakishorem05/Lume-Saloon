import { useEffect, useRef } from "react";

export function useMagnetic(strength = 0.3) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { left, top, width, height } = el.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      // Only move if mouse is within a certain distance
      const distance = Math.sqrt(x * x + y * y);
      if (distance < width * 1.5) {
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      } else {
        el.style.transform = `translate(0px, 0px)`;
      }
    };

    const onMouseLeave = () => {
      el.style.transform = `translate(0px, 0px)`;
    };

    window.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [strength]);

  return ref;
}

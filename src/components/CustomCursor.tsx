import { useEffect, useRef, useState } from "react";

export function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mouse = useRef({ x: -100, y: -100 });
  const trail = useRef(Array(20).fill({ x: -100, y: -100 }));

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      setIsVisible(true);
    };
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    let animationFrameId: number;

    const render = () => {
      let { x, y } = mouse.current;
      
      trail.current.forEach((dot, index) => {
        const nextDot = trail.current[index + 1] || trail.current[0];
        
        dot.x = x;
        dot.y = y;

        if (dotsRef.current[index]) {
          dotsRef.current[index]!.style.left = `${dot.x}px`;
          dotsRef.current[index]!.style.top = `${dot.y}px`;
        }

        x += (nextDot.x - x) * 0.4;
        y += (nextDot.y - y) * 0.4;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[100] overflow-hidden">
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (dotsRef.current[index] = el)}
          className="absolute rounded-full bg-amber-200/80 mix-blend-difference"
          style={{
            width: Math.max(2, 12 - index * 0.5),
            height: Math.max(2, 12 - index * 0.5),
            opacity: 1 - index / 20,
            transform: "translate(-50%, -50%)",
            left: -100,
            top: -100,
          }}
        />
      ))}
    </div>
  );
}

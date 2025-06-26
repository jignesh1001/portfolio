import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorDot() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  useEffect(() => {
    const moveCursor = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-4 h-4 rounded-full bg-white pointer-events-none z-[9999] mix-blend-difference"
      style={{
        translateX: springX,
        translateY: springY,
      }}
    />
  );
}

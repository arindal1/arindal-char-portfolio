import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CustomCursor() {
  if (typeof window !== "undefined" && "ontouchstart" in window) {
    return null;
  }

  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  const [hover, setHover] = useState(false);

  useEffect(() => {
    const add = () => setHover(true);
    const remove = () => setHover(false);

    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", add);
      el.addEventListener("mouseleave", remove);
    });

    return () => {
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", add);
        el.removeEventListener("mouseleave", remove);
      });
    };
  }, []);

  return (
    <>
    <motion.div
      className="pointer-events-none fixed z-[9999] rounded-full border-1 border-white mix-blend-difference"
      animate={{
        x: pos.x - (hover ? 24 : 12),
        y: pos.y - (hover ? 24 : 12),
        width: hover ? 48 : 24,
        height: hover ? 48 : 24,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
    <motion.div
      className="pointer-events-none fixed z-[9999] rounded-full border-4 border-white mix-blend-difference"
      animate={{
        x: pos.x - (hover ? 5 : 4),
        y: pos.y - (hover ? 5 : 4),
        width: hover ? 10 : 8,
        height: hover ? 10 : 8,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    />
    </>
  );
}

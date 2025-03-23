"use client"

import  { useEffect, useState } from "react";
import { motion } from "framer-motion";
import './cursor.scss'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(16);

  const handleMove = (e: MouseEvent) => {
    if (
      (
        (e.target as HTMLElement).classList.contains("cursor-pointer") ||
        (e.target as HTMLElement).parentElement?.classList.contains("cursor-pointer")
      ) && size === 16
    ) {
        setSize(32)
    } else if (!(e.target as HTMLElement).classList.contains("cursor-pointer")) {
        setSize(16)
    }

    setPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

return (
    <motion.div
        className="fixed bg-white rounded-full pointer-events-none z-50"
        style={{ width: size, height: size }}
        initial={false}
        animate={{
            x: pos.x - size / 2,
            y: pos.y - size / 2,
            opacity: size === 16 ? 0.5 : 1,
            width: size,
            height: size,
        }}
    />
);
}
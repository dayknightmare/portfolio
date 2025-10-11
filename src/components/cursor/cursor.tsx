'use client';

import './Cursor.scss';

import  { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

export const Cursor = () => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState(20);

  const handleMove = (e: MouseEvent) => {
    if (
      (
        (e.target as HTMLElement).classList.contains('cursor-pointer') ||
        (e.target as HTMLElement).parentElement?.classList.contains('cursor-pointer')
      ) && size === 20
    ) {
      document.querySelector('.custom-cursor')?.classList.add('hovered');
      setSize(40);
    } else if (!(e.target as HTMLElement).classList.contains('cursor-pointer')) {
      document.querySelector('.custom-cursor')?.classList.remove('hovered');
      setSize(20);
    }

    setPos({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMove);

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      className="custom-cursor fixed border-black border-2 rounded-full pointer-events-none z-50"
      style={{
        width: size,
        height: size,
      }}
      transition={{
        type: 'keyframes',
        stiffness: 200,
        damping: 20,
      }}
      animate={{
        x: pos.x - size / 2,
        y: pos.y - size / 2,
        width: size,
        height: size,
        rotate: [0, 360]
      }}
    />
  );
};

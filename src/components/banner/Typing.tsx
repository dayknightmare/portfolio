'use client';

import { useEffect, useState } from 'react';

import { Potta_One } from 'next/font/google';
import { motion } from 'framer-motion';

const pottaOne = Potta_One({ subsets: ['latin'], weight: '400' });

export default function TypingText({text}: {text: string}) {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let i = 0;

    const interval = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, 150);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.p
      className={pottaOne.className + ' japanese'}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.p>
  );
}

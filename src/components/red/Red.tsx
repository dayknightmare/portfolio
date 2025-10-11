'use client';

import { useEffect, useState } from 'react';

export const Red = () => {
  const [size, setSize] = useState(25);

  useEffect(() => {
    const baseSize = window.innerHeight;
    const bodyRect = document.body.getBoundingClientRect();
    const elemRect = document.querySelector('.red-container')?.getBoundingClientRect();
    const offset = (elemRect!.top - bodyRect.top) - baseSize;
    const offsetEnd = (elemRect!.top - bodyRect.top) + elemRect!.height - baseSize;
    const baseLine = Math.max(window.innerWidth, window.innerHeight) ;

    const scroll = () => {
      const newSize = (baseLine) * ((window.scrollY - offset)  * 100 / (offsetEnd - offset)) / 100;
      setSize(Math.min(Math.max(newSize, 0), baseLine));
    };

    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <div className="red-container">
      <svg className='sticky top-0 w-full' viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="500" cy="1000" r={size} fill={'#101010'}/>
      </svg>
    </div>
  );
};

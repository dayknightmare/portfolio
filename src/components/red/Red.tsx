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

    const scroll = () => {
      const newSize = (window.innerWidth / 1.45) * ((window.scrollY - offset)  * 100 / (offsetEnd - offset)) / 100;
      setSize(Math.min(Math.max(newSize, 0), window.innerWidth));
    };

    window.addEventListener('scroll', scroll);

    return () => {
      window.removeEventListener('scroll', scroll);
    };
  }, []);

  return (
    <div className="red-container" style={{ width: '100vw', height: '100vh' }}>
      <svg className='sticky top-0 w-full' viewBox="0 0 1728 1117" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="864" cy="1017" r={size} fill={'#101010'}/>
      </svg>
    </div>
  );
};

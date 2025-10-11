'use client';

import { TargetAndTransition, motion } from 'motion/react';
import { useEffect, useRef, useState } from 'react';

import { primaryColor } from '@/utils';

export const Pill = () => {
  const [y, setY] = useState(0);

  const draw = useRef<TargetAndTransition>({ rotateZ: 0 });
  const drawLeft = useRef<TargetAndTransition>({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const size = window.innerHeight;
      const block = size * 2.2;
      const aboutLimit = (document.querySelector('.about') as HTMLElement).offsetHeight - 225;

      if (window.scrollY >= block - 75 && aboutLimit && window.scrollY <= aboutLimit + block - 50) {
        setY(window.scrollY - block + 75);
      }

      if (window.scrollY >= aboutLimit + block - 100) {
        draw.current = { rotateZ: -35 };
        drawLeft.current = { x: -5, y: -5 };
      } else {
        draw.current = { rotateZ: 0 };
        drawLeft.current = { x: 0, y: 0 };
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>
    <motion.svg style={{y: y, rotateZ: y / 10}} width="143" height="178" viewBox="0 0 150 182" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path animate={{...draw.current, ...drawLeft.current}} d="M44.2585 110.719C56.3989 110.25 68.795 106.589 80.0581 99.4776C90.5418 92.8586 98.7353 84.0779 104.346 74.2328L137.682 124.556L137.681 124.556C137.717 124.61 137.753 124.663 137.789 124.717C147.748 139.751 142.712 160.622 126.541 171.334C110.37 182.046 89.188 178.543 79.229 163.509C79.1934 163.455 79.1585 163.401 79.1233 163.347L79.1223 163.348L44.2585 110.719Z" fill="#000"/>
      <motion.path animate={{...draw.current, ...drawLeft.current}} fillRule="evenodd" clipRule="evenodd" d="M17.2799 6.39629C33.393 -4.27764 54.4814 -0.837064 64.4845 14.0609L64.4855 14.0602L102.992 72.189C97.3893 81.8496 89.2877 90.4622 78.9657 96.979C67.5471 104.188 54.9642 107.854 42.6635 108.24L43.2027 109.125L5.92569 52.8526L5.92671 52.8519C-3.88997 37.8304 1.16686 17.0702 17.2799 6.39629ZM44.1634 18.003C39.3791 21.1722 38.0699 27.6199 41.2392 32.4042C44.4085 37.1884 50.8561 38.4976 55.6404 35.3284C60.4247 32.1591 61.7339 25.7114 58.5646 20.9271C55.3953 16.1429 48.9477 14.8337 44.1634 18.003Z" fill="#000"/>
    </motion.svg>
    <motion.svg style={{y: y, rotateZ: y / 10}} width="143" height="178" viewBox="0 0 150 182" fill="none" xmlns="http://www.w3.org/2000/svg">
      <motion.path animate={draw.current} d="M44.2585 110.719C56.3989 110.25 68.795 106.589 80.0581 99.4776C90.5418 92.8586 98.7353 84.0779 104.346 74.2328L137.682 124.556L137.681 124.556C137.717 124.61 137.753 124.663 137.789 124.717C147.748 139.751 142.712 160.622 126.541 171.334C110.37 182.046 89.188 178.543 79.229 163.509C79.1934 163.455 79.1585 163.401 79.1233 163.347L79.1223 163.348L44.2585 110.719Z" fill={primaryColor}/>
      <motion.path animate={draw.current} fillRule="evenodd" clipRule="evenodd" d="M17.2799 6.39629C33.393 -4.27764 54.4814 -0.837064 64.4845 14.0609L64.4855 14.0602L102.992 72.189C97.3893 81.8496 89.2877 90.4622 78.9657 96.979C67.5471 104.188 54.9642 107.854 42.6635 108.24L43.2027 109.125L5.92569 52.8526L5.92671 52.8519C-3.88997 37.8304 1.16686 17.0702 17.2799 6.39629ZM44.1634 18.003C39.3791 21.1722 38.0699 27.6199 41.2392 32.4042C44.4085 37.1884 50.8561 38.4976 55.6404 35.3284C60.4247 32.1591 61.7339 25.7114 58.5646 20.9271C55.3953 16.1429 48.9477 14.8337 44.1634 18.003Z" fill={primaryColor}/>
    </motion.svg>
  </>;
};

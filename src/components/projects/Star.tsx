import { motion } from 'motion/react';

export const Star = ({color} : {color: string}) => {
  return (
    <motion.svg
      whileInView={{ rotate: [0, 20, -10, 30, -20, 0, -5, 30, -10, 0] }}
      transition={{ duration: 10, repeat: Infinity, type: 'keyframes', stiffness: 20, bounce: 0.2 }}
      width="136"
      height="136"
      viewBox="0 0 136 136"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="67" cy="68" r="33.5" stroke={color} strokeWidth="3"/>
      <circle cx="68" cy="68" r="48.5" stroke={color} strokeWidth="3"/>
      <path d="M68 0L75.0261 51.0376L116.083 19.9167L84.9624 60.9739L136 68L84.9624 75.0261L116.083 116.083L75.0261 84.9624L68 136L60.9739 84.9624L19.9167 116.083L51.0376 75.0261L0 68L51.0376 60.9739L19.9167 19.9167L60.9739 51.0376L68 0Z" fill={color}/>
    </motion.svg>
  );
};

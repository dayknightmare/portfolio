'use client';

import { MouseEvent, useEffect, useState } from 'react';

import { motion } from 'motion/react';

type ImageModalProps = {
  imgs: string[];
  active: boolean;
  onClose: () => void;
};

export const Modal = ({ imgs, active, onClose }: ImageModalProps) => {
  const [index, setIndex] = useState(0);
  const closeModal = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.classList.contains('has_close')) {
      setIndex(0);
      onClose();
    }
  };

  useEffect(() => {
    if (active) {
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          setIndex(0);
          onClose();
        }
      });
    }

    return () => {
      window.removeEventListener('keydown', () => { });
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return <motion.div
    className="image-modal has_close"
    onClick={(e) => closeModal(e)}
    animate={{
      opacity: active ? 1 : 0,
      display: active ? 'flex' : 'none',
    }}
    transition={{ duration: .3 }}
  >
    <div
      className="
        rounded-md
        modal-hero
        modal-content
        delay-150
        transition-all
        ease-in-out
        duration-300
        flex
        justify-center
        items-center
        z-10
        has_close
        hero-image
    ">
      <div className="has_close rounded-full bg-white px-4 py-2 cursor-pointer absolute right-10 top-10 select-none">Close</div>
      <div className="controls rounded-full bg-white px-4 py-2 cursor-pointer absolute left-10 select-none" onClick={() => setIndex(index > 0 ? index - 1 : imgs.length - 1)}>{'<'} Prev</div>
      <div className="controls rounded-full bg-white px-4 py-2 cursor-pointer absolute right-10 select-none" onClick={() => setIndex(index < imgs.length - 1 ? index + 1 : 0)}>Next {'>'}</div>
      {
        imgs[index] != '' &&
          // eslint-disable-next-line @next/next/no-img-element
          <img className="max-w-full max-h-full h-auto w-auto rounded-lg" src={imgs[index]} alt="Modal image" />
      }
    </div>
  </motion.div>;
};

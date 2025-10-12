'use client';

import { AnimatePresence, motion } from 'motion/react';
import { MouseEvent, useEffect, useState } from 'react';

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

  return <AnimatePresence initial={false}>
    {
      active ? (
        <motion.div
          className="modal-image has_close "
          onClick={(e) => closeModal(e)}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className="
              rounded-md
              flex
              justify-center
              items-center
              has_close
              modal-content
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
        </motion.div> ) : null
    }
  </AnimatePresence>;
};

import { M_PLUS_1, Mohave } from 'next/font/google';
import { Variants, motion } from 'motion/react';

const mplus1 = M_PLUS_1({ subsets: ['latin'], weight: '800' });
const mplus1Body = Mohave({ subsets: ['latin'], weight: '400' });

type ProjectItemProps = {
  title: string;
  description: string;
  imageUrl: string;
  index: number;
  variants: Variants;
  icons?: {
    src: string
    alt: string
  }[];
  images: string[];
  openModal?: (_: string[]) => void;
};

export const ProjectItem = ({ title, description, imageUrl, index, variants, icons, images, openModal }: ProjectItemProps) => {
  return (
    <motion.div className="project-item" custom={index} variants={variants}>
      <div className='image-container cursor-pointer' style={{ backgroundImage: `url(${imageUrl})` }} onClick={() => openModal && openModal(images)}>
      </div>
      <div className='content'>
        <div className='header'>
          <h2 className={mplus1.className + ' project-title'}>{title} • </h2>
          <div className='icons'>
            {icons && icons.map((icon, index) => (
              <div key={`icon-${title}-${index}`} title={icon.alt} className='tt'>
                { /* eslint-disable-next-line @next/next/no-img-element */}
                <img className='tt' src={icon.src} alt={icon.alt} />
              </div>
            ))}
          </div>
        </div>
        <p className={mplus1Body.className + ' project-description'}>{description}</p>
      </div>
    </motion.div>
  );
};

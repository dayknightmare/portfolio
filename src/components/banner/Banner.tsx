import './Banner.scss';

import { M_PLUS_1, Mohave } from 'next/font/google';

import TypingText from './Typing';

const mohaveBold = Mohave({ subsets: ['latin'], weight: '600' });
const m1Plus = M_PLUS_1({ subsets: ['latin'], weight: '600' });

export const Banner = () => {
  return (
    <div className="banner flex justify-center items-center flex-col">
      <div className='relative interpolate'>
        <p className={mohaveBold.className}>MIGUEL</p>
        <TypingText text='ミゲル'/>
      </div>
      <p className={mohaveBold.className + ' sub'}>SOFTWARE ENGINEER</p>
      <div className='badges flex absolute bottom-4 left-4 gap-2'>
        <span className={m1Plus.className + ' absolute badge'}>開発者</span>
        <span className={m1Plus.className + ' absolute badge'}>開発者</span>
      </div>
    </div>
  );
};

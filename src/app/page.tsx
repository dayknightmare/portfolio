import Banner from '@/components/banner/banner';
import Japan from '@/components/japan/japan';
import Marquee from '@/components/marquee/marquee';
import Skills from '@/components/skills/skills';
import RedPurity from '@/components/texts/red_purity';

export default function Home() {
  return <>
    <Banner></Banner>
    <br />
    <div className='overflow-x-clip'>
      <Marquee rotate={3} top={-3}></Marquee>
      <Marquee rotate={-4} top={-5} animation='forwards'></Marquee>
    </div>
    <br />
    <br />
    <Japan></Japan>
    <br />
    <br />
    <br />
    <RedPurity></RedPurity>
    <Skills></Skills>
    <br />
    <br />
    <br />
    <br />
    <br />
  </>
}

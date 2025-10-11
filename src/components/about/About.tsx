import './About.scss';

import { M_PLUS_1, Mohave } from 'next/font/google';

import { Pill } from './Pill';

const mohave = Mohave({ subsets: ['latin'], weight: '600' });
const mohaveBody = Mohave({ subsets: ['latin'], weight: '300' });
const mplus1 = M_PLUS_1({ subsets: ['latin'], weight: '600' });

export const About = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2020;
  const yearsOfExperience = currentYear - startYear + 1;

  return (
    <div className='about'>
      <div className='container'>
        <Pill/>
        <div className='title-container'>
          <h1 className={mohave.className + ' main-title'}>ABOUT•</h1>
          <h1 className={mplus1.className + ' sub-title'}>自己紹介</h1>
        </div>

        <div className='body-container'>
          <p className={mohaveBody.className}>
            Hi, I&apos;m Miguel — a software engineer focused on building reliable and scalable backend systems.
            Over the past {yearsOfExperience}+ years, I&apos;ve worked with microservices, APIs, gateways, queues, and cloud infrastructure, turning complex ideas into practical, maintainable solutions.
          </p>
          <br />
          <br />
          <p className={mohaveBody.className}>
            My main focus is backend development, using Python, Go, Node.js, Java, Kotlin, and Rust to design systems that are both efficient and resilient. I&apos;ve also worked with Apache Druid, Kafka, and ClickHouse on data-intensive projects, where performance and scalability are key.
          </p>
          <br />
          <br />
          <p className={mohaveBody.className}>
            Beyond the backend, I&apos;ve contributed to frontend and mobile projects using Vue, React, Next.js, Nuxt, SwiftUI, and Flutter, giving me a broad understanding of how each layer of a system connects to deliver a cohesive product experience.
          </p>
        </div>

      </div>
      <div className='neo'>
        <span className={mplus1.className}>ネオポートフォリオ</span>
        <span className={mplus1.className}>ネオポートフォリオ</span>
      </div>
      <div className='for-health'>
        <span className={mohave.className}>Good for health bad for education</span>
      </div>
    </div>
  );
};

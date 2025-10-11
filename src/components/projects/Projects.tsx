'use client';

import './Projects.scss';

import { M_PLUS_1, Mohave } from 'next/font/google';
import { Variants, motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

import { Modal } from './Modal';
import { ProjectItem } from './ProjectItem';
import { Star } from './Star';
import { primaryColor } from '@/utils';

const mohave = Mohave({ subsets: ['latin'], weight: '600' });
const mplus1 = M_PLUS_1({ subsets: ['latin'], weight: '600' });

export const Projects = () => {
  const [imgs, setImgs] = useState<string[]>(['']);
  const [active, setActive] = useState(false);

  const openModal = (images: string[]) => {
    document.body.style.overflow = 'hidden';
    setImgs(images);
    setActive(true);
  };

  const closeModal = () => {
    document.body.style.overflow = 'auto';
    setActive(false);
    setImgs(['']);
  };

  const draw: Variants = {
    hidden: { y: 150, opacity: 0 },
    visible: (i: number) => {
      return {
        y: 0,
        opacity: 1,
        transition: {
          delay: i * 0.3,
          type: 'spring',
          stiffness: 50,
        },
      };
    },
  };

  return (
    <>
      <Modal imgs={imgs} active={active} onClose={closeModal} />
      <motion.div
        className="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-400px 0px 0px 0px' }}
      >
        <div className="star plus"><Star color={primaryColor}/></div>
        <div className="star"><Star color={'#000'}/></div>
        <div className='title-container'>
          <h1 className={mohave.className + ' main-title'}>PROJECTS•</h1>
          <h1 className={mplus1.className + ' sub-title'}>制作実績</h1>
        </div>
        <div className='body-container'>
          <ProjectItem
            title='1Doc - mobile app'
            description='I developed a mobile app for iOS and Android using Flutter that allows users to submit and track requests online without needing to visit city hall in person. This streamlines communication and makes the entire process digital, transparent, and free for citizens. Users can register, open new requests, attach documents or photos, and monitor progress in real time. Integrated with the 1Doc platform, the app also provides request categories by subject and email notifications for each update, ensuring a smooth and accessible experience from start to finish.'
            icons={[
              {src: '/icons/front/flutter.svg', alt: 'Flutter'},
              {src: '/icons/back/dart.svg', alt: 'Dart'}
            ]}
            imageUrl='/images/1docapp/app1.svg'
            images={[
              '/images/1docapp/app1.svg',
              '/images/1docapp/app2.svg',
              '/images/1docapp/app3.svg',
              '/images/1docapp/app4.svg',
              '/images/1docapp/app5.svg',
            ]}
            openModal={openModal}
            variants={draw}
            index={0}
          />
          <ProjectItem
            title='1Doc - analytics'
            description='I implemented a data warehouse on Apache Druid to centralize and process large volumes of analytical data for city administrations. This data is then visualized in BI dashboards with Apache Superset to support strategic decision-making. I also developed end-to-end Python pipelines to extract, transform, and load the data, ensuring accurate, timely, and structured information for reporting and analysis.'
            icons={[
              {src: '/icons/front/react.svg', alt: 'React'},
              {src: '/icons/back/python.svg', alt: 'Python'},
              {src: '/icons/databases/postgresql.svg', alt: 'PostgreSQL'},
              {src: '/icons/tools/docker.svg', alt: 'Docker'},
              {src: '/icons/databases/apachedruid.svg', alt: 'Apache Druid'},
              {src: '/icons/databases/redis.svg', alt: 'Redis'},
              {src: '/icons/tools/bullmq.svg', alt: 'BullMQ'},
              {src: '/icons/infra/amazonaws.svg', alt: 'AWS'},
            ]}
            imageUrl='/images/1docanalytics/image1.png'
            images={[
              '/images/1docanalytics/image1.png',
              '/images/1docanalytics/image2.png',
              '/images/1docanalytics/image3.png',
              '/images/1docanalytics/image4.png',
            ]}
            openModal={openModal}
            variants={draw}
            index={1}
          />
          <ProjectItem
            title='Druid exporter'
            description='An Apache Druid cluster exports several essential metrics for monitoring and scalability, which are very important. Thinking of a way to collect these metrics, I developed a project called “druid-exporter” that receives these metrics and sends them to Prometheus, which subsequently forwards them to Grafana to display each metric graphically and intuitively.'
            icons={[
              {src: '/icons/back/rust.svg', alt: 'Rust'},
              {src: '/icons/databases/apachedruid.svg', alt: 'Apache Druid'},
              {src: '/icons/tools/docker.svg', alt: 'Docker'},
              {src: '/icons/infra/amazonaws.svg', alt: 'AWS'},
            ]}
            imageUrl='/images/druidexpo/img1.png'
            images={[
              '/images/druidexpo/img1.png',
              '/images/druidexpo/img2.png',
              '/images/druidexpo/img3.png',
            ]}
            openModal={openModal}
            variants={draw}
            index={2}
          />
          <ProjectItem
            title='Unides'
            description='To manage the NASA hackathon in my city, it was common to use WhatsApp to talk to teams and mentors, but this created numerous communication problems, so we thought about developing a platform that integrates with Discord and isolates teams and manages them through from an event manager bot created by us. So that we can create it, we used Golang with Gin for the Backend, Nuxt (Vue) for the Frontend, Python for the Email service and for the Bot, and the communication was done with RestAPI between the Backend and the Frontend and gRPC between the services and Bot.'
            icons={[
              {src: '/icons/front/react.svg', alt: 'React'},
              {src: '/icons/front/nextjs.svg', alt: 'Next.js'},
              {src: '/icons/back/go.svg', alt: 'Go'},
              {src: '/icons/back/python.svg', alt: 'Python'},
              {src: '/icons/databases/postgresql.svg', alt: 'PostgreSQL'},
              {src: '/icons/infra/googlecloud.svg', alt: 'Google Cloud'},
              {src: '/icons/tools/grpc.svg', alt: 'gRPC'},
            ]}
            imageUrl='/images/unides/a1.png'
            images={[
              '/images/unides/a1.png',
              '/images/unides/a2.png',
              '/images/unides/a3.png',
              '/images/unides/a4.png',
              '/images/unides/a5.png',
            ]}
            openModal={openModal}
            variants={draw}
            index={3}
          />
          <ProjectItem
            title='Vupy'
            description='A platform designed to manage demands, teams, production, and operations within the STE-SIMEMP consortium. It includes user and meeting management, minutes tracking, a Kanban board for task organization, and dashboards with demand analytics — all built to improve transparency and streamline internal management.'
            icons={[
              {src: '/icons/front/nuxt.svg', alt: 'Nuxt'},
              {src: '/icons/front/vue.svg', alt: 'Vue'},
              {src: '/icons/back/python.svg', alt: 'Python'},
              {src: '/icons/back/go.svg', alt: 'Go'},
              {src: '/icons/back/typescript.svg', alt: 'TypeScript'},
              {src: '/icons/back/nodejs.svg', alt: 'Node'},
              {src: '/icons/tools/docker.svg', alt: 'Docker'},
              {src: '/icons/databases/postgresql.svg', alt: 'PostgreSQL'},
              {src: '/icons/infra/nginx.svg', alt: 'Nginx'},
              {src: '/icons/infra/amazonaws.svg', alt: 'AWS'},
            ]}
            imageUrl='/images/vupy/posts.png'
            images={[
              '/images/vupy/chat.png',
              '/images/vupy/edit.png',
              '/images/vupy/mainpage.png',
              '/images/vupy/posts.png',
              '/images/vupy/profile.png',
              '/images/vupy/theme.png',
            ]}
            openModal={openModal}
            variants={draw}
            index={4}
          />
          <ProjectItem
            title='Vupy mobile app'
            description='This project is the creation of a social network that aims to bring greater autonomy, customization and freedom to users, for that, tools are created that help you to have control of your network of friends and followers, in addition we give you the opportunity to customize it to let it to the closest to your personal taste.'

            icons={[
              {src: '/icons/back/swift.svg', alt: 'Swift UI'},
            ]}
            imageUrl='/images/vupyapp/a3.png'
            images={[
              '/images/vupyapp/a1.jpeg',
              '/images/vupyapp/a2.jpeg',
              '/images/vupyapp/a3.png',
              '/images/vupyapp/a4.png',
            ]}
            openModal={openModal}
            variants={draw}
            index={5}
          />
          <ProjectItem
            title='STE SIMEMP - SS Kanban'
            description='A platform designed to manage demands, teams, production, and operations within the STE-SIMEMP consortium. It includes user and meeting management, minutes tracking, a Kanban board for task organization, and dashboards with demand analytics — all built to improve transparency and streamline internal management.'
            icons={[
              {src: '/icons/front/nuxt.svg', alt: 'Nuxt'},
              {src: '/icons/front/vue.svg', alt: 'Vue'},
              {src: '/icons/back/python.svg', alt: 'Python'},
              {src: '/icons/databases/postgresql.svg', alt: 'PostgreSQL'},
              {src: '/icons/infra/nginx.svg', alt: 'Nginx'},
              {src: '/icons/infra/amazonaws.svg', alt: 'AWS'},
            ]}
            imageUrl='/images/sskanban/image33.png'
            images={[
              '/images/sskanban/image3.png',
              '/images/sskanban/image32.png',
              '/images/sskanban/image33.png',
              '/images/sskanban/image35.png',
              '/images/sskanban/image37.png',
            ]}
            openModal={openModal}
            variants={draw}
            index={6}
          />
        </div>
      </motion.div>
    </>
  );
};

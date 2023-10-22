import type { NextPage } from 'next'
import Banner from '../components/banner'
import ContainerSection from '../components/containerSection'
import ForUr from '../components/forur'
import BoxItem from '../components/boxItem'
import { useState } from 'react'
import knows from '../data/know.json'
import BoxItemSecondary from '../components/boxItemSecondary'
import Image from 'next/image'
import Phrases from '../components/phrases'
import Link from 'next/link'
import ProjectItem from '../components/projectItem'

const Home: NextPage = () => {
  const [active, setActive] = useState(3)

  const knowsMapped: Record<number, keyof typeof knows> = {
    0: "infra",
    1: "front",
    3: "back",
    2: "tools",
    4: "databases",
  }

  const openLink = (link: string): void => {
    window.open(link, '_blank')
  }

  return (
    <>
      <Banner></Banner>
      <ForUr />
      <ContainerSection title="About">
        <span className="text-3xl font-thin leading-relaxed max-[768px]:text-2xl max-[425px]:text-xl">
            Hello there! I&apos;m Miguel, a skilled developer with a Bachelor&apos;s
            degree in Computer Science from Universidade Anhembi Morumbi.
            I possess extensive experience in various technologies, including
            Python, NodeJS, Go, Flutter, Apache Druid, Apache Superset, and more.
            Presently, I focus on crafting web platforms, mobile applications,
            and data pipelines. My goal is to consistently deliver technical
            excellence in my projects, offering top-notch solutions and ensuring
            exceptional quality in all my projects.
        </span>
        <br />
        <br />
        <span className="text-3xl font-thin leading-relaxed max-[768px]:text-2xl max-[425px]:text-xl">
            I am the founder of Social Vupy Network, a social network that
            focuses on giving users greater autonomy, freedom and personalization
            regarding content, social image, privacy and security.
        </span>
      </ContainerSection>
      <br />
      <br />
      <br />
      <ContainerSection title="Projects">
        <ProjectItem
          title="Vupy"
          images={[
            '/imgs/vupy/mainpage.png',
            '/imgs/vupy/chat.png',
            '/imgs/vupy/edit.png',
            '/imgs/vupy/posts.png',
            '/imgs/vupy/profile.png',
            '/imgs/vupy/theme.png',
          ]}
          links={[
            {link: 'https://socialvupy.com', name: 'Vupy'},
            {link: 'https://www.linkedin.com/company/vupy-social-networking', name: 'LinkedIn'},
            {link: 'https://github.com/Vupy', name: 'Github'},
          ]}
        >
          This project is the creation of a social network that aims to bring greater autonomy,
          customization and freedom to users, for that, tools are created that help you to have
          control of your network of friends and followers, in addition we give you the opportunity
          to customize it to let it to the closest to your personal taste.
        </ProjectItem>
        <br />
        <ProjectItem
          title="Unides"
          images={[
            '/imgs/unides/a1.png',
            '/imgs/unides/a2.png',
            '/imgs/unides/a3.png',
            '/imgs/unides/a4.png',
            '/imgs/unides/a5.png',
          ]}
        >
          To manage the NASA hackathon in my city, it was common to use WhatsApp to talk to teams and
          mentors, but this created numerous communication problems, so we thought about developing a
          platform that integrates with Discord and isolates teams and manages them through from an event
          manager bot created by us. So that we can create it, we used Golang with Gin for the Backend,
          Nuxt (Vue) for the Frontend, Python for the Email service and for the Bot, and the
          communication was done with RestAPI between the Backend and the Frontend and gRPC
          between the services and Bot
        </ProjectItem>
        <br />
        <ProjectItem
          title="Druid Exporter"
          images={[
            '/imgs/druid/img1.png',
            '/imgs/druid/img2.png',
            '/imgs/druid/img3.png',
          ]}
          links={
            [
              { link: 'https://github.com/not-empty/druid-exporter', name: 'GitHub' }
            ]
          }
        >
          An Apache Druid cluster exports several essential metrics for monitoring and
          scalability, which are very important. Thinking of a way to collect these metrics,
          I developed a project called &ldquo;druid-exporter&rdquo; that receives these metrics and
          sends them to Prometheus, which subsequently forwards them to Grafana to display
          each metric graphically and intuitively.
        </ProjectItem>
      </ContainerSection>
      <ContainerSection title="Skills">
        <div className="flex min-[769px]:flex-nowrap max-[768px]:flex-wrap gap-12 w-full justify-items-center max-[1024px]:gap-8 max-[768px]:gap-6">
          <BoxItem onClick={() => setActive(0)} active={active == 0} img="/icons/infra.svg" title='Infra'></BoxItem>
          <BoxItem onClick={() => setActive(1)} active={active == 1} img="/icons/frontend.svg" title='Frontend'></BoxItem>
          <BoxItem onClick={() => setActive(3)} active={active == 3} img="/icons/backend.svg" title='Languages'></BoxItem>
          <BoxItem onClick={() => setActive(2)} active={active == 2} img="/icons/tools.svg" title='Tools'></BoxItem>
          <BoxItem onClick={() => setActive(4)} active={active == 4} img="/icons/db.svg" title='Database'></BoxItem>
        </div>
        <br />
        <div className="skill__items grid grid-cols-10 gap-12 w-full justify-items-center">
          {
            knows[knowsMapped[active]].map((e) => (
              <BoxItemSecondary key={e.name + " | " + e.level} title={e.name + " | " + e.level} img={e.icon}></BoxItemSecondary>
            ))
          }
        </div>
      </ContainerSection>
      <br /><br />
      <Phrases></Phrases>
      <ContainerSection title="Contact" className="bg__contact">
        <div className="flex items-center justify-evenly contact__icons">
          <div className="contact tt" title="LinkedIn">
            <Image onClick={() => openLink("https://www.linkedin.com/in/miguelvcolombo")} className="cursor-pointer max-[768px]:w-20 max-[425px]:w-12" src="/icons/linkedin.svg" title="LinkedIn" width={100} height={100} alt="icon"></Image>
          </div>
          <div className="contact tt" title="Instagram">
            <Image onClick={() => openLink("https://www.instagram.com/miguel.vcolombo/")} className="cursor-pointer max-[768px]:w-20 max-[425px]:w-12" title="Instagram" src="/icons/instagram.svg" width={100} height={100} alt="icon"></Image>
          </div>
          <div className="contact tt" title="GitHub">
            <Image onClick={() => openLink("https://github.com/dayknightmare")} className="cursor-pointer max-[768px]:w-20 max-[425px]:w-12" title="GitHub" src="/icons/github.svg" width={100} height={100} alt="icon"></Image>
          </div>
          <div className="contact tt" title="X">
            <Image onClick={() => openLink("https://twitter.com/MiguelVColombo")} className="cursor-pointer max-[768px]:w-20 max-[425px]:w-12" title="X" src="/icons/x-2.svg" width={100} height={100} alt="icon"></Image>
          </div>
        </div>
      </ContainerSection>
    </>
  )
}

export default Home

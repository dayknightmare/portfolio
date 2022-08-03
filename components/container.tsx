import { Dispatch, SetStateAction, useState } from 'react'
import ContainerSection from './container_section'
import KnowItem from './know_item'
import knowJson from '../data/know.json'
import LangItem from './lang_item'
import ProjectItem from './project_item'
import Link from 'next/link'

type LangItem = {
    name: string;
    level: string;
    icon: string;
}
const Container = () => {
    const [active, setActive]: [
        number,
        Dispatch<SetStateAction<number>>
    ] = useState(0)
    const [activeLangIndex, setActiveLangIndex]: [
        number,
        Dispatch<SetStateAction<number>>
    ] = useState(0)

    const now: Date = new Date()
    const birthDate: Date = new Date('2002-07-26')
    const age: number = Math.floor((now.getTime() - birthDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25))
    const knowsTypes: string[] = [
        'langs',
        'frameworks',
        'databases',
        'tools',
    ]

    return (
        <div className="container">
            <ContainerSection
                content={
                    `My name is Miguel, I'm ${age} years old, I'm currently studying for a bachelor's degree in Computer Science at Anhembi Morumbi University (UAM), 
                    in addition to being a website and mobile application developer. 
                    I've been studying programming since the end of 2016, I started with Python and soon after I started studying C and PHP, 
                    however I focused more on Python and at the moment it's the language i like the most as the one I know the most about. 
                    But I'm not just stuck with a language, I know others and I know how to work with them as well, such as NodeJS, Go, Flutter, Vue and React.`
                }
                title="About"
            >
                <br />
                <p>
                    I&lsquo;m also the creator of Vupy Social Networking, a social network focused on giving users greater freedom and autonomy,
                    in terms of content such as personalization, based on privacy, security and freedom.
                </p>
            </ContainerSection>

            <br />

            <ContainerSection
                title="Knowledge"
            >
                <div className="know__items">
                    <KnowItem active={active == 0} onClickFun={() => { setActive(0); setActiveLangIndex(0) }} icon={'/img/lang.svg'} title='Languages'></KnowItem>
                    <KnowItem active={active == 1} onClickFun={() => { setActive(1); setActiveLangIndex(0) }} icon={'/img/box.svg'} title='Frameworks'></KnowItem>
                    <KnowItem active={active == 2} onClickFun={() => { setActive(2); setActiveLangIndex(0) }} icon={'/img/db.svg'} title='Databases'></KnowItem>
                    <KnowItem active={active == 3} onClickFun={() => { setActive(3); setActiveLangIndex(0) }} icon={'/img/cogs.svg'} title='Tools'></KnowItem>
                </div>

                <br />

                <div className="langs__items">
                    {
                        knowJson[knowsTypes[active]].map((lang: LangItem, index: number) => (
                            <LangItem
                                icon={lang.icon}
                                title={lang.name}
                                onClickFun={() => {
                                    document.querySelector('#detail_lang').scrollIntoView({
                                        behavior: 'smooth'
                                    })
                                    setActiveLangIndex(index)
                                }}
                                key={lang.name + '-' + knowsTypes[active]}
                                active={index == activeLangIndex}
                                level={lang.level}
                            ></LangItem>
                        ))
                    }
                </div>

            </ContainerSection>

            <ContainerSection title=''>
                <h3 id="detail_lang">
                    {knowJson[knowsTypes[active]][activeLangIndex].name} <span className="sub">{knowJson[knowsTypes[active]][activeLangIndex].level}</span>
                </h3>
                <br />
                <p>{knowJson[knowsTypes[active]][activeLangIndex].text}</p>
            </ContainerSection>

            <ContainerSection title="Projects">
                <ProjectItem
                    icon={'/img/vupy.svg'}
                    imageBackground={'/portfolio/img/vupy.gif'}
                    title="Vupy"
                    imgs={[
                        '/img/vupy/a1.png',
                        '/img/vupy/a2.png',
                        '/img/vupy/a3.png',
                        '/img/vupy/a4.png',
                        '/img/vupy/a5.png',
                        '/img/vupy/a6.png',
                    ]}
                >
                    <p>
                        This project is the creation of a social network that aims to bring greater autonomy, customization and freedom to users, for that, tools are created that help you to have control of your network of friends and followers, in addition we give you the opportunity to customize it to let it to the closest to your personal taste.
                    </p>
                    <br />
                    <br />
                    <p className="links">
                        <Link href={'https://socialvupy.com'} passHref>Vupy</Link>
                        |
                        <Link href={'https://www.linkedin.com/company/vupy-social-networking'} passHref>LinkedIn</Link>
                        |
                        <Link href={'https://github.com/Vupy'} passHref>Github</Link>
                    </p>
                </ProjectItem>
                <br />
                <ProjectItem
                    icon={'/img/unides.svg'}
                    imageBackground={'/portfolio/img/unides.gif'}
                    title="Unides"
                    imgs={[
                        '/img/unides/a1.png',
                        '/img/unides/a2.png',
                        '/img/unides/a3.png',
                        '/img/unides/a4.png',
                        '/img/unides/a5.png',
                    ]}
                >
                    <p>
                        To manage the NASA hackathon in my city, it was common to use WhatsApp to talk to teams and mentors, but this created numerous communication problems, so we thought about developing a platform that integrates with Discord and isolates teams and manages them through from an event manager bot created by us. So that we can create it, we used Golang with Gin for the Backend, Nuxt (Vue) for the Frontend, Python for the Email service and for the Bot, and the communication was done with RestAPI between the Backend and the Frontend and gRPC between the services and Bot
                    </p>
                    <br />
                    <br />
                </ProjectItem>
            </ContainerSection>
        </div>
    )
}

export default Container
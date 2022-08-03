import Image from 'next/image'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

const Footer = () => {
    const phases = {
        'Ryoji': 'It\'s true, time brings an end to all things, even if we plug up our ears and cover our eyes, and so it\'s begin',
        'George H. W. Bush': 'A new world order, where diverse nations are drawn together in common cause to achieve the universal aspirations of mankind: peace and security, freedom, and the rule of law.',
        'Paul Valéry': 'The wind arises! You have to try to live!',
        'Sloman and Fernbach': 'Put together, human thought is incredibly impressive, but at its deepest level it never belongs to any individual alone.',
        'Shoji Meguro': 'Who knows what tomorrow holds? Just wanna live my life the way I want',
        'Sagisu Shiro': 'Through sacrifice, children can play in a world without a care',
        'Balroop Singh': 'Self-judgment clouds our minds with inescapable indictments.'
    }

    const [author, setAuthor]: [
        string,
        Dispatch<SetStateAction<string>>
    ] = useState('Ryoji')

    const goToSite = (link: string): void => {
        window.open(link, '_blank')
    }

    useEffect(() => {
        const authors = Object.keys(phases)
        setAuthor(authors[Math.floor(Math.random() * authors.length)])
    }, [])

    return (
        <div className="footer">
            <div className="overlay">
                <div className="footer__message">
                    &quot;{phases[author]}&quot; - {author}
                </div>
                <div className="footer__container">
                    <h3>
                        Contact me
                    </h3>
                    <br />
                    <br />

                    <div className="footer__items">
                        <div className="footer__item" onClick={() => goToSite('https://www.linkedin.com/in/miguel-vieira-c-7a1534189/')}>
                            <Image layout="raw" src={require('../assets/img/linkedin.svg')} alt="contact me" />
                            <p>LinkedIn</p>
                        </div>
                        <div className="footer__item" onClick={() => goToSite('https://twitter.com/MiguelVColombo')}>
                            <Image layout="raw" src={require('../assets/img/twitter.svg')} alt="contact me" />
                            <p>Twitter</p>
                        </div>
                        <div className="footer__item" onClick={() => goToSite('https://github.com/dayknightmare')}>
                            <Image layout="raw" src={require('../assets/img/github.svg')} alt="contact me" />
                            <p>Github</p>
                        </div>
                        <div className="footer__item" onClick={() => goToSite('mailto:miguelcolombo3@gmail.com')}>
                            <Image layout="raw" src={require('../assets/img/mail.svg')} alt="contact me" />
                            <p>Email</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
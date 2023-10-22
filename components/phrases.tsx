import { NextPage } from 'next';
import { useEffect, useRef, useState } from 'react';

const Phrases: NextPage = () => {
    const phrases: Record<string, string> = {
        'Ryoji': 'It\'s true, time brings an end to all things, even if we plug up our ears and cover our eyes, and so it\'s begin',
        'George H. W. Bush': 'A new world order, where diverse nations are drawn together in common cause to achieve the universal aspirations of mankind: peace and security, freedom, and the rule of law.',
        'Paul Valéry': 'The wind arises! We must try to live!',
        'Sloman and Fernbach': 'Put together, human thought is incredibly impressive, but at its deepest level it never belongs to any individual alone.',
        'Shoji Meguro': 'Who knows what tomorrow holds? Just wanna live my life the way I want',
        'Sagisu Shiro': 'Through sacrifice, children can play in a world without a care',
        'Balroop Singh': 'Self-judgment clouds our minds with inescapable indictments.',
        'Belladonna': 'I praise visiting warriors, who challenge the monster called thyself',
        'L. Lawliet': 'Lying monsters are a real nuisance: They are much more cunning than others. They pose as humans even though they have no understanding of the human heart; they eat even though they\'ve never experienced hunger; they study even though they have no interest in academics; they seek friendship even though they do not know how to love. If I were to encounter such monsters, I would likely be eaten by them... because in truth, I am that monster'
    }

    const [currentPhrase, setCurrentPhrase] = useState('L. Lawliet')
    const [text, setText] = useState(phrases['L. Lawliet'])
    const timeChange = useRef<NodeJS.Timer | null>()

    const changePhrase = () => {
        const authors = Object.keys(phrases)
        const cur = authors[Math.floor(Math.random() * authors.length)]
        setCurrentPhrase(cur)
        setText(phrases[cur])
    }

    useEffect(() => {
        changePhrase()

        timeChange.current = setInterval(() => {
            changePhrase()
        }, 10000)

        return () => {
            clearInterval(timeChange.current as unknown as NodeJS.Timer)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="mt-28 w-full h-16 bg-main flex justify-center items-center max-[1440px]:h-24">
            <p className="phrases__text text-center text-lg max-[1440px]:text-base">
                &ldquo;{ text }&rdquo; - { currentPhrase }
            </p>
        </div>
    )
}

export default Phrases
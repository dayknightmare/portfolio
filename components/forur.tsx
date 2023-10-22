import { NextPage } from 'next';
import ContainerSection from './containerSection';
import { useEffect, useRef, useState } from 'react';

const ForUr: NextPage = () => {
    const words = useRef([
        'architecture',
        'solutions',
        'data',
        'backend',
        'mobile',
    ]);

    const [currentWord, setCurrentWord] = useState('data')
    const timeChange = useRef<NodeJS.Timer>()

    const writeLetters = (w: string) => {
        let size = 0

        const timer = setInterval(() => {
            setCurrentWord(w.slice(0, size))

            if (w.slice(0, size) == w) {
                clearInterval(timer)
            }

            size += 1

        }, 30)
    }

    const changeWord = () => {
        timeChange.current = setTimeout(() => {
            const newer = [...words.current]
            const w = newer.pop()

            newer.unshift(w!)

            words.current = newer

            let size = currentWord.length - 1
            let timer = setInterval(() => {
                size -= 1
                setCurrentWord(currentWord.slice(0, size))

                if (size === 0) {
                    clearInterval(timer)
                    writeLetters(newer[2])
                    changeWord()
                }
            }, 30)
        }, 3500)
    }

    useEffect(() => {
        changeWord()

        return () => {
            clearInterval(timeChange.current)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <ContainerSection title="">
            <div className="flex justify-center">
                <div className="flex justify-center flex-col relative items-center forur">
                    <div className="flex flex-col justify-between w-full">
                        <span className="font-thin w-full block text-4xl text-right text-hidden max-[425px]:text-center max-[425px]:mb-4">{ words.current[0] }</span>
                        <span className="font-thin w-full block text-4xl text-right text-hidden max-[425px]:text-center max-[425px]:mb-4">{ words.current[1] }</span>
                    </div>
                    <p className="text-9xl font-thin max-[1024px]:text-7xl max-[425px]:text-5xl max-[425px]:text-center">
                        For ur <span className="text-main">{ currentWord }</span>
                    </p>
                    <div className="flex flex-col justify-between w-full">
                        <span className="font-thin w-full block text-4xl text-right text-hidden max-[425px]:text-center max-[425px]:mt-4">{ words.current[3] }</span>
                        <span className="font-thin w-full block text-4xl text-right text-hidden max-[425px]:text-center max-[425px]:mt-4">{ words.current[4] }</span>
                    </div>
                </div>
            </div>
        </ContainerSection>
    )
}

export default ForUr
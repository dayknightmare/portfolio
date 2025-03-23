"use client"

import { Variants } from 'motion/react'
import './banner.scss'
import * as motion from "motion/react-client"
import Image from 'next/image'

export default function Banner() {
    const openLink = (link: string): void => {
        window.open(link, '_blank')
    }

    const variants: Variants = {
        jump: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 1.5,
                duration: .5,
                ease: "easeInOut",
            },
        },
    }

    const iconInitial = {
        y: 30,
        opacity: 0
    }

    return <div className='banner'>
        <motion.div
            transition={{ duration: 1, ease: "circInOut" }}
        >
            <h1 className='text-white'>
                <motion.span
                    className='inline-block'
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 1, ease: "circInOut" }}
                >
                    Hello,
                </motion.span>
                <motion.span
                    className='red-text inline-block'
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 1, ease: "circInOut", delay: 0.5, delayChildren: 3 }}
                >
                    &nbsp;I'm Miguel
                </motion.span>
                <br />
                <motion.span
                    className='inline-block'
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{ duration: 1, ease: "circInOut", delay: 1 }}
                >
                    Backend software engineer
                </motion.span>
                <motion.span>
                </motion.span>
            </h1>
            <br />
            <motion.div
                className='flex'
                animate="jump"
                transition={{ staggerChildren: -.1, staggerDirection: 0, delay: 15 }}
            >
                <motion.div
                    variants={variants}
                    initial={iconInitial}
                >
                    <Image onClick={() => openLink("https://www.linkedin.com/in/miguelvcolombo")} className="cursor-pointer mr-5" src="/icons/linkedin.svg" title="LinkedIn" width={60} height={60} alt="icon"></Image>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial={iconInitial}
                >
                    <Image onClick={() => openLink("https://www.instagram.com/miguel.vcolombo/")} className="cursor-pointer mr-5" title="Instagram" src="/icons/instagram.svg" width={60} height={60} alt="icon"></Image>
                </motion.div>
                <motion.div
                    variants={variants}
                    initial={iconInitial}
                >
                    <Image onClick={() => openLink("https://github.com/dayknightmare")} className="cursor-pointer mr-5" title="GitHub" src="/icons/github.svg" width={60} height={60} alt="icon"></Image>
                </motion.div>
            </motion.div>
        </motion.div>
        <motion.div
            className='hollow text-white'
            initial={{
                opacity: 0,
                y: 30,
                rotate: -10
            }}
            animate={{
                opacity: 1,
                y: 0,
                rotate: -10
            }}
            transition={{ duration: 1, type: "spring" }}
        >
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                Hollow
            </motion.span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1 }}
            >
                &nbsp;drawings
            </motion.span>
        </motion.div>
    </div>
}
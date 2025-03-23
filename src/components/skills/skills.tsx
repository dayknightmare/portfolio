"use client"

import { useState } from 'react';
import * as motion from "motion/react-client"
import "./skills.scss";
import { Variants } from 'motion/react';

export default function Skills() {
    const [activeItem, setActiveItem] = useState('back');

    const animation: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number) => {
            const delay = i * 0.15
            return {
                opacity: 1,
                transition: {
                    opacity: { delay, duration: 1.2, type: "spring", bounce: 0 },
                },
            }
        },
    }

    return <motion.div
        className='skills'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-150px" }}
    >
        <motion.div
            className={'cursor-pointer square-item ' + (activeItem === 'mobile' ? 'active' : '')}
            onClick={() => setActiveItem("mobile")}
            custom={1}
            variants={animation}
        >
            <span>Mobile</span>
        </motion.div>
        <motion.div
            className={'cursor-pointer square-item ' + (activeItem === 'data' ? 'active' : '')}
            onClick={() => setActiveItem("data")}
            custom={2}
            variants={animation}
        >
            <span>Data</span>
        </motion.div>
        <div className='square-item none'><span>Skills</span></div>
        <motion.div
            className={'cursor-pointer square-item ' + (activeItem === 'front' ? 'active' : '')}
            onClick={() => setActiveItem("front")}
            custom={2}
            variants={animation}
        >
            <span>Front</span>
        </motion.div>
        <motion.div
            className={'cursor-pointer square-item ' + (activeItem === 'back' ? 'active' : '')}
            onClick={() => setActiveItem("back")}
            custom={3}
            variants={animation}
        >
            <span>Back</span>
        </motion.div>
        <motion.div
            className={'cursor-pointer square-item ' + (activeItem === 'infra' ? 'active' : '')}
            onClick={() => setActiveItem("infra")}
            custom={4}
            variants={animation}
        >
            <span>Infra</span>
        </motion.div>
        <div className='square-item none'><span>Tech</span></div>
        <motion.div
            className={'cursor-pointer square-item ' + (activeItem === 'db' ? 'active' : '')}
            onClick={() => setActiveItem("db")}
            custom={4}
            variants={animation}
        >
            <span>DB</span>
        </motion.div>
        <motion.div
            className={'cursor-pointer square-item ' + (activeItem === 'tools' ? 'active' : '')}
            onClick={() => setActiveItem("tools")}
            custom={5}
            variants={animation}
        >
            <span>Tools</span>
        </motion.div>
    </motion.div>
}
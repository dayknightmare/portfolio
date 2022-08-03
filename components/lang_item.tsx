import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    title: string,
    icon: StaticImageData | string,
    level: string,
    onClickFun: (e: React.MouseEvent<HTMLDivElement>) => void,
    active?: boolean,
}

const LangItem: React.FC<Props> = ({ icon, title, level, onClickFun, active = false }) => {
    return (
        <div className={`lang__item ${active ? 'active' : ''}`} onClick={onClickFun}>
            <Image src={icon} width={90} height={90} alt="icon"></Image>
            <p>
                {title} <br />
                <span>{level}</span>
            </p>
        </div>
    )
}

export default LangItem

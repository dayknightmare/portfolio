import Image, { StaticImageData } from 'next/image'
import React from 'react'

type Props = {
    title: string,
    icon: StaticImageData | string,
    active?: boolean,
    onClickFun: (e: React.MouseEvent<HTMLDivElement>) => void
}

const KnowItem: React.FC<Props> = ({ icon, title, active, onClickFun }) => {
    return (
        <div className={`know__item ${active ? 'active' : ''}`} onClick={onClickFun}>
            <Image src={icon} width={100} height={100} alt="icon"></Image>
            <p>{title}</p>
        </div>
    )
}

export default KnowItem

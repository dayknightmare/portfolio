import React from 'react'
import Image from 'next/image'

type Props = {
    children?: React.ReactNode,
    imageBackground: string,
    icon: string,
    title: string,
    imgs: string[],
}

const ProjectItem: React.FC<Props> = ({ children, icon, imageBackground, title, imgs }) => {
    return (
        <div className="project__item">
            <div className="project__background" style={{ backgroundImage: `url(${imageBackground})` }}>
                <div className="project__overlay">
                    <div className="project__container">
                        <div className="project__container__header">
                            <Image src={icon} width={90} height={90} alt="icon"></Image>
                            <h3>{title}</h3>
                        </div>
                        {children}
                        <br />
                        <div className="images">
                            {
                                imgs.map((img, index) => (
                                    <Image src={img} width={'100%'} height={'0'} layout="raw" alt="Project image" key={title + '-' + index} placeholder="empty"></Image>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectItem
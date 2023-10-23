/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import { MouseEvent } from 'react';

const ImageModal: NextPage<{
    img: string
}> = ({ img }) => {
    const closeModal = (e: MouseEvent<HTMLDivElement>) => {
        const target = e.target as HTMLDivElement

        if (target.classList.contains('has_close')) {
            document.querySelector(".image__modal")?.classList.remove('flex')
            document.querySelector(".image__modal")?.classList.add('hidden')
        }
    }

    return <div className="image__modal has_close justify-center items-center hidden" onClick={(e) => closeModal(e)}>
        <div
            className="
                rounded-md
                modal__hero
                modal__content
                delay-150
                transition-all
                ease-in-out
                duration-300
                flex
                justify-center
                items-center
                z-10
                has_close
                hero__image
            "
        >
            <div className="has_close rounded-full bg-white px-4 py-2 cursor-pointer absolute right-16 top-16">Close</div>
            {
                img != '' &&
                <img className="max-w-full max-h-full h-auto w-auto rounded-lg" src={img} alt="Modal image" />
            }
        </div>
    </div>
}

export default ImageModal
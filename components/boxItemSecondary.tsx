import { NextPage } from 'next';
import Image from 'next/image';

const BoxItemSecondary: NextPage<{
    img: string,
    title: string,
}> = ({ img, title }) => {
    return (
        <div className={
            "tt p-4 flex flex-col justify-center items-center rounded-md shrink grow box__item__secondary transition duration-300 delay-75 border-2 border-main/0"
                + " hover:border-main/50 hover:bg-main/25 bg-main/10 hover:text-gray-900 text-main"

        } title={title}>
            <div className="w-28 relative h-24 max-[1024px]:w-24 max-[768px]:w-20 max-[768px]:h-20">
                <Image fill style={{ objectFit: "contain" }} src={img} alt="icon" className="mb-3"></Image>
            </div>
        </div>
    )
}

export default BoxItemSecondary
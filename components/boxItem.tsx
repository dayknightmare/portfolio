import { NextPage } from 'next';
import Image from 'next/image';

const BoxItem: NextPage<{
    title: string,
    img: string,
    active: boolean,
    onClick: () => void
}> = ({ title, img, active, onClick }) => {
    return (
        <div className={
            "p-4 flex flex-col justify-center items-center rounded-md min-[769px]:grow w-1/2 box__item cursor-pointer transition duration-300 delay-75 max-[768px]:scale-100 "
                + (active ? "bg-main/90 " : "bg-main/20 ")
                + (active ? "text-gray-900 " : "text-main ")
                + (active ? "scale-110 " : " ")
        } onClick={onClick}>
            <div className={'w-28 relative max-[1024px]:w-20 max-[768px]:w-16 ' + (active ? "h-28 max-[1024px]:h-20 max-[768px]:h-16" : " ")}>
                {
                    active &&
                    <Image fill style={{ objectFit: "contain" }} src={img} alt="icon" className="mb-3"></Image>
                }
            </div>
            <span className={'text-2xl max-[1024px]:text-lg max-[768px]:text-base ' + (active ? "font-normal" : "font-bold")}>{title}</span>
        </div>
    )
}

export default BoxItem
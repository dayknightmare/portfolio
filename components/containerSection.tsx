import { NextPage } from 'next'

const ContainerSection: NextPage<{
    children: React.ReactNode,
    title: string,
    className?: string,
}> = ({ children, title, className }) => {
    return (
        <section className={"w-full p-20 max-[425px]:p-10 " + (className || '')}>
            <h2 className="text-6xl font-light text-white">{title}</h2>
            <br />
            <br />
            <div className="content text-gray-200 font-light leading-10">
                {children}
            </div>
        </section>
    )
}

export default ContainerSection
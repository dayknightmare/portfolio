import Image from 'next/image'

const Banner = () => {
    return (
        <div className="banner">
            <div className="overlay">
                <Image src={'/img/backend.svg'} alt="letters" layout="fill" />
                <Image src={'/img/lines.svg'} alt="letters" layout="raw" width={'0'} height={'0'} />
                <h1>
                    Hello
                    <br />
                    <span>I&rsquo;m Miguel</span>
                </h1>
            </div>
        </div>
    )
}

export default Banner
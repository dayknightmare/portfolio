import Image from 'next/image'
import backendImg from '../assets/img/backend.svg'
import linesImg from '../assets/img/lines.svg'

const Banner = () => {
    return (
        <div className="banner">
            <div className="overlay">
                <Image src={backendImg} alt="letters" layout="fill" />
                <Image src={linesImg} alt="letters" layout="fill" />
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
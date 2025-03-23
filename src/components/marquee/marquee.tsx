import "./marquee.scss"

interface MarqueeProps {
    rotate: number;
    top?: number;
    animation?: 'reverse' | 'forwards';
}

export default function Marquee({ rotate, top = 0, animation = 'reverse' }: MarqueeProps) {
    const opts = [
        "Backend",
        "Frontend",
        "Full stack",
        "Data",
        "Architecture",
        "Solutions",
        "Mobile",
        "Web",
        "Cloud",
        "infrastructure",
        "Business",
        "Development",
        "Engineering",
    ]

    const CreateItem = (opt: string, i: number) => <div className='flex' key={'pos-' + i}>
        <p className='mr-4'>{opt}</p>
        <p>・</p>
    </div>

    return <div style={{transform: `rotate(${rotate}deg)`, marginTop: `${top}rem`}}>
        <div className={'marquee-bar ' + animation}>
            {opts.map((opt, i) => CreateItem(opt, i))}
            {opts.map((opt, i) => CreateItem(opt, i))}
        </div>
    </div>
}
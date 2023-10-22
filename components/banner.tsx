import type { NextPage } from 'next'
import Image from 'next/image'

const Banner: NextPage = () => {
  const openLink = (link: string): void => {
    window.open(link, '_blank')
  }

  return (
    <div className="banner w-full h-full bg-[#0C0C0C] p-8 px-16 flex flex-col justify-center">
        <span className="font-thin text-gray-200">Hello,</span><br/>
        <span className="text-white">I’m Miguel</span><br/>
        <span className="font-thin text-gray-200">a software engineer</span><br/>
        <div className="flex">
          <Image onClick={() => openLink("https://www.linkedin.com/in/miguelvcolombo")} className="cursor-pointer mr-5" src="/portfolio/icons/linkedin.svg" title="LinkedIn" width={60} height={60} alt="icon"></Image>
          <Image onClick={() => openLink("https://www.instagram.com/miguel.vcolombo/")} className="cursor-pointer mr-5" title="Instagram" src="/portfolio/icons/instagram.svg" width={60} height={60} alt="icon"></Image>
          <Image onClick={() => openLink("https://github.com/dayknightmare")} className="cursor-pointer mr-5" title="GitHub" src="/portfolio/icons/github.svg" width={60} height={60} alt="icon"></Image>
          <Image onClick={() => openLink("https://twitter.com/MiguelVColombo")} className="cursor-pointer mr-5" title="X" src="/portfolio/icons/x-2.svg" width={60} height={60} alt="icon"></Image>
        </div>
    </div>
  )
}

export default Banner

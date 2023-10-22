import { NextPage } from 'next'
import Link from 'next/link'
import React from 'react'

const ProjectItem: NextPage<{
    children: React.ReactNode,
    title: string,
    images: string[],
    links?: {name: string, link: string}[]
}> = ({ title, children, images, links }) => {
    return <>
      <div className="border-l-4 border-main pl-10 py-6 mb-12 max-[768px]:pl-5">
        <h3 className="text-5xl font-light">{title}</h3>
        <br />
        <br />
        <span className="text-3xl font-thin leading-relaxed max-[768px]:text-2xl max-[425px]:text-xl">
          {children}
        </span>
        {
          (links || []).length > 0 && <>
            <br /><br /><br />
            <div className="links text-xl">
                {
                    (links || []).map(e =>
                      <span key={e.link + e.name}>
                        <Link href={e.link} passHref>{e.name}</Link>
                        {
                          links?.at(-1) !== e && <>
                            |&nbsp;&nbsp;&nbsp;
                          </>
                        }
                      </span>
                    )
                }
            </div>
          </>
        }
        <br /><br />
        <div className="grid grid-cols-4 gap-5 max-[1024px]:grid-cols-3 max-[768px]:grid-cols-2 max-[425px]:grid-cols-1">
          { images.map(e =>
            <div key={e} className="project__image overflow-hidden rounded-md h-96 border border-main/30 max-[1024px]:h-80" style={{backgroundImage: `url(${e})`}}></div>
          ) }
        </div>
      </div>
    </>
}

export default ProjectItem
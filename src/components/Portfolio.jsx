import React from 'react'
import hope from '../../public/Hope_Hub_logo.svg'
import go from '../../public/GO_logo.svg'
import echri from '../../public/echri.svg'
import potato from '../../public/default_Rotten_potato.svg'
import ProjectCard from './ProjectCard'

function Portfolio() {
    const projectList=[
        {
            name:"GO Platform",
            link:'https://go-app.netlify.app/',
            img:go
        },
        {
            name:"Rotten Potato",
            link:'https://potato-app.netlify.app/',
            img: potato
        },
        {
            name:"Echri",
            link:'https://echri-app.netlify.app/',
            img:echri
        },
        {
            name:"Hope Hub",
            link:'hope-hub.vercel.app',
            img:hope,
        }
    ]
  return (
    <section className='w-full flex flex-col items-center mt-8'>
        <h2 className='w-4/5 md:w-72 mb-40 mt-16 h-20 text-black font-extrabold text-3xl py-4 border-x-[6px] border-black text-center align-middle'>PORTFOLIO</h2>
        <div className='w-full  flex flex-row flex-wrap items-center justify-evenly'>
        {
            projectList.map(project=>(
                <ProjectCard key={project.link} image={project.img} name={project.name} />
            ))
        }
        </div>
    </section>
  )
}

export default Portfolio
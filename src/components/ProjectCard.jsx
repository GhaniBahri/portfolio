import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ProjectCard({image, name, link}) {
  return (
    <div className='w-80 h-80 p-6 relative flex flex-col justify-between items-center group border overflow-hidden'>
        <Image width={50} height={50} alt='project' src={image} className='w-64 h-64' />
        <div className='flex justify-center items-center absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,40%)] -translate-x-full group-hover:translate-x-0 transition-all duration-1000 ease-in-out'>
            <Link href={`${link}`} target='_blank' className='text-white font-medium text-base m-auto'>Visit link!</Link>
        </div>
        <span className='text-white font-medium text-lg text-center w-full'>
            {name}
        </span>
    </div>
  )
}

export default ProjectCard
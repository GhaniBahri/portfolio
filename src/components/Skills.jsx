import Image from 'next/image'
import React from 'react'
import css  from '../../public/css.svg'
import d3  from '../../public/d3.svg'
import firebase  from '../../public/firebase.svg'
import github  from '../../public/github.svg'
import  html from '../../public/html.svg'
import javascript  from '../../public/javascript.svg'
import  nextjs from '../../public/nextjs.svg'
import reactjs  from '../../public/react.svg'
import  sass from '../../public/sass.svg'
import  tailwind from '../../public/tailwindcss.svg'
import  vue from '../../public/vue.svg'
import  figma from '../../public/figma.svg'
import  typescript from '../../public/typescript.svg'
import  nodejs from '../../public/nodejs.svg'
import  docker from '../../public/docker.svg'
function Skills() {
  return (
    <section className='w-full flex flex-col items-center mt-8'>
        <h2 className='w-4/5 md:w-72 mb-40 mt-16 h-20 text-black font-extrabold text-3xl py-4 border-x-[6px] border-black text-center align-middle'>SKILLS</h2>
        <div className='w-1/2  flex flex-col items-center'>
            <h3 className="text-xl text-left font-medium w-full pl-4 pb-4 mb-6 relative after:content-[''] after:absolute after:w-full after:h-px 
            after:bg-black after:left-0 after:bottom-0 before:content-[''] before:absolute before:w-[1.5px] before:h-full 
            before:bg-black before:left-0 before:top-0">
                Experienced with:</h3>
            <div className='grid grid-cols-4 grid-rows-3 w-full gap-20 place-items-center'>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={javascript}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={vue}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={nextjs}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={reactjs}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={html}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={css}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={tailwind}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={sass}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={github}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={firebase}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={d3}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={figma}/>
            </div>
            <h3 className="text-xl text-left font-medium w-full pl-4 pb-4 mt-16 mb-6 relative after:content-[''] after:absolute after:w-full after:h-px 
            after:bg-black after:left-0 after:bottom-0 before:content-[''] before:absolute before:w-[1.5px] before:h-full 
            before:bg-black before:left-0 before:top-0">
                Also learning:</h3>
            <div className='grid grid-cols-4 grid-rows-1 w-full gap-20 place-items-center'>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={typescript}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={nodejs}/>
                <Image className='w-20 h-20' width={10} height={10} alt='skill' src={docker}/>
            </div>
        </div>
    </section>
  )
}

export default Skills
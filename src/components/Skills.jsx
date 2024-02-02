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
import Marquee from "react-fast-marquee";
import spaceShape2 from '../../public/spaceShape2.svg'
import astronaut from '../../public/astronaut.svg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
function Skills() {
    gsap.registerPlugin(MotionPathPlugin)
    useGSAP(()=>{
        // gsap.registerPlugin(MotionPathPlugin);
        gsap.to(".planet1",{
          x: 45,
          y:20,
          repeat: -1,
          ease: "power1",
          duration: 8,
          yoyo: true,
          yoyoEase: "power1"
        })
        gsap.to(".galaxy1",{
          motionPath:{
            path: [
                  {x: 0, y: 0}, 
                  {x: 8, y: 0}, 
                  {x: 8, y: 8}, 
                  {x: 0, y: 8},
                  {x: 0, y: 0} // Add this line to close the path
                ],
                // autoRotate: true,
                curviness: 0.8,
          },
          // z:180,
          yoyo: true,
          ease: "power1",
          duration: 10,
          repeat: -1 // Add this line to make the animation repeat indefinitely
        })
        gsap.from(".galaxy2",{
          motionPath:{
            path: [
                  {x: 8, y: 8}, 
                  {x: 8, y: 0}, 
                  {x: 0, y: 0}, 
                  {x: 0, y: 8},
                  {x: 8, y: 8} // Add this line to close the path
                ],
                // autoRotate: true,
                curviness: 0.8,
          },
          // z:180,
          yoyo: true,
          ease: "power1",
          duration: 10,
          repeat: -1 // Add this line to make the animation repeat indefinitely
        })
        gsap.to(".astronaut",{
          motionPath:{
            path: [
                  {x: 8, y: 8}, 
                  {x: 8, y: 0}, 
                  {x: 0, y: 0}, 
                  {x: 0, y: 8},
                  {x: 8, y: 8} // Add this line to close the path
                ],
                // autoRotate: true,
                curviness: 0.8,
          },
          // z:180,
          yoyo: true,
          ease: "power1",
          duration: 10,
          repeat: -1 // Add this line to make the animation repeat indefinitely
        })
        
      },[])
  return (
    <section className='w-full flex flex-col items-center mt-8 relative overflow-hidden' id='skills'>
        <div className='absolute top-0 right-0 galaxy2'>
        <Image alt='space' width={400} height={300} src={spaceShape2} className='relative -right-20 top-0 ' />
        <Image alt='astronaut' width={100} height={200} src={astronaut} className='astronaut relative -left-4 -top-80 w-64 h-96' />
      </div>
        <h2 className='w-4/5 md:w-72 mb-40 mt-16 h-20 text-white font-extrabold text-3xl py-4 border-x-[6px] border-white text-center align-middle'>SKILLS</h2>
        <div className='w-2/3  flex flex-col items-center'>
            <h3 className="text-xl w-full text-white text-left font-medium mx-auto pl-4 pb-4 mb-6 relative after:content-[''] after:absolute after:w-full after:h-px 
            after:bg-white after:left-0 after:bottom-0 before:content-[''] before:absolute before:w-[1.5px] before:h-full 
            before:bg-white before:left-0 before:top-0">
                Experienced with:</h3>
            {/* <div className='grid grid-cols-4 grid-rows-3 w-full gap-20 place-items-center'> */}
            <Marquee className=' bg-white ' speed={30} gradientColor='black' gradient={true} gradientWidth={200} autoFill>
                <Image className='w-20 h-20 mx-8 my-8' width={10} height={10} alt='skill' src={javascript}/>
                <Image className='w-20 h-20 mx-8 my-8' width={10} height={10} alt='skill' src={vue}/>
                <Image className='w-20 h-20 mx-8 my-8' width={10} height={10} alt='skill' src={nextjs}/>
                <Image className='w-20 h-20 mx-8 my-8' width={10} height={10} alt='skill' src={reactjs}/>
                <Image className='w-20 h-20 mx-8 my-8' width={10} height={10} alt='skill' src={html}/>
                <Image className='w-20 h-20 mx-8 my-8' width={10} height={10} alt='skill' src={css}/>
                <Image className='w-20 h-20 mx-8 my-8' width={10} height={10} alt='skill' src={tailwind}/>
                <Image className='w-20 h-20 mx-8 my-8' width={10} height={10} alt='skill' src={sass}/>
                <Image className='w-20 h-20 mx-8 my-8' width={10} height={10} alt='skill' src={github}/>
                <Image className='w-20 h-20 mx-8 my-8' width={10} height={10} alt='skill' src={firebase}/>
                <Image className='w-20 h-20 mx-8 my-8' width={10} height={10} alt='skill' src={d3}/>
                <Image className='w-20 h-20 mx-8 my-8' width={10} height={10} alt='skill' src={figma}/>
            </Marquee>
            {/* </div> */}
            <h3 className="text-xl text-white text-left font-medium w-full pl-4 pb-4 mt-16 mb-6 relative after:content-[''] after:absolute after:w-full after:h-px 
            after:bg-white after:left-0 after:bottom-0 before:content-[''] before:absolute before:w-[1.5px] before:h-full 
            before:bg-white before:left-0 before:top-0">
                Also learning:</h3>
            {/* <div className='grid grid-cols-4 grid-rows-1 w-full gap-20 place-items-center'> */}
            <Marquee className=' bg-white w-full flex justify-between' speed={30} gradientColor='black' gradient={true} gradientWidth={200} direction='right'>
                <Image className='w-20 h-20 mx-36 my-8' width={10} height={10} alt='skill' src={typescript}/>
                <Image className='w-20 h-20 mx-36 my-8' width={10} height={10} alt='skill' src={nodejs}/>
                <Image className='w-20 h-20 mx-36 my-8' width={10} height={10} alt='skill' src={docker}/>
            </Marquee>
            {/* </div> */}
        </div>
    </section>
  )
}

export default Skills
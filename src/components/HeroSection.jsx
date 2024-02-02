import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import spaceShape from '../../public/space_shape1.svg'
// import spaceShape2 from '../../public/spaceShape2.svg'
// import astronaut from '../../public/astronaut.svg'
import planet1 from '../../public/planet1.svg'
import email from '../../public/email.svg'
import github from '../../public/github.svg'
import linkedin from '../../public/linkedin.svg'
import styles from '../styles/HeroSection.module.css'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
// import { MotionPathPlugin } from 'gsap/all';
// gsap.registerPlugin(MotionPathPlugin)
function HeroSection() {
  function CopyEmail(){
    navigator.clipboard.writeText('abdelghani.bahri0@gmail.com')
    alert("abdelghani.bahri0@gmail.com \n Email copied, Looking forward to hearing from you")
  }
  useEffect(()=>{
    const GsapMotion = require('gsap/MotionPathPlugin')
    const {MotionPathPlugin} = GsapMotion
    gsap.registerPlugin(MotionPathPlugin);
  }, [])
  
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
    <section className='w-full flex flex-col items-center justify-center bg-transparent text-white text-center relative overflow-hidden'>
      <div className='absolute top-48 left-0  galaxy1'>
        <Image alt='space' width={500} height={300} src={spaceShape} className='relative -left-28 top-0 -rotate-[20deg]'/>
        <div className={styles.spaceShapesm+' relative left-[20rem] -top-36 shadow-[0_0_0_4px_black]  bg-white  w-36 h-28'}></div>
        <Image src={planet1} alt='planet' width={100} height={100} className='planet1 w-32 h-32 relative left-48 -top-[35rem] '/>
      </div>
      {/* <div className='absolute top-36 right-0 galaxy2'>
        <Image alt='space' width={400} height={300} src={spaceShape2} className='relative -right-20 top-0 ' />
        <Image alt='astronaut' width={100} height={200} src={astronaut} className='astronaut relative -left-4 -top-80 w-64 h-96' />
      </div> */}
      <div className='w-1/2 mx-auto flex flex-col items-center justify-start gap-2 px-8 mt-24 '>
          <p className='text-3xl font-bold w-full'>Hi, I&#39;m</p>
          <h1 className={styles.textOutline+' text-9xl w-full mt-12 mb-2 text-transparent font-londrina '}>ABDELGHANI BAHRI </h1>
          <h2 className='font-bold w-full text-5xl text-white '>Front-end Developer</h2>
          <div className='flex flex-row w-full justify-center  items-center gap-6 mt-12'>
            <Link onClick={CopyEmail} href="" className='w-12 h-12 bg-white rounded-sm shadow-[0_0_4px_2px_rgba(255,255,255,40%)] p-2'><Image className='w-full h-full' src={email} width={10} height={10} alt='links' /></Link>
            <Link href="https://github.com/GhaniBahri" className='w-12 h-12 bg-white rounded-sm shadow-[0_0_4px_2px_rgba(255,255,255,40%)] p-2'><Image className='w-full h-full' src={github} width={10} height={10} alt='links' /></Link>
            <Link href="https://www.linkedin.com/in/abdelghani-bahri-0a190a159/" className='w-12 h-12 bg-white rounded-sm shadow-[0_0_4px_2px_rgba(255,255,255,40%)] p-2'><Image className='w-full h-full' src={linkedin} width={10} height={10} alt='links' /></Link>
          </div>
      </div>
      <div className='w-full p-8 bg-transparent text-left'>
        <p className='w-full text-left text-white text-xl font-medium leading-[50px]' id='about'>
        I&#39;m a front-end developer with an insatiable desire to thrive in the dynamic and ever-evolving tech industry. I have the skill to understand and translate design concepts into tangible web applications. My technical portfolio includes coding experiences in HTML, CSS, JavaScript, Reactjs, and Vuejs
        I find excitement in continuous learning, embracing new challenges, and staying updated with cutting-edge technologies. 
        As a self-learner and result-driven individual, I take pride in my fast-paced growth and adaptability.
        In this industry, collaboration is key, which makes me excited to connect with other professionals to diversify ideas and explore promising opportunities.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
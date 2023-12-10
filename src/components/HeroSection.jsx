import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import hero from '../../public/hero_img.png'
import email from '../../public/email.svg'
import github from '../../public/github.svg'
import linkedin from '../../public/linkedin.svg'

function HeroSection() {
  return (
    <section className='w-full flex flex-col items-center'>
      <div className='w-full flex flex-row-reverse px-8 mt-24 text-left'>
      <div className='w-2/5 bg-transparent flex flex-col justify-center items-center ' >
        <p className='text-3xl font-bold w-full'>Hi, I&#39;m</p>
        <h1 className='text-6xl font-bold w-full mt-6 mb-2'>ABDELGHANI BAHRI </h1>
        <h2 className='font-bold w-full text-5xl text-gray-600 text-left'>Front-end Developer</h2>
        <div className='flex flex-row w-full justify-end items-center gap-6 mt-12'>
          <Link href="" className='w-12 h-12 shadow-[0_0_4px_2px_rgba(0,0,0,40%)] p-2'><Image className='w-full h-full' src={email} width={10} height={10} alt='links' /></Link>
          <Link href="" className='w-12 h-12 shadow-[0_0_4px_2px_rgba(0,0,0,40%)] p-2'><Image className='w-full h-full' src={github} width={10} height={10} alt='links' /></Link>
          <Link href="" className='w-12 h-12 shadow-[0_0_4px_2px_rgba(0,0,0,40%)] p-2'><Image className='w-full h-full' src={linkedin} width={10} height={10} alt='links' /></Link>
        </div>
      </div>
      <div className='w-3/5' style={{clipPath:"polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%)"}}>
        <Image src={hero} width={800} height={200} alt='Abdelghani Bahri' className='w-full h-[50vh] md:h-[600px]  '/>
      </div></div>
      <div className='w-full p-8 bg-black text-left'>
        <p className='w-full text-left text-white text-xl font-medium leading-[50px]'>
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
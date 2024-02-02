import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import NavBar from '@/components/NavBar'
import { useTranslation } from "next-i18next";
import HeroSection from '@/components/HeroSection';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import rocket from '../../public/rocket.svg'
// import { GSDevTools } from 'gsap/GSDevTools';
// gsap.registerPlugin(MotionPathPlugin)


export default function Home() {
  // GSDevTools.create({animation:animation})
  const { t } = useTranslation("common");
  // gsap.registerPlugin(MotionPathPlugin)
  // let animation= null
  // useGSAP(()=>{
  //   gsap.to(".rocket",{
  //     duration: 15, ease:"none", repeat:-1, yoyo: true,
  //     motionPath:{
  //       path:".path",
  //       align:".path",
  //       autoRotate: true,
  //       alignOrigin:[0.5 , 0.5]
  //     }
  //   })
  // })
  return (
    <main
      className={`flex min-h-screen flex-col bg-black items-center justify-between `}
    >
{/*       
      <svg width="868" height="1686" viewBox="0 0 868 1686" fill="none" xmlns="http://www.w3.org/2000/svg" className=' absolute top-0 left-0'>
        <path d="M503.5 20C-1129.5 849.5 2046.04 757.934 312 1666" stroke="none" stroke-width="40" stroke-linecap="round" className='path'/>
      </svg>
      <Image alt='rocket' width={300} height={200} src={rocket} className='rocket absolute top-0 left-0' /> */}
      <NavBar/>
      <HeroSection/>
      <Skills/>
      <Portfolio/>
    </main>
  )
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [ 'common'])), // Will be passed to the page component as props
    },
  }
}
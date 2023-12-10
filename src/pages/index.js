import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import NavBar from '@/components/NavBar'
import { useTranslation } from "next-i18next";
import HeroSection from '@/components/HeroSection';
import Skills from '@/components/Skills';
import Portfolio from '@/components/Portfolio';



export default function Home() {
  const { t } = useTranslation("common");
  return (
    <main
      className={`flex min-h-screen flex-col bg-gray-300 items-center justify-between `}
    >
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
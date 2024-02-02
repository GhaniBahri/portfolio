import Link from 'next/link'
import React from 'react'

function NavBar() {
  function scrollTo(targetID) {
    if (typeof window !== 'undefined' && window.document) {
      console.log('target', targetID)
      document.querySelector(`#${targetID}`).scrollIntoView();
    }
}
  return (
    <nav className='hidden z-50 md:flex flex-row md:w-full lg:w-1/2 justify-between items-center bg-transparent ml-auto mt-8 absolute right-0 mr-12'>
      <Link href='/#about' onClick={()=>scrollTo('about')} className='font-semibold text-xl text-white'>About me!</Link>
      <Link href="/#skills" onClick={()=>scrollTo('skills')} className='font-semibold text-xl text-white'>Skills</Link>
      <Link href="/portfolio" onClick={()=>scrollTo('portfolio')} className='font-semibold text-xl text-white'>Portfolio</Link>
      <Link href="/" onClick={()=>scrollTo('contact')} className='font-semibold text-xl text-white'>Contact me</Link>
    </nav>
  )
}

export default NavBar
import Link from 'next/link'
import React from 'react'

function NavBar() {
  return (
    <nav className='hidden md:flex flex-row md:w-full lg:w-1/2 justify-between items-center bg-transparent ml-auto mt-8 absolute right-0 mr-12'>
      <Link href="/" className='font-semibold text-xl text-gray-700'>About me!</Link>
      <Link href="/" className='font-semibold text-xl text-gray-700'>Skills</Link>
      <Link href="/" className='font-semibold text-xl text-gray-700'>Portfolio</Link>
      <Link href="/" className='font-semibold text-xl text-gray-700'>Contact me</Link>
    </nav>
  )
}

export default NavBar
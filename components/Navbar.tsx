'use client'
import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <nav className='flex items-center justify-between p-4 px-10'>
      <div className='flex items-center font-black text-2xl'>
        <h1 className='text-yellow-500 text-5xl mr-1'>E</h1>
        <h1 className=''>moTrack</h1>
      </div>
      <div className='flex gap-10 font-bold relative'>
        <Link href="/" onClick={() => setActiveTab(1)}>Home</Link>
        <Link href="/" onClick={() => setActiveTab(2)}>About</Link>
        <Link href="/" onClick={() => setActiveTab(3)}>Services</Link>
        <div className={`absolute w-12 h-1 bg-yellow-500 top-6 transition-all ease-in-out duration-300 ${activeTab == 1 && 'left-0' || activeTab == 2 && 'left-[87px]' || activeTab == 3 && 'left-[185px]'}`}></div>
      </div>
      <div className='flex gap-10 items-center font-bold text-white'>
        <Link href="/login">Login</Link>
        <Link href="/" className='p-4 bg-yellow-500 rounded-md hover:text-yellow-500 hover:bg-white border-2 border-yellow-500 transition-all ease-in-out duration-300'>Contact Me</Link>
      </div>
    </nav>
  )
}

export default Navbar

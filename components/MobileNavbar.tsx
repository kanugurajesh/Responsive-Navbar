'use client'

import Link from 'next/link'
import { useState } from 'react'

const MobileNavbar = () => {
  const [activeMenu, setActiveMenu] = useState(false)
  return (
    <div>
      <nav className="p-4 px-10 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center font-black text-xl hover:scale-105 transition-all ease-in-out duration-300"
        >
          <h1 className="text-yellow-500 text-4xl mr-1">E</h1>
          <h1 className="">moTrack</h1>
        </Link>
        <div className="flex flex-col gap-1" onClick={() => setActiveMenu(!activeMenu)}>
          <div className={`w-8 h-1 origin-[33%_80%] bg-black ${activeMenu ? 'rotate-[45deg]' : ''} transition-all ease-in-out duration-300`}></div>
          <div className={`w-8 h-1 bg-black ${activeMenu ? 'hidden' : ''} transition-all ease-in-out duration-300`}></div>
          <div className={`w-8 h-1 bg-black origin-[33%_80%] ${activeMenu ? '-rotate-[45deg]' : ''} transition-all ease-in-out duration-300`}></div>
        </div>
      </nav>
    </div>
  )
}

export default MobileNavbar

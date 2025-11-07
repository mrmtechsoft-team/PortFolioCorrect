// 'use client'
import { assets } from '@/asstes/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'


const Navbar = ({isDarkMode, setIsDarkMode}) => {
  
  const [isScroll, setIsScroll] = useState(false); 

  const sideMenuRef = useRef();

  const openMenu = ()=>{
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  }

  const closeMenu = ()=>{
    sideMenuRef.current.style.transform = "translateX(16rem)";
  }

  useEffect(()=>{
    window.addEventListener("scroll", ()=>{
      if(scrollY > 50){
          setIsScroll(true);
      }
      else{
        setIsScroll(false)
      }
    })
  }, [])
  return (
    <>
      <nav className={ `w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex item-center justify-between z-50 ${isScroll ? "bg-transparent  backdrop-blur-lg shadow-sm" : ""}`}>

        <a href="#top">
          <Image src={assets.logoRem} className='w-15 rounded-full cursor-pointer mr-14' alt=''/>
        </a>

        <ul className={`hidden md:flex   text-center justify-center item-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? "" : " shadow-sm bg-opacity-50"} dark:border-white/50`}>
          <li><a className="font-Ovo" href="#top">Home</a></li>
          <li><a className="font-Ovo" href="#about">About us</a></li>
          <li><a className="font-Ovo" href="#services">Services</a></li>
          <li><a className="font-Ovo" href="#work">Our Work</a></li>
          <li><a className="font-Ovo" href="#Contact">Contact me</a></li>
        </ul>

        <div className='flex item-center gap-4'>

          <button onClick={()=>setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode? assets.sun : assets.moon} className='w-6 cursor-pointer' alt='dark'/>
          </button>

          <a href='#Contact' className=' hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full  font-Ovo' > 
            <h1>Contact</h1> 
            <Image src={isDarkMode ? assets.arrowIcon : assets.arrowDark} 
            className='w-2' alt='->'/>
          </a>

          <button className='block md:hidden ml-3 ' onClick={openMenu}>
            <Image src={isDarkMode ? assets.menuWhite : assets.menuBlack} className='w-10' alt='dark'/>
          </button>
        </div>

        {/* mobile menu */}

        <ul ref={sideMenuRef} className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen ${isDarkMode ? "bg-darkTheme": "bg-rose-50" }  transition duration-500 `}>
          <div className='absolute right-6 top-6' onClick={closeMenu}>
            <Image src={isDarkMode? assets.closeWhite : assets.close} className='w-5 cursor-pointer' alt='cross'/>

          </div>
          <li><a onClick={closeMenu} className="font-Ovo" href="#top">Home</a></li>
          <li><a onClick={closeMenu} className="font-Ovo" href="#about">About us</a></li>
          <li><a onClick={closeMenu} className="font-Ovo" href="#services">Services</a></li>
          <li><a onClick={closeMenu} className="font-Ovo" href="#work">My Work</a></li>
          <li><a onClick={closeMenu} className="font-Ovo" href="#Contact">Contact me</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar

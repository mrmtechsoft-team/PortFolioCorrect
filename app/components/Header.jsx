import { assets } from '@/asstes/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = (isDarkMode, setIsDakMode) => {
  return (
    <div className='w-full max-w-3xl text-center mx-auto min-h-screen flex flex-col items-center justify-center gap-4 '>

      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      >

        <Image src={assets.logoRem} alt='' className=' rounded-full w-60 m-30' />
      </motion.div>

      <motion.div
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className='flex flex-col sm:flex-row items-center justify-center gap-4 text-xl md:text-2xl mb-3 font-Ovo'
      >
        <Image
          src={assets.namaskar}
          alt='Namaste'
          className='w-20 sm:w-24 rounded-full'
        />
        <h3 className='text-center text-2xl sm:text-3xl font-semibold'>
          नमस्ते!! Welcome to MRM
        </h3>
      </motion.div>

      <motion.h3
        className='text-lg sm:text-6xl   lg:text-[66px] font-Ovo'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Software Service Provider
      </motion.h3>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}

        className='max-w-2xl mx-auto font-Ovo'>
        At MRM, we turn ideas into impactful digital experiences — crafting smart, scalable, and future-ready software solutions powered by innovation and AI.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}

        className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
        <a href="#contact" className='px-10 py-3 border  rounded-full  flex items-center gap-2'>Contact us<Image src={isDarkMode ?  assets.rightArrowDark1 : assets.rightArrowWhite1} alt='' className='w-4' /></a>

        <a href="/Profile.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>Our Plans<Image src={isDarkMode ? assets.downloadIcon : ""} alt='' className='w-4' /></a>
      </motion.div>
    </div>
  )
}

export default Header

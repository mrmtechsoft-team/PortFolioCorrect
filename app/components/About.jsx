import { assets, infoList, toolsData } from '@/asstes/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = () => {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      id='about'
      className='w-full px-[12%] py-10 scroll-mt-20'
    >
      <h3 className='text-center text-lg mb-2 font-Ovo'>Introduction</h3>
      <h2 className='text-center text-5xl font-Ovo'>About me</h2>

      <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
        <div>
          <Image src={assets.headLog} alt='' className='rounded-full w-100' />
        </div>

        <div className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            I’m a B.Tech (AI/ML) student at S.H.E.A.T., passionate about Data Science, Generative AI, and Web Development.

            📌 I hold a certificate in Data Science with Generative AI and have a solid foundation in Python programming, which I've been mastering over the past year. Alongside my academic journey, I actively teach Python and basic computer skills, helping others grow while reinforcing my own knowledge.

            💻 I’m also a Front-End Web Developer, currently expanding my skills in Full-Stack Development with a goal to build innovative, real-world tech solutions.
          </p>

          {/* Info Cards */}
          <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <li
                key={index}
                className='border-[0.5px] border-gray-400 rounded-xl cursor-pointer p-6 hover:bg-lightHover hover:-translate-y-1 duration-300 hover:shadow-black dark:border-gray-600 dark:hover:bg-darkHover'
              >
                {/* Light and Dark mode icon handling */}
                <Image
                  src={icon}
                  alt={title}
                  className='w-7 mt-3 block dark:hidden'
                />
                <Image
                  src={iconDark || icon}
                  alt={title}
                  className='w-7 mt-3 hidden dark:block'
                />

                <h3 className='my-4 font-semibold text-gray-700 dark:text-gray-200'>
                  {title}
                </h3>
                <p className='text-gray-600 dark:text-gray-400 text-sm'>
                  {description}
                </p>
              </li>
            ))}
          </ul>

          {/* Tools section */}
          <h4 className='my-6 text-gray-700 dark:text-gray-200 font-Ovo'>
            Tools I use
          </h4>
          <ul className='flex items-center gap-3 sm:gap-5'>
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 dark:border-gray-600 rounded-lg cursor-pointer hover:-translate-y-1 duration-300'
              >
                <Image src={tool} alt='Tool' className='w-5 sm:w-7' />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

export default About

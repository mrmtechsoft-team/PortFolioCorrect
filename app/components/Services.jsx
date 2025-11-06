"use client";
import { assets, serviceData } from "@/asstes/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Services = ({ isDarkMode }) => {
  return (
    <motion.section
      id="services"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full px-[10%] py-20 scroll-mt-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-[#0a0a0a]"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h3 className="text-lg font-Ovo  dark:text-gray-800 tracking-wide">
          What We Offer
        </h3>
        <h2 className="text-4xl md:text-5xl font-Ovo text-white dark:text-gray-800 mt-2">
          Our Services
        </h2>
        <p className="text-gray-600 dark:text-gray-900 max-w-2xl mx-auto mt-5 text-sm sm:text-base font-Ovo leading-relaxed">
          At <span className="font-semibold text-primary dark:text-blue-400">MRM</span>, 
          we provide professional web, app, and software solutions to help businesses grow 
          digitally. With expertise in AI, Data Science, and Full-Stack Development, 
          we turn ideas into impactful digital products.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid sm:grid-cols-2 cursor-pointer lg:grid-cols-3 gap-8">
        {serviceData.map(({ icon, title, description, serviceInclude, link }, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#111] rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-blue-400 dark:hover:border-blue-500 duration-300 group"
          >
            {/* Icon */}
            <div className="flex items-center justify-center w-14 h-14 bg-blue-50 dark:bg-blue-950 rounded-xl mb-5">
              <Image src={icon} alt={title} className="w-8 h-8 object-contain" />
            </div>

            {/* Title & Description */}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-3 group-hover:text-blue-500 duration-300">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-white leading-relaxed mb-5">
              {description}
            </p>

            {/* Service Include List */}
            {serviceInclude && serviceInclude.length > 0 && (
              <ul className="mb-6 space-y-2">
                {serviceInclude.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300"
                  >
                    <span className="w-2.5 h-2.5 mt-1 bg-blue-500 dark:bg-blue-400 rounded-full flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            )}

            {/* Read More Link */}
            <a
              href={link || "#"}
              target="_blank"
              className="flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 font-medium hover:gap-3 duration-300"
            >
              Read More
              <Image
                src={isDarkMode ? assets.arrowDark : assets.arrowIcon}
                alt="arrow"
                className="w-3 transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;

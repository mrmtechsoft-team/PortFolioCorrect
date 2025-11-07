"use client";
import { assets, workData } from "@/asstes/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.section
      id="work"
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="w-full px-[10%] py-20 bg-gradient-to-b from-transparent to-gray-50 dark:to-[#0a0a0a]"
    >
      {/* Section Title */}
      <div className="text-center mb-12">
        <h3 className="text-lg text-gray-500 dark:text-gray-400 font-Ovo">
            ⭐⭐⭐⭐⭐
        </h3>
        <h2 className="text-4xl md:text-5xl font-Ovo text-gray-800 dark:text-gray-800 mt-2">
          Our Latest Work
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 font-Ovo">
          Here are some of my latest projects that showcase our expertise in
          design, development, and innovation.
        </p>
      </div>

      {/* Portfolio Grid */}
      <div className="grid md:grid-cols-2 gap-10">
        {workData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="group bg-white cursor-pointer dark:bg-[#111] rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 dark:border-gray-800 transition-all duration-300"
          >
            {/* Project Image */}
            <div className="overflow-hidden">
              <Image
                src={project.img}
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Project Info */}
            <div className="p-6 flex flex-col justify-between h-[240px]">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Link */}
              <div className="flex justify-end mt-4">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
                >
                  View Project
                  <Image
                    src={assets.arrowIcon}
                    alt="arrow"
                    className="w-5 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Work;

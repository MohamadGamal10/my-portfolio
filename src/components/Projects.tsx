"use client";
import React, { useState } from 'react'
import { projects } from './data';
import Image from 'next/image';
import { FaExternalLinkAlt, FaGithub, FaLaptopCode } from 'react-icons/fa';
export default function Projects() {
    const categories = [
        "All Projects",
        "HTML & CSS",
        "JavaScript",
        "Bootstrap",
        "Tailwind",
        "MUI",
        "Typescript",
        "React",
        "Next.js",
        "Php",
        "My SQL",
        "Laravel",
    ];
    const [selectedCategory, setSelectedCategory] = useState("All Projects");

    const filteredProjects =
        selectedCategory === "All Projects"
            ? projects
            : projects.filter((project) => project.category.includes(selectedCategory));
    return (
        <div className="container">
            <div className='my-20'>
                <span className="flex flex-col lg:flex-row justify-center items-center text-center text-5xl font-black mb-9 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-gray-100">My Coding Projects<FaLaptopCode className='mt-3 lg:mt-0 lg:ml-5' /></span>

                <div className="flex justify-center gap-3 flex-wrap mb-10 ">
                    {categories.map((cat, index) => (
                        <button
                            key={index}
                            onClick={() => setSelectedCategory(cat)}
                            className={`text-xl py-3 px-7 border w-full sm:w-fit cursor-pointer border-[#0ea5ea] rounded-[50px] font-medium text-white duration-[0.4s] hover:bg-sky-500 hover:border-transparent 
              ${selectedCategory === cat
                                    ? "bg-sky-500 border-transparent"
                                    : ""
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={index}
                            className="rounded-lg overflow-hidden group  border border-gray-600  "
                        >
                            <div className="relative w-full h-52">
                                <Image
                                    src={project.imge}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="transition-all duration-[1s] object-top group-hover:object-bottom "
                                />
                            </div>

                            <div className="p-4 text-center relative z-10">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    {project.title}
                                </h3>
                                <p className="text-gray-400 mb-4">{project.description}</p>

                                <div className="flex justify-evenly ">
                                    {project.live && (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#0ea5ea] hover:underline flex items-center gap-2"
                                        >
                                            <FaExternalLinkAlt />
                                            Live Demo
                                        </a>
                                    )}


                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#0ea5ea] hover:underline flex items-center gap-2"
                                        >
                                            <FaGithub />
                                            Github
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

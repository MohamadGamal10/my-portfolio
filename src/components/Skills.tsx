"use client"

import { BiLogoTypescript } from "react-icons/bi";
import { FaBootstrap, FaCss3Alt, FaHtml5, FaLaravel } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { RiJavascriptFill, RiTailwindCssFill } from "react-icons/ri";
import { SiMui, SiMysql, SiNextdotjs, SiPhp, SiRedux } from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { Tilt } from "react-tilt";

export default function Skills() {
    return (
        <div className="container">
            <div className='mt-5'>
                <h1 className="text-center text-5xl font-black mb-9 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-gray-100">My Skills 👇</h1>
                <div className='grid grid-cols-1 gap-12 lg:grid-cols-2'>
                    <Tilt >
                    <div className='border border-sky-200 rounded-lg md:p-7 py-7  flex flex-col gap-8 items-center shadow-lg shadow-sky-300'>
                        <h3 className='text-2xl font-semibold text-sky-400'>Frontend Skills</h3>
                        <div className='flex items-center justify-center flex-wrap gap-3'>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <FaHtml5 />
                                <span className='font-semibold'>HTML</span>
                            </div>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <FaCss3Alt />
                                <span className='font-semibold'>CSS</span>
                            </div>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <RiJavascriptFill />
                                <span className='font-semibold'>Javascript</span>
                            </div>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <BiLogoTypescript />
                                <span className='font-semibold'>Typescript</span>
                            </div>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <FaBootstrap />
                                <span className='font-semibold'>Bootstrap</span>
                            </div>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <RiTailwindCssFill />
                                <span className='font-semibold'>Tailwind Css</span>
                            </div>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <SiMui />
                                <span className='font-semibold'>Material UI</span>
                            </div>

                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <IoLogoReact />
                                <span className='font-semibold'>React.js</span>
                            </div>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <SiRedux />
                                <span className='font-semibold'>Redux</span>
                            </div>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <SiNextdotjs />
                                <span className='font-semibold'>Next.js</span>
                            </div>
                        </div>
                    </div>
                    </Tilt>

                    <Tilt >
                    <div className='border border-sky-200 rounded-lg md:p-7 py-7 h-full  flex flex-col gap-8 items-center shadow-lg shadow-sky-300'>
                        <h3 className='text-2xl font-semibold text-sky-400'>Backend Skills</h3>
                        <div className='flex items-center justify-center flex-wrap gap-3'>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <SiPhp />
                                <span className='font-semibold'>PHP</span>
                            </div>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <SiMysql />
                                <span className='font-semibold'>MySQL</span>
                            </div>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <FaLaravel />
                                <span className='font-semibold'>Laravel</span>
                            </div>
                            <div className='border border-sky-300 flex items-center gap-1 w-max px-2 py-1 rounded-lg shadow-md shadow-sky-300'>
                                <TbApi />
                                <span className='font-semibold'>API</span>
                            </div>

                        </div>
                    </div>
                    </Tilt>
                </div>
            </div>

        </div>
    )
}

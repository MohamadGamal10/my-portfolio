import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import { FcViewDetails } from 'react-icons/fc'

export default function Hero() {
    return (
        <div className='mx-auto px-5 sm:w-11/12 xl:w-3/4 2xl:w-2/3 py-12 xl:py-20'>
            <div className="max-w-xl mx-auto px-5">
                <div className="flex justify-center">
                    <Image src="/hero.png" width={250} height={250} alt="profile" />
                </div>
                <h3 style={{ letterSpacing: '0.35em' }} className="text-sm my-4 font-black uppercase text-center text-gray-500 dark:text-gray-400">HI,my name is</h3>
                <p style={{ lineHeight: 1.1 }} className="bg-gradient-to-r text-center from-[#3b82f6] to-[#2dd4bf] bg-clip-text text-5xl pb-1 mb-4 font-[900] text-transparent">
                    Mohamed Gamal.
                </p>
                <p style={{ lineHeight: 1.1 }} className="bg-gradient-to-r text-center from-[#3b82f6] to-[#2dd4bf] bg-clip-text text-5xl pb-1 mb-4 font-[900] text-transparent">
                    I am a Full-Stack dev.
                </p>

                <p className='text-lg sm:text-xl text-center leading-7 sm:leading-8 text-gray-700 dark:text-gray-300'>I love designing smooth digital experiences✨.</p>
                <p className='text-lg sm:text-xl text-center leading-7 sm:leading-8 text-gray-700 dark:text-gray-300'>Currently, Focused on growing and creating impactful software👨‍💻.</p>
                <div className="flex justify-center flex-wrap">
                    <Link href={"https://www.linkedin.com/in/mohamadgamal10/"} target='_blank' className="py-3 mx-2 my-2 mt-6 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5 bg-sky-500 flex  text-white hover:bg-sky-600 hover:text-white">Linkedin <FaLinkedin className='ml-1' /></Link>
                    <Link
                        href="mailto:mohammedgamaldev@gmail.com"
                        className="py-3 mx-2 my-2 mt-6 rounded-full font-bold leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5 bg-teal-500 flex items-center text-white hover:bg-teal-600 hover:text-white"
                    >
                        Email <FaEnvelope className="ml-2" />
                    </Link>

                    <Link
                        href="https://github.com/MohamadGamal10"
                        target="_blank"
                        className="py-3 mx-2 my-2 mt-6 rounded-full font-bold border-white border-1 leading-none translate-hover-2 hover:shadow-lg transition-all ease-in-out duration-150 px-5 bg-[#24292e] flex text-white hover:bg-black hover:text-white"
                    >
                        GitHub <FaGithub className="ml-1" />
                    </Link>

                    <Link
                        href="https://www.linkedin.com/in/mohamadgamal10/"
                        target="_blank"
                        className="py-3 px-5 mx-2 my-2 mt-6 rounded-full font-bold leading-none border border-sky-500 text-sky-500 hover:bg-sky-500 hover:text-white flex items-center transition-all ease-in-out duration-150"
                    >
                        My CV <FcViewDetails className="ml-2" />
                    </Link>

                </div>
            </div>
        </div>
    )
}

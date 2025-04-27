import Image from 'next/image'
import React from 'react'

export default function Work() {
    return (
        <div className="container">
            <div className='mt-25'>
                <h1 className="text-center text-5xl font-black mb-9 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-gray-100 mx-auto md:max-w-[600px] max-w-[300px]">Work Experience 💼</h1>
       
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="flex justify-center ">
                        <Image src="/mostaql-logo-white.svg" className='object-contain' width={188} height={94} alt="iti" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-2">Freelancer at <span className='text-sky-400'>Mostaql</span></h3>
                        <p className="my-2 text-xl">⭐⭐⭐⭐⭐</p>
                        <p className="mb-2 font-md">
                        As a freelance developer on Mostaql, I have maintained a 5-star rating by providing high-quality work and a strong focus on client satisfaction in all my projects.                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

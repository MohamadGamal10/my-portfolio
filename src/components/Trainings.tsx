import Image from 'next/image'
import React from 'react'

export default function Trainings() {
    return (
        <div className="container">
            <div className='my-15'>
                <h1 className="text-center text-5xl font-black mb-9 pb-1 bg-clip-text bg-gradient-to-r text-gray-800 dark:text-gray-100">Trainings 🛠️</h1>
       
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    <div className="flex justify-center ">
                        <Image src="/iti.png" className='object-contain' width={188} height={94} alt="iti" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-white mb-2">Trainee, Information Technology Institute (ITI)</h3>
                        <p className="mb-2">
                            <span className="font-semibold text-white">Track: </span>
                            Advanced Front-End Web Development using React.js
                        </p>
                        <ul className="list-disc list-inside space-y-1 text-gray-300">
                            <li>Clientside Technologies</li>
                            <li>Responsive Design</li>
                            <li>CSS Preprocessor</li>
                            <li>ECMAScript 6 (ES6)</li>
                            <li>React.js Framework</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    )
}

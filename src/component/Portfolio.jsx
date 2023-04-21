import React from 'react'
import Partfolio from "../assets/images.jpeg"

const Portfolio = () => {


    return (
        <div name="portfolio" className=' md:h-screen w-full  bg-gradient-to-b from-black to-gray-800 p-10   '
        >
            <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full text-white' >
                <div className='p-5' >
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6' >
                        Check my Works
                    </p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ' >
                    <div className=' shadow-md shadow-gray-600  rounded-lg  ' >
                        <img src={Partfolio} alt=' ' className='  rounded-md duration-200 hover:scale-105 w-full ' />
                        <div className='flex items-center justify-between  '>
                            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105  '  >
                                Demo
                            </button >
                            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105  '  >
                                Code
                            </button >
                        </div>
                    </div>
                    <div className=' shadow-md shadow-gray-600  rounded-lg  ' >
                        <img src={Partfolio} alt=' ' className='  rounded-md duration-200 hover:scale-105 w-full ' />
                        <div className='flex items-center justify-between  '>
                            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105  '  >
                                Demo
                            </button >
                            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105  '  >
                                Code
                            </button >
                        </div>
                    </div>

                    <div className=' shadow-md shadow-gray-600  rounded-lg  ' >
                        <img src={Partfolio} alt=' ' className='  rounded-md duration-200 hover:scale-105 w-full ' />
                        <div className='flex items-center justify-between  '>
                            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105  '  >
                                Demo
                            </button >
                            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105  '  >
                                Code
                            </button >
                        </div>
                    </div>

                    <div className=' shadow-md shadow-gray-600  rounded-lg  ' >
                        <img src={Partfolio} alt=' ' className='  rounded-md duration-200 hover:scale-105 w-full ' />
                        <div className='flex items-center justify-between  '>
                            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105  '  >
                                Demo
                            </button >
                            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105  '  >
                                Code
                            </button >
                        </div>
                    </div>

                    <div className=' shadow-md shadow-gray-600  rounded-lg  ' >
                        <img src={Partfolio} alt=' ' className='  rounded-md duration-200 hover:scale-105 w-full ' />
                        <div className='flex items-center justify-between  '>
                            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105  '  >
                                Demo
                            </button >
                            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105  '  >
                                Code
                            </button >
                        </div>
                    </div>

                    <div className=' shadow-md shadow-gray-600  rounded-lg  ' >
                        <img src={Partfolio} alt=' ' className='  rounded-md duration-200 hover:scale-105 w-full ' />
                        <div className='flex items-center justify-between  '>
                            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105  '  >
                                Demo
                            </button >
                            <button className='w-1/2 px-6 py-3 duration-200 hover:scale-105  '  >
                                Code
                            </button >
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Portfolio

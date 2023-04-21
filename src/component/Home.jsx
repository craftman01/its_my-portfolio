import React from 'react'
import HeroImage from '../assets/heroImg.webp'
import { BsArrowRightShort } from 'react-icons/bs'
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <div
            name='home'
            className=' h-screen w-full  bg-gradient-to-b from-gray-700 to-black p-10 ' >

            <div className=' max-w-screen-lg   mx-auto flex flex-col justify-center  items-center  h-full px-4 md:flex-row  mt-6'>
                <div className='flex flex-col justify-center h-full' >
                    <h2 className='text-4xl sm:text-5xl font-bold text-white   ' >
                        I'm a Front-End Developer
                    </h2>
                    <p className='text-gray-500 py-4 text-lg max-w-md' >
                    I have a small amount of expertise creating and designing software.
                        Currently, I enjoy working on web applications using tools like React, Taileind, Firebase, and Flutter.

                    </p>
                    <div>
                        <Link to="portfolio" smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-blue-600 to-cyan-400 ' >
                            Portfolio
                            <span className=' group-hover:rotate-90 duration-300'>
                            <BsArrowRightShort size={20} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='pb'>
                 <img src={HeroImage} alt='my profile' className='rounded-2xl w-3/4  mx-auto md:w-3/6  ' />
                </div>
            </div>
        </div>
    )
}

export default Home

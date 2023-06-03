import React from 'react'
// import HeroImage from '../assets/heroImg.webp'
import HeroImage from '../assets/IMG.png'
import { BsArrowRightShort } from 'react-icons/bs'
import {Link} from 'react-scroll'

const Home = () => {
    return (
        <div
        // max-w-screen-lg   mx-auto flex flex-col justify-center  items-center  h-full px-4 md:flex-row  mt-6
            name='home'
            className=' h-screen w-full  bg-black p-10' >

            <div className='max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full px-4 md:flex-row mt-6 '>
                <div className='flex flex-col justify-center  md:h-full' >
                    <h2 className='text-4xl sm:text-5xl font-bold text-white   ' >
                        I'm a Front-End Developer
                    </h2>
                    {/* <p className='text-gray-500 py-4 text-lg max-w-md' >
                    I have a small amount of expertise creating and designing software.
                        Currently, I enjoy working on web applications using tools like React, Tailwind, Firebase, and Flutter.

                    </p> */}
                    <div>
                        <Link to="portfolio" smooth duration={500} className='group text-white border-2 w-fit px-6 py-3 my-2 flex items-center rounded-lg  bg-black  ' >
                            Portfolio
                            <span className=' group-hover:rotate-90 duration-300'>
                            <BsArrowRightShort size={20} />
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='md:pb-0 pb-8 relative '>
                 <img src={HeroImage} alt='my profile' className='rounded-2xl  w-8/9 mx-auto md:w-4/6 ' />
                 </div>
            </div>
        </div>
    )
}

export default Home

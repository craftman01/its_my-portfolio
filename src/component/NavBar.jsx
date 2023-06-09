import React, { useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import {Link} from "react-scroll"
import Cm from "../assets/Group 1.png"

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const links = [
        {
            id: 1,
            link: "home"
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]
    return (
        <div className='flex flex-row justify-between items-center z-50  w-full h-16 px-4 text-white fixed bg-black' >

            <div className='flex justify-start items-center'>
                
                <a href='/its_my-portfolio'><img   src={Cm} alt='cm' className=' h-10 w-auto ' /></a>
                <a href='/its_my-portfolio' className=' text-4xl capitalize font-jockey ml-2' >
                    Suraj m rajeev
                </a>
            </div>

            <ul className='hidden md:flex'>

                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize font-jockey font-medium text-gray-200 hover:scale-105 duration-200 '>
                        <Link to={link} smooth duration={500}  > {link} </Link>
                    </li>
                ))}
            </ul>
            <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-200  md:hidden ' >
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>
            {nav && (

                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200   " >

                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className=' px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-105 duration-200 '
                        >
                            <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}  > {link} </Link>
                        </li>
                    ))}
                </ul>
            )}

        </div>
    )
}

export default NavBar

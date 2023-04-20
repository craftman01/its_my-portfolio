import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Social = () => {

    // const links = [
    //     {
    //         id: 1,
    //         child: (
    //             <>
    //             LinkedIn <FaLinkedin size={30} />
    //             </>
    //         ),
    //         href: 'https://linkedin.com',
    //         style:'rounded-bt-md'
    //      },
    //     {
    //         id: 2,
    //         child: (
    //             <>
    //             GitHub <FaGithub size={30} />
    //             </>
    //         ),
    //         href: 'https://github.com'
    //     },
    //     {
    //         id: 3,
    //         child: (
    //             <>
    //             Mail <HiOutlineMail size={30} />
    //             </>
    //         ),
    //         href: 'mailto:12go@gmail.com'
    //     },
    //     {
    //         id: 4,
    //         child: (
    //             <>
    //             Resume <BsFillPersonLinesFill size={30} />
    //             </>
    //         ),
    //         href: '/resume.pdf ',
    //          download: 'true',
    //          style:'rounded-br-md'

    //     },
    // ]

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
            <ul>
 

                <li  
                 className={ "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500"  }>
                    <a 
                       href='https://linkedin.com'
                       className='flex justify-between items-center w-full text-white ' 
                          
                       target='_blank'
                       rel="noreferrer"

                    >
                         LinkedIn <FaLinkedin size={30} />
                        
                    </a>
                </li>
                <li  
                 className={ "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500"  }>
                    <a 
                       href='https://linkedin.com'
                       className='flex justify-between items-center w-full text-white ' 
                          
                       target='_blank'
                       rel="noreferrer"

                    >
                         GitHub <FaGithub size={30} />
                        
                    </a>
                </li>
                <li  
                 className={ "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500"  }>
                    <a 
                       href='mailto:mrsuraj42@gmail.com '
                       className='flex justify-between items-center w-full text-white ' 
                          
                       target='_blank'
                       rel="noreferrer"

                    >
                         Mail <HiOutlineMail size={30} />
                        
                    </a>
                </li>
                <li  
                 className={ "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-gray-500"  }>
                    <a 
                       href='https://linkedin.com'
                       className='flex justify-between items-center w-full text-white ' 
                          
                       target='_blank'
                       rel="noreferrer"

                    >
                         Resume <BsFillPersonLinesFill size={30} />
                        
                    </a>
                </li>
 
            </ul>

        </div>
    )
}

export default Social

import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const Footer = () => {
    const recipient = 'mrsuraj42@gmail.com';
  

    return (
        <div className='md:hidden  py-2  '>
            <ul className='flex flex-row justify-between items-center  ' >
                <li  
                 className={ "flex justify-center items-center p-1 w-fit h-fit   rounded-full  bg-black"  }>
                    <a 
                       href='https://linkedin.com/in/suraj-rajeev-782b541a3'
                       className='flex justify-between items-center w-full text-white '  
                       target='_blank'
                       rel="noreferrer"
                    >                       
                         <FaLinkedin size={30} />
                    </a>
                </li>
                <li  
                 className={ "flex justify-center items-center p-1 w-fit h-fit rounded-full  bg-black"   }>
                    <a 
                       href='https://github.com/craftman01'
                       className='flex justify-between items-center w-full text-white ' 
                          
                       target='_blank'
                       rel="noreferrer"

                    >
                         <FaGithub size={30} />
                        
                    </a>
                </li>
                <li  
                 className={ "flex justify-center items-center p-1 w-fit h-fit rounded-full  bg-black"  }>
                    <a 
                       href={`mailto:${recipient}`}
                       className='flex justify-between items-center w-full text-white' 
                          
                       target='_blank'
                       rel="noreferrer"

                    >
                          <HiOutlineMail size={30} />
                        
                    </a>
                </li>
                <li  
                 className={ "flex justify-center items-center p-1 w-fit h-fit rounded-full  bg-black"   }>
                    <a 
                       href='/Craftman.pdf'
                       download="craftman"
                       className='flex justify-between items-center w-full text-white ' 
                          
                       target='_blank' 
                       rel="noreferrer"

                    >
                          <BsFillPersonLinesFill size={30} />
                        
                    </a>
                </li>
 
            </ul>
            <div className='text-white text-xs pt-2 text-center '>Copyright © 2023 CraftMan</div>

        </div>
    )
}

export default Footer

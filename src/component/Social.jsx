import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'


const Social = () => {

  

    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed '>
            <ul>
                <li  
                 className={ "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-black"  }>
                    <a 
                       href='https://linkedin.com/in/suraj-rajeev-782b541a3'
                       className='flex justify-between items-center w-full text-white '  
                       target='_blank'
                       rel="noreferrer"

                    >
                         LinkedIn <FaLinkedin size={30} />
                        
                    </a>
                </li>
                <li  
                 className={ "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-black"  }>
                    <a 
                       href='https://github.com/craftman01'
                       className='flex justify-between items-center w-full text-white ' 
                          
                       target='_blank'
                       rel="noreferrer"

                    >
                         GitHub <FaGithub size={30} />
                        
                    </a>
                </li>
                <li  
                 className={ "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-black"  }>
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
                 className={ "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300  bg-black"  }>
                    <a 
                       href='/Craftman.pdf'
                       download="craftman"
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

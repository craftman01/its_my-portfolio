import React from 'react'
import ASWAMEDHA from "../assets/Aswamedha.png"
import BRAHMA from "../assets/Brahma23.png"
import HACK from "../assets/Hackathon.png"
import GALLARY from "../assets/gallery.png"
 

const Portfolio = () => {
    const images = [
        {
            src:BRAHMA,
            name:"brahma",
            demoLink: "https://brahma23.live/",
            codeLink: "https://github.com/r0king/brahma.git"
        },
        {
            src:ASWAMEDHA,
            name:"aswamedha",
            demoLink: "https://ashwamedha.live/",
            codeLink: "https://github.com/r0king/ashwamedha-home-page.git"
        },
        {
            src:HACK,
            name:"hackathon",
            demoLink: "https://hackathon.adishankara.ac.in/",
            codeLink: "https://github.com/r0king/asiet-hackathon.git"
        },
        
    ]

    return (
        <div name="portfolio" className=' md:h-screen w-full  bg-black p-10   '
        >
             
            <div className='max-w-screen-lg px-4 mx-auto flex flex-col justify-center w-full h-full text-white' >
                <div className='py-8 md:py-6 text-center ' >
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                        Portfolio
                    </p>
                    <p className='py-6 md:py-2' >
                        Check my Works
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 gap-8  px- md:px-12 sm:px-0 ' >
                   

                   {images.map((image, index) => (

                    <div key={index} className=' shadow-md shadow-gray-600 duration-200 hover:scale-105 rounded-lg  ' >
                        <img                      
                        className='  rounded-md  w-full '
                        src={image.src} 
                        alt={image.name} />

                        <div className='flex items-center justify-between  '>
                            <button className=' w-1/2 font-bold px-2 md:px-6 py-3 duration-200 hover:scale-105  '  >
                                <a href={image.demoLink}>Demo</a>
                            </button >
                            <button className='w-1/2 px-2 md:px-6 py-3 font-bold duration-200 hover:scale-105  '  >
                                <a href={image.codeLink}>Code</a>
                            </button >
                        </div>
                    </div>
                   ))}
                    

                <div className=' shadow-md shadow-gray-600 duration-200 hover:scale-105 font-bold rounded-lg  ' >
                        <img src={GALLARY} alt=' ' className='  rounded-md w-full ' />
                        <div className='flex items-center justify-center  '>
                            <a href='#/gallary' className='flex justify-center items-center w-4/5 px-2 md:px-6 py-3 duration-200 hover:scale-105  '  >
                                Gallary
                            </a >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio

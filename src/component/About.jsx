import React from 'react'

const About = () => {
  return (
    <div name="about"
    className=' w-full h-screen bg-black p-10 ' >
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full' >
        <div className=' text-center pb-8' >
            <p className=' text-4xl  font-bold inline border-b-4 border-gray-500  text-white'>
                About
            </p>
            <p className='text-xl pt-10  text-white' >
            I possess expertise in software creation and design. Currently, I find great joy in developing web applications using tools such as React, Tailwind, Firebase, and Figma. Additionally, I am an artist with a passion for creating pencil drawings, illustrations, and intricate miniature pencil carvings.
            </p>
            
        </div>
      </div>
    </div>
  )
}

export default About

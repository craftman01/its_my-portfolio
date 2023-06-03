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
I have  expertise creating and designing software.
                        Currently, I enjoy working on web applications using tools like React, Tailwind, Firebase, and Flutter.
                        <br/>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, debitis ipsa quasi optio ut culpa delectus quaerat nesciunt obcaecati ea libero quis, et tempore odit natus hic, neque laudantium vitae!
            </p>
            
        </div>
      </div>
    </div>
  )
}

export default About

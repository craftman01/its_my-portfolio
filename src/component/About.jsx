import React from 'react'

const About = () => {
  return (
    <div name="about"
    className=' w-full h-screen bg-gradient-to-b from-gray-800 to-black p-10 ' >
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center items-center w-full h-full' >
        <div className=' pb-8' >
            <p className=' text-4xl  font-bold inline border-b-4 border-gray-500 text-white'>
                About
            </p>
            <p className='text-xl   text-white' >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. At id sequi numquam corrupti consequuntur est odit alias cupiditate ea autem beatae sunt, maiores consectetur architecto, quisquam illo laborum doloremque eum aspernatur! Exercitationem soluta error possimus, fuga quibusdam architecto, et voluptatum nostrum quia accusantium quae qui totam, esse ab corporis tempore.
            </p>
            
        </div>
      </div>
    </div>
  )
}

export default About

import React from 'react'

const Contact = () => {
  return (
    <div name="contact" className=' h-screen w-full  bg-gradient-to-b from-gray-700 to-black p-10  ' >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full text-white ' >
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500 ' >
                Contact
            </p>
            <p className='py-6' >
                Subit the Form to get
            </p>

        </div>
        <div className='flex justify-center items-center ' >
            <form action='https://getform.io/f/61a63048-a850-4c09-b5e1-0b3bfa78ec8f' method="POST" className='flex flex-col w-full md:w-1/2' >
                <input type='text' name='name' placeholder='Enter your name' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '/>

                <input type='email' name='name' placeholder='Enter your email' className=' p-2 bg-transparent border-2 rounded-md my-4 text-white focus:outline-none '/>

                <textarea name='message' placeholder='Enter your message' rows='10' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none  '></textarea>

                <button className='text-white bg-gradient-to-b from-blue-400 to-cyan-300 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-500' >
                    Let's talk
                </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

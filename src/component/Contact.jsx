import React from 'react'
import Footer from './Footer'

const Contact = () => {
  return (
    <div name="contact" className=' h-screen w-full  bg-black p-10  ' >
      <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto   text-white ' >
        <div className='pb-4 md:pb-1 text-center'>
            <p className='text-4xl font-bold inline   ' >
                Contact
            </p>
            <p className='py-2 md:py-2' >
                Submit the form to Talk
            </p>

        </div>
        <div className='flex justify-center items-center ' >
            <form action='https://getform.io/f/61a63048-a850-4c09-b5e1-0b3bfa78ec8f' method="POST" className='flex flex-col w-full md:w-1/2' >
                <input type='text' name='name' placeholder='Enter your name' className=' p-2 bg-transparent border-2 rounded-md text-white focus:outline-none '/>

                <input type='email' name='name' placeholder='Enter your email' className=' p-2 bg-transparent border-2 rounded-md my-4 text-white focus:outline-none '/>

                <textarea name='message' placeholder='Enter your message' rows='10' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none  '></textarea>

                <button className='text-white bg-black px-3 py-3 my-3 mx-auto flex items-center rounded-lg border-2 hover:scale-105 duration-500' >
                    Let's talk
                </button>
            </form>
        </div>
        
      </div><Footer />
    </div>
  )
}

export default Contact

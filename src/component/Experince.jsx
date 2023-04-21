import React from 'react'
import HTML from '../assets/Html.png'
import CSS from '../assets/css.png'
import Firebase from '../assets/firebase.png'
import react from '../assets/react.png'
import FLUTTER from '../assets/flutter.png'

const Experince = () => {
    return (
        <div name="experience" 
        className='h-screen w-full  bg-gradient-to-b from-black to-gray-800 p-10 '>
            <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white   '>
                <div>
                    <p className=' text-4xl font-bold border-b-4 border-gray-600 p-2 inline ' >
                        Experience
                    </p>
                    <p className='py-6' >
                        These are the technology i have worked
                    </p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ' >
                    <div className='shadow-md hover:shadow-orange-600 hover:scale-105 duration-500  ' >
                        <img src={HTML} alt=' ' className='w-20 mx-auto' />
                        <p className='p-4'>
                            HTML
                        </p>
                    </div>
                    <div className='shadow-md hover:shadow-blue-600 hover:scale-105 duration-500  ' >
                        <img src={CSS} alt=' ' className='w-20 mx-auto' />
                        <p className='p-4'>
                            CSS
                        </p>
                    </div>
                    <div className='shadow-md hover:shadow-blue-300 hover:scale-105 duration-500  ' >
                        <img src={react} alt=' ' className='w-20 mx-auto' />
                        <p className='p-4'>
                            REACT
                        </p>
                    </div>
                    <div className='shadow-md hover:shadow-orange-400 hover:scale-105 duration-500  ' >
                        <img src={Firebase} alt=' ' className='w-20 mx-auto' />
                        <p className='p-4'>
                            FIREBASE
                        </p>
                    </div>
                    <div className='shadow-md hover:shadow-blue-700  hover:scale-105 duration-500  ' >
                        <img src={FLUTTER} alt=' ' className='w-20 mx-auto' />
                        <p className='p-4'>
                            FLUTTER
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experince

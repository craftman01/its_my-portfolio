import React from 'react'
import Home from '../component/Home.jsx'
import About from '../component/About.jsx'
import Contact from '../component/Contact.jsx'
import Experince from '../component/Experince.jsx'
import Portfolio from '../component/Portfolio.jsx'
import Navbar from '../component/NavBar.jsx'

const Hero = () => {
  return (
    <div>
        <Navbar/>
        <Home/>
        <About/>
        <Portfolio/>
        <Experince/>
        <Contact/>

      
    </div>
  )
}

export default Hero

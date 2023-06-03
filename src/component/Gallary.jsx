import React from 'react'
// import React, { useState } from "react";
import P1 from "../assets/gallery.png";
import P2 from "../assets/gallery.png";
import P3 from "../assets/gallery.png";
import P4 from "../assets/gallery.png";
import P5 from "../assets/gallery.png";
import P6 from "../assets/gallery.png";
import w1 from "../assets/gallery.png";
import w2 from "../assets/gallery.png";
import w3 from "../assets/gallery.png";
import w4 from "../assets/gallery.png";
import RapBattle from "../assets/gallery.png";
import HipHopBattle from "../assets/gallery.png";
import SpotDance from "../assets/gallery.png";
import BandofBrahma from "../assets/gallery.png";
import Cm from "../assets/Group 1.png"

const Gallary = () => {
  const images = [
    {
      name: "DJ War",
      src: P1,
      reg: "500",
      venue: "Main Stage",
      time: "01-04-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/dj-war",
      category: "Cultural",
    },
    {
      name: "Fifa",
      src: P2,
      reg: "100",
      venue: "PL Lab",
      time: "30-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/fifa-versus2",
      category: "General",
    },
    {
      name: "Maze",
      src: P3,
      reg: "200/Team",
      venue: "S1 CSA & S1 CS(AI)",
      time: "30-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/maze",
      category: "General",
    },
    {
      name: "Spot Photography",
      src: P4,
      reg: "100",
      venue: "College Premise",
      time: "30-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/spot-photography1",
      category: "General",
    },
    {
      name: "Theme Show",
      src: P5,
      reg: "200",
      venue: "Main Stage",
      time: "30-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/theme-show",
      category: "Cultural",
    },
    {
      name: "Voice of Brahma",
      src: P6,
      reg: "200",
      venue: "Main Stage",
      time: "30-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/voice-of-brahma",
      category: "Cultural",
    },
    {
      name: "Spot Dance",
      src: SpotDance,
      reg: "200",
      venue: "Outdoor",
      time: "30-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/spot-dance",
      category: "Cultural",
    },
    {
      name: "Rap Battle",
      src: RapBattle,
      reg: "200",
      venue: "Mini Seminar Hall",
      time: "01-04-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/rap-battle2",
      category: "Cultural",
    },
    {
      name: "Band of Brahma",
      src: BandofBrahma,
      reg: "200",
      venue: "Main Stage",
      time: "31-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/band-of-brahma",
      category: "Cultural",
    },
    {
      name: "Hip Hop Battle",
      src: HipHopBattle,
      reg: "150",
      venue: "Auditorium",
      time: "01-04-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/hip-hop-hustle",
      category: "Cultural",
    },
    {
      name: "CNC Workshop",
      src: w2,
      reg: "400",
      venue: "CNC Lab",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Workshop",
    },
    {
      name: "3D Printing Workshop",
      src: w1,
      reg: "400",
      venue: "CCF Lab",
      time: "30-03-2023 10:00 AM",
      regLink: "https://www.yepdesk.com/3d-printing-workshop1",
      category: "Workshops",
    },
    {
      name: "IEEE Workshop",
      src: w3,
      reg: "100",
      venue: "Simulation Lab (Lab 7)",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Workshop",
    },
    {
      name: "IoT Workshop",
      src: w4,
      reg: "300",
      venue: "CCF Lab",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Workshop",
    },
    {
      name: "IoT Workshop",
      src: w4,
      reg: "300",
      venue: "CCF Lab",
      time: "30-03-2023 10:00 AM",
      regLink: "",
      category: "Workshop",
    },

  ];

  return (
    <>
    <div className='flex flex-row justify-between items-center z-10  w-full h-16 px-4 text-white fixed bg-black' >

<div className='flex justify-start items-center'>
    
    <a href='/'><img   src={Cm} alt='cm' className=' h-10 w-auto ' /></a>
    <a href='/' className=' text-4xl capitalize font-jockey ml-2' >
        Suraj m rajeev
    </a>
</div>
</div>
    <div name="gallary" className="h-auto w-full  bg-black p-10 ">


      
      <div className=" flex flex-col p-4 justify-center items-center " >
      <div className='pb-8 md:pb-1  text-center'>
            <p className='text-white text-4xl font-bold inline   ' >
                Gallery
            </p>
            </div>

        <div className="mt-20 grid max-w-screen-xl grid-cols-1 gap-4 mx-3 md:mx-auto my-5 md:gap-y-20 justify-items-center md:grid-cols-3">
          {images.map((image, index) => (
            <div key={index} className="max-w-sm">
              <div className="flex flex-col justify-center text-primary">
                  <img
                    className="rounded-[1em] md:w-full aspect-[1/1] hover:scale-105"
                    src={image.src}
                    alt={image.name}
                  />
                <div className="pl-2 mt-4 text-lg font-bold font-poppins text-white">
                  {image.name}
                </div>
                <div className="flex flex-row pl-2 mt-4 font-semibold">
                  <div className=" font-poppins text-white">
                  </div>
                  <div className="ml-6 font-poppins text-white">
                    {image.time}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};


export default Gallary

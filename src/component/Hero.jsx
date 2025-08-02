import React from 'react'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-[url('./assets/Homepage.jpg')] text-white">
      <div className=" z-0 absolute inset-0 bg-black bg-opacity-70"></div>
    <section className="relative z-10 text-white flex flex-col items-center justify-center h-full">
        <div className="text-center w-[60%]">
          <h1 className="lg:text-6xl font-bold leading-snug text-3xl ">
            Icma fund raises capital and finds your perfect investors
          </h1>
          
          <div className="mt-10 space-x-3 flex items-center justify-center">
            <Link to="/contact" smooth={true} duration={500}>
              <button className="px-10 lg:py-4 py-2 bg-purple-600 hover:text-purple-600 hover:bg-white font-semibold">
              Get in Touch
            </button>
            </Link>
            
            <Link to="/aboutus" smooth={true} duration={500}>
            <button className="ring-1 px-10 lg:py-4 py-2 font-semibold hover:text-purple-600 hover:bg-white">
              About Us
            </button>
            </Link>
          </div>
        </div>
      </section>
      </section>
  )
}

export default Hero;
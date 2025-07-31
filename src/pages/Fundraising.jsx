import React from 'react'
import Herosection from '../component/Herosection'
import FundraisingSec from '../component/FundraisingSec'
import Footer from '../component/Footer'
import StatsCom from '../component/StatsCom'
import { Link } from 'react-router-dom'
import Bottom from '../component/bottom'

const Fundraising = () => {
  return (
   <>
    <Herosection/>
    <section className="relative h-[60vh] bg-cover bg-center bg-[url('https://fundmystartup.vc/wp-content/uploads/2023/03/venture_15.jpg')] text-white">
        <div className=" z-0 absolute inset-0 bg-black bg-opacity-70"></div>
        <h1>
          <span className=" absolute inset-0 flex justify-center items-center lg:text-5xl text-3xl font-bold  text-white">FUNDRAISING </span>
        </h1>
    </section>
    <section>
      <div className='flex flex-col items-center justify-center bg-[#22272a] px-4   
        bg-opacity-90 z-10 space-y-10 pt-3 pb-3'>
        <p className='text-white text-center'>
          Businesses need capital to grow, but fundraising takes up a lot of your time! Outsourcing investor search and outreach streamlines the process, allowing entrepreneurs to concentrate and managing core business operations, our capital-raising partner requests a plan selection and a refundable deposit, which serves as retainer for registration and introductions during the agreement.
        </p>
      </div>

      <div className='flex flex-col items-center justify-center bg-[#22272a] px-4   
        bg-opacity-90 z-10 space-y-3 pt-3 pb-3'>
        <h1 className='text-2xl font-semibold  text-white'>Field of Work</h1>
        <p className='text-white text-center'>Our service is available in Norway, Denmark, Sweden, Iceland, Ireland, Scotland, Isle of Man, Guernsey, Jersey, Malta, Cyprus, Germany, Austria, Liechtenstein, Luxembourg, Andorra, Finland, and Monaco.</p>
        <Link to="contact" smooth={true} duration={500}>
        <button className="ring-1 px-10 lg:py-5 py-2  font-semibold hover:text-purple-600 hover:bg-white">
              Learn more
        </button>
        </Link>
        
      </div>
    </section>
    <FundraisingSec/>
    <StatsCom/>
    <Footer/>
    <Bottom/>
   </>


  )
}

export default Fundraising
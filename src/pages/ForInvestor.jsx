import React from 'react'
import Herosection from '../component/Herosection';

import Bottom from '../component/bottom';
import { Link } from 'react-router-dom';

const ForInvestor = () => {
  return (
    <>
    <Herosection/>
     <section className="relative h-[60vh] bg-cover bg-center bg-[url('https://fundmystartup.vc/wp-content/uploads/2023/06/image-1.png')] text-white">
        <div className=" z-0 absolute inset-0 bg-black bg-opacity-70"></div>
        <h1>
          <span className=" absolute inset-0 flex justify-center items-center lg:text-6xl text-3xl font-bold  text-white">INVESTORS </span>
        </h1>
    </section>
    <section className=" flex flex-col items-center  px-10 py-20 space-y-10 bg-[#22272a] text-white">
      <h1 className='text-3xl font-bold text-center'>Join Our Network of Esteemed Investors</h1>
      <div className='flex flex-col items-center space-y-3'>
        <h2 className='text-2xl font-semibold text-center '>Become a member for free</h2>
        <h2 className='text-2xl font-semibold text-center'>More than 200 investors have gone before you</h2>
        <p className='text-center'>Join our network of esteemed investors and become a member for free. At icma, we understand the value of investment opportunities that meet investor criteria. We take on projects with entrepreneurs that typically have a track record and where the project has shown traction and is in a scaling phase. Exceptionally we sometimes show pre-revenue opportunities in case we find the credentials strong enough for investors. The investment size ranges typically from €100k till €10M.</p>
        <p className='text-center'>If you're an investor seeking deals that have met our criteria of investment, which include founders team experience, track record, traction and potential for growth or scalability. We offer a video consultation, a meeting with a funding expert and/or finance professional to give you advice, investment details and more insights. </p>
      </div>
      <div className='flex flex-col items-center space-y-3'>
        <h2 className='text-2xl font-semibold'>Our Promise</h2>
        <p className='text-center'>As a member of our investor network, you can expect:</p>

        <h2 className='text-xl text-center font-semibold'>Curated and tailored Opportunities:</h2>
        <p className='text-center'>We will bring you investment opportunities that fit your preferred industry, phase of business, and geographical area. These opportunities are always curated and checked by our team.</p>
        
        <h2 className='text-xl font-semibold'>Efficient Matchmaking:</h2>
        <p className='text-center'>Benefit from our 25+ years of experience in fundraising and investment banking.</p>

        <h2 className='text-2xl font-semibold'>Trustworthy Interactions:</h2>
        <p className='text-center'>Our team stands for transparency, honesty, and integrity. We work tirelessly to create meaningful relationships between investors and entrepreneurs.</p>
      </div>
      <Link to="/contact" smooth={true} duration={500}>
        <button className="ring-1 px-10 lg:py-5 py-2  font-semibold hover:text-purple-600 hover:bg-white">
              Become Member
        </button>
        </Link>
    </section>
    
    <Bottom/>
    </>
  )
}

export default ForInvestor;
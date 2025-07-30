import React from 'react'
import Herosection from '../component/Herosection';
import Footer from '../component/Footer';

const ForInvestor = () => {
  return (
    <>
    <Herosection/>
     <section className="relative h-[70vh] bg-cover bg-center bg-[url('https://fundmystartup.vc/wp-content/uploads/2023/06/image-1.png')] text-white">
        <div className=" z-0 absolute inset-0 bg-black bg-opacity-70"></div>
        <h1>
          <span className=" absolute flex items-center justify-center lg:left-[40%] left-[30%] bottom-10 text-5xl font-bold  text-white">INVESTORS </span>
        </h1>
    </section>
    <section className=" flex flex-col items-center  px-10 py-20 space-y-10 bg-[#22272a] text-white">
      <h1 className='text-3xl font-bold text-center'>Join Our Network of Esteemed Investors</h1>
      <div className='flex flex-col items-center space-y-3'>
        <h2 className='text-2xl font-semibold'>Become a member for free</h2>
        <h2 className='text-2xl font-semibold text-center'>More than 200 investors have gone before you</h2>
        <p className='text-center'>At ICMA, we understand the value of investment opportunities that meet investor criteria. We take on projects with entrepreneurs that typically have a track record and where the project has shown traction and is in a scaling phase. Exceptionally we sometimes show pre-revenue opportunities in case we find the credentials strong enough for investors. The investment size ranges typically from EUR 1 million up to series A.</p>
        <p className='text-center'>If you're an investor seeking deals that have met our criteria of investment, which include founders team experience, track record, traction and potential for growth or scalability. </p>
      </div>
      <div className='flex flex-col items-center space-y-3'>
        <h2 className='text-2xl font-semibold'>Our Promise</h2>
        <p>As a member of our investor network, you can expect:</p>

        <h2 className='text-xl font-semibold'>Curated and tailored Opportunities:</h2>
        <p className='text-center'>We will bring you investment opportunities that fit your preferred industry, phase of business, and geographical area. These opportunities are always curated and checked by our team.</p>
        
        <h2 className='text-xl font-semibold'>Efficient Matchmaking:</h2>
        <p className='text-center'>Benefit from our 25+ years of experience in fundraising and investment banking.</p>

        <h2 className='text-2xl font-semibold'>Trustworthy Interactions:</h2>
        <p className='text-center'>Our team stands for transparency, honesty, and integrity. We work tirelessly to create meaningful relationships between investors and startups.</p>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default ForInvestor;
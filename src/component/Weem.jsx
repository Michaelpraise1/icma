import React from 'react'
import { Link } from 'react-router-dom';

const Weem = () => {
  return (
    <article className="lg:flex  w-fit lg:h-[70vh] h-fit bg-[url('https://i.pinimg.com/1200x/93/02/63/9302633c00bb6ab7c73efcd48290c363.jpg')] bg-cover bg-center relative   " >
      
      <div className=' flex flex-col items-center justify-center bg-[#ededed] px-4  space-y-3 '>
        <h1 className='text-2xl text-[#666] font-semibold '>We know investors</h1>
        <p className='text-[#666] text-center pb-6 '>Besides our warm inner circle of 200+ investors, we have built-up a database of 120,000+ network of Venture Capitalists, Angel Investors, Investment Banks, and Family Offices we can reach out to. Our attitude is to turn every stone to find the right investor. We know what investors think, what they like and how they behave.</p>
        
      </div>

      
      <div className='flex flex-col items-center justify-center bg-[#22272a] px-4   
        bg-opacity-90 z-10 space-y-3 pt-3 pb-3'>
        <h1 className='text-2xl font-semibold  text-white'>Fundraising</h1>
        <p className='text-white text-center'>Businesses need capital to grow, but fundraising takes up a lot of your time! Outsourcing investor search and outreach streamlines the process, allowing entrepreneurs to concentrate and managing core business operations, our capital-raising partner requests a plan selection and a refundable deposit, which serves as retainer for registration and introductions during the agreement.</p>
        <Link to="/fundraising" smooth={true} duration={500}>
        <button className="ring-1 px-10 lg:py-5 py-2  font-semibold hover:text-purple-600 hover:bg-white">
              Learn More
        </button>
        </Link>
        
      </div>

      <div className='flex flex-col items-center justify-center bg-[#22272a] px-4  bg-opacity-90 z-10 space-y-3 pb-4 pt-3'>
        <h1 className='text-2xl font-semibold  text-white'>M&A</h1>
        <p className='text-white text-center'>VC investments often require follow-up financing or an exit. For example, selling to a strategic partner can stimulate growth or create synergies, icma help identify investors and facilitate transactions, with services such as developing a communications strategy, approaching, and managing the process. Our managing partner requests a plan selection and a refundable deposit, which serves as retainer for registration and introductions during the agreement.</p>
        <Link to="/ma">
        <button className="ring-1 px-10 lg:py-5 py-2  font-semibold hover:text-purple-600 hover:bg-white">
              Learn More
        </button>
        </Link>
        
      </div>
      
      
    </article>
  )
}

export default Weem;

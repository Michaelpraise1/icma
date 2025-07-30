import React from 'react'
import { Link } from 'react-router-dom';

const Weem = () => {
  return (
    <article className="lg:flex  w-fit lg:h-[70vh] h-fit bg-[url('https://i.pinimg.com/1200x/93/02/63/9302633c00bb6ab7c73efcd48290c363.jpg')] bg-cover bg-center relative   " >
      
      <div className=' flex flex-col items-center justify-center bg-[#ededed] px-4  space-y-3 '>
        <h1 className='text-2xl text-[#666] font-semibold font-serif'>We know investors</h1>
        <p className='text-[#666] text-center pb-6 '>Besides our warm investor network of 2000+ investors we have built-up a database of 120,000+ network of Venture Capitalists, Angel Investors and Family Offices and can reach out to them. Our attitude is to turn every stone to find the right investor.  We know what investors think, what they like and how they behave.</p>
        
      </div>

      
      <div className='flex flex-col items-center justify-center bg-[#22272a] px-4   
        bg-opacity-90 z-10 space-y-3 pt-3 pb-3'>
        <h1 className='text-2xl font-semibold font-serif text-white'>Fundraising</h1>
        <p className='text-white text-center'>Start-ups require capital for growth, but fundraising consumes CEOs’ time. Outsourcing investor search and outreach streamlines the process, allowing founders to concentrate on pitching opportunities to potential investors and managing core business operations.</p>
        <Link to="contact" smooth={true} duration={500}>
        <button className="ring-1 px-10 lg:py-5 py-2  font-semibold hover:text-purple-600 hover:bg-white">
              Learn more
        </button>
        </Link>
        
      </div>

      <div className='flex flex-col items-center justify-center bg-[#22272a] px-4  bg-opacity-90 z-10 space-y-3 pb-4 pt-3'>
        <h1 className='text-2xl font-semibold font-serif text-white'>M&A</h1>
        <p className='text-white text-center'>VC investments often need follow-up financing or company exits. For start-ups, selling to a strategic partner can enable growth or create synergies. We assist by identifying investors and facilitating transactions, with services like: preparing a strategic investor list, designing communication strategy, reaching out and managing the sale process overall.</p>
        <Link to="contact">
        <button className="ring-1 px-10 lg:py-5 py-2  font-semibold hover:text-purple-600 hover:bg-white">
              Learn more
        </button>
        </Link>
        
      </div>
      
      
    </article>
  )
}

export default Weem;

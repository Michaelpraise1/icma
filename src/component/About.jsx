import React from 'react'

const About = () => {
  return (
    <>
       <section className="relative h-[80vh] bg-cover bg-center bg-[url('./assets/Aboutus.jpeg')] text-white">
        <div className=" z-0 absolute inset-0 bg-black bg-opacity-70"></div>
        <h1>
          <span className=" absolute flex items-center justify-center inset-0  lg:text-6xl text-3xl font-bold  text-white">ABOUT US </span>
        </h1>
    </section>

    <section className=" flex flex-col items-center  px-10 py-20 space-y-10 bg-[#22272a] text-white">
      <p>
        The international capital management alliance fundación is a team of fundraising specialists built on the long-standing credibility of our members and consists of highly experienced professionals with significant collective investments across a wide range of sectors. We prioritise transparency, which is why we provide our privacy policy upon request. We take pride in guiding our clients towards the most responsible and beneficial funding solutions. 
      </p>

      <p>
        Our commitment to clear communication throughout the entire funding process sets us apart. That's why, after the pitch book is finalized, we operate exclusively on a "no introduction - no cost" basis. Based in Spain, The Netherlands, and (partnership) Switzerland, we understand the needs of inventors, investors, and entrepreneurs.
      </p>

      <p>
        Members play a critical role; providing funds, strategies, insights, and practical wisdom for wherever you are on your funding roadmap. They are big thinkers, risk takers, long term players, great connectors, game changers and change makers.
      </p>
      <p>
        Our client onboarding acceptance is based on an evaluation of several factors to ensure a successful partnership. Key considerations include your past and present financial performance, the potential and strength of your current and future business prospects, your specific area of work and the extent to which it aligns with our expertise and experience, and the stability of your leadership. This assessment helps us determine if we are the best fit to support your company's needs and goals.
      </p>
    </section>
    </>
   
    
  )
}

export default About
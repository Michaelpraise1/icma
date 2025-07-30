import React from 'react';
import MergerProps from './MergerProps';


const Merger = () => {
  return (
    <>
    
      <section id="fundraising" className="px-10 py-20 bg-[#22272a] ">
        
        {/* <h1 className="text-5xl mb-8 font-bold">Services</h1> */}

        <div>
        <MergerProps
          id= "01"
          title="Communication Strategy"
          desc="Together, we will work extensively to craft a sequence of communication to approach strategic investors. We will develop the key messaging necessary to spark the interest for strategic investors and highlight the story of the company. From there we will assist to develop an Pitchbook that conveys the story in the most effective way. Our philosophy is that the responsibility lies with the management team of the company to develop this story and that we act as a sounding board providing feedback on how strategic investors will perceive the story."
          image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-01.jpg"
          />

          <hr className="mb-10" />
          <MergerProps
            id="02"
            title="Preparation Pitchbook"
            desc="Working closely with you, we determine the criteria for a strategic investor, focusing on strategic fit, sector, location, and investment size. Using these criteria, we identify potential strategic investors."
            
          />
            <hr className="mb-10" />

          <MergerProps
            id="03"
            title="Strategic Investor Outreach"
            desc="After finalizing preparations and communication strategy, our partner initiate outreach to strategic investors. They coordinate approaches and set up strategic investor meetings, giving you the opportunity to share your story while potential strategic investors introduce themselves. Our role is to facilitate introductions and observe in the background. "
            
          />

          <hr className="mb-10" />

          <MergerProps
            id="04"
            title="Management and Coordination"
            desc="When a strategic investor expresses interest. Typically, the investor presents a preliminary offer or term sheet, conducts due diligence, and negotiates the final transaction terms, including valuation, structure, investment amounts, and warranties. A lawyer usually leads the negotiation and drafting of legal documentation to close the transaction."

          />

         

          
        </div>
      </section>
    </>
    
  )
}

export default Merger;
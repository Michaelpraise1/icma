import React from 'react';
import FundraisingProps from './FundraisingProps';


const FundraisingSec = () => {
  return (
    <>
    
      <section id="fundraising" className="px-10 py-20 bg-[#22272a] ">
       
        {/* <h1 className="text-5xl mb-8 font-bold">Services</h1> */}

        <div>
        <FundraisingProps
          id= "01"
          title="Consultation"
          desc="We offer video consultations, meetings with a funding expert and/or finance professional for advice. Free appointments with specialists who can provide you with more funding details and insights."
          image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-01.jpg"
          />

          <hr className="mb-10" />
          <FundraisingProps
            id="02"
            title="Strategy"
            desc="In collaboration with you, we create a communication sequence to engage investors, develop key messages to pique interest and emphasize the investment story. We also assist in crafting an effective Pitchbook. Our belief is that the founder/CEO should develop the story while we provide valuable feedback on investor perception."
            
          />
            <hr className="mb-10" />

          <FundraisingProps
            id="03"
            title="Pitchbook"
            desc="There are two main types of pitchbooks. There's the main pitchbook, which contains all the key characteristics of the company, and one that details a specific deal, such as an initial public offering (IPO) or a company's investment product. For an accredited investor, it includes information such as the company's financial strength and biographical information about the management team."
            
          />

          <hr className="mb-10" />

          <FundraisingProps
            id="04"
            title="Investor Outreach"
            desc="After finalizing preparations and communication strategy, we initiate the first video call with our Swiss partner, giving you the opportunity to share your story. Our role is to facilitate introductions and observe in the background."

          />

          <hr className="mb-10" />

          <FundraisingProps
            id="05"
            title="Management and Coordination"
            desc="When investors express interest, our partner coordinates further video calls with you. Investors typically conduct due diligence and negotiate transaction terms, including valuation, structure, investment amounts, warrants, options, and board participation. Our partner gives you valuable advice on these matters. In cases involving multiple investors, they help form a consortium to finalize the transaction."

          />

          
        </div>
      </section>
    </>
    
  )
}

export default FundraisingSec;
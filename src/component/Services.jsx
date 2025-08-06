import ServiceProps from "./ServiceProps";

const Services = () => {
  return (
    <section id="service" className=" lg:px-10 py-20 bg-[#22272a] ">
      
      {/* <h1 className="text-5xl mb-8 font-bold">Services</h1> */}

      <div>
      
        <ServiceProps
          id="01"
          title="What We Do"
          desc="We empower entrepreneurs to secure capital in the dynamic Venture Capital and Angel Investor landscape. Focused on raising early-stage, seed, and Series A funding, ranging from €100k till €10M. We help you navigate the funding terrain; we're proud to place you in the skillet and capable hands of our professional Swiss partner, with over 25 years of funding experience and a proven track record. Connected to valuable potential investors who align with your needs, and strategic partners who fuel your growth."
         
          image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-01.jpg"
        />
        <hr className="mb-10" />
        <ServiceProps
          id="02"
          title="Our Approach"
          desc="Choose icma fundación for our extensive network of investors seasoned expertise, efficient approach, and dedicated team. We arrange and guarantee introductory meetings with investors who match your profile!

          Investor Network
          We have a warm inner circle of 200+ investors and a 120,000+ database of Venture Capitalists, Angel Investors, Investment Banks, and Family Offices, as we tirelessly seek and reach out to the perfect investor match.

          Efficiency
          Let us manage the time-consuming investor search and outreach, so you can focus on your core business and on presenting your opportunity to potential investors.

          Expertise
          Benefit from 25 years of experience in matchmaking, lead generation, fundraising, M&A and Investment Banking.

          Team
          Harness our unique blend of legal, outreach, and fundraising expertise to fuel your success!"
          
        />
          <hr className="mb-10" />

         <ServiceProps
          id="03"
          title="Our Mission"
          desc="Our goal is to connect entrepreneurs that seeking funding with the perfect investors. We champion the vital pairing of capital and innovation, facilitating meaningful relationships between potential investors and ambitious entrepreneurs. As a team rooted in honesty and integrity, we stand for transparent, genuine interactions and long-term partnerships."
          
          
        />

        
      </div>
    </section>
  );
};

export default Services;

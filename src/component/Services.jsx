import ServiceProps from "./ServiceProps";

const Services = () => {
  return (
    <section id="service" className=" lg:px-10 py-20 bg-[#22272a] ">
      
      {/* <h1 className="text-5xl mb-8 font-bold">Services</h1> */}

      <div>
      
        <ServiceProps
          id="01"
          title="What We Do"
          desc="At icma fund, we empower start-ups to secure equity capital in the dynamic Venture Capital and Angel Investor landscape. Focused on raising early-stage, seed and Series A funding, ranging from €150k till €15M. We help you navigate the funding terrain, connect with valuable investors globally that suit your start-up and find strategic partners to drive your growth."
         
          image="https://websitedemos.net/web-developer-04/wp-content/uploads/sites/1481/2023/07/service-01.jpg"
        />
        <hr className="mb-10" />
        <ServiceProps
          id="02"
          title="Our Approach"
          desc="Choose icma fund for our vast investor network, seasoned expertise, efficient approach, and dedicated team. We typically deliver 15-20 investor meetings with investors that match your start-up. 

          Investor Network:
          We have a warm investor network of 2000+ investors and a 120,000+ database of Venture Capitalists, Angel Investors, and Family Offices, as we tirelessly seek and reach out to the perfect investor match.

          Efficiency:
          Let us manage the time-consuming investor search and outreach, so you can focus on your core business and on presenting your opportunity to potential investors.

          Expertise:
          Benefit from 25+ years of experience in matchmaking, lead generation, fundraising, M&A and Investment Banking.

          Team:
          Harness our unique blend of IT, outreach, start-up and fundraising expertise to fuel your start-up’s success. ✨? "
          
        />
          <hr className="mb-10" />

         <ServiceProps
          id="03"
          title="Our Mission"
          desc="Our mission is to connect start-ups seeking funding with the perfect investors. We champion the vital pairing of capital and innovation, facilitating meaningful relationships between potential investors and ambitious entrepreneurs. As a team rooted in honesty and integrity, we stand for transparent, genuine interactions and long term partnerships."
          
          
        />

        
      </div>
    </section>
  );
};

export default Services;

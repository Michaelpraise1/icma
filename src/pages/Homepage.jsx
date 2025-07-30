
import Footer from "../component/Footer";
import Herosection from "../component/Herosection";
import Services from "../component/Services";
import Stat from "../component/Stat";

import { FloatButton } from "antd";
import Weem from "../component/Weem";
import Hero from "../component/Hero";

const Homepage = () => {
  return (
    <div className=" bg-white">
      <Herosection />
      <Hero/>
      {/* <About /> */}
      <Services />
      <Weem/>
      <Stat />
      {/* <Testimonials /> */}
      <Footer />
      <FloatButton.BackTop />
    </div>
  );
};

export default Homepage;

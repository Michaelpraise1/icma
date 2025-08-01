import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logooone from "../assets/Logooone.png";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link } from "react-router-dom";

const Herosection = () => {
  const [mobilenav, setMobileNav] = useState(false);

  const toggleMobileNav = () => {
    setMobileNav(!mobilenav);
  };
  return (
  <>
      <nav className="absolute top-0 z-20 lg:flex w-full justify-between items-center px-10 py-8 hidden bg-slate-50 ">
        <div>
          <img className="h-15 w-20"
            src={Logooone}
            alt="Logo"
          />
        </div>
        <div>
          <ul className="flex text-lg font-semibold gap-9 transition-all duration-200">
            <Link to="/" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-purple-600 ">Home</li>
            </Link>
            <Link to="/fundraising" smooth={true} duration={500}>
            <li className="text-gray-400 hover:text-purple-600 ">Fundraising</li>
            </Link>
            <Link to="/ma" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-purple-600 ">M&A</li>
            </Link>
            
            <Link to="/forinvestor" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-purple-600 ">For Investor</li>
            </Link>
            
            <Link to="/contact" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-purple-600 ">Contact</li>
            </Link>
          </ul>
        </div>
        {/* <div>
          <button className="ring-1 ring-white px-8 py-3 font-semibold hover:bg-white hover:text-blue-700 transition-all duration-200">
            Get in touch
          </button>
        </div> */}
      </nav>

      <nav className="absolute top-0 z-20 flex w-full justify-between items-center px-5 py-4 lg:selection:hidden lg:hidden">
        <img className="h-13 w-12"
          src={Logooone}
          alt="Logo"
        />

        <div
          onClick={toggleMobileNav}
          
          className="p-3 z-[600] border-2 border-white rounded-md text-xl text-white"
        >
          {mobilenav ? <RiCloseLargeFill /> : <RxHamburgerMenu />}
        </div>
      </nav>

      

      {mobilenav && (
        <sidebar className=" z-[500] top-16 absolute h-fit w-full lg:hidden flex flex-col bg-[#22272a]  ">
          <div>
            <ul className="flex flex-col text-lg font-semibold  transition-all duration-200">
              <Link to="/" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-white border-b-2 border-white px-6 py-2">
                Home
              </li>
              </Link>
              <Link to="/fundraising">
                <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
                Fundraising
              </li>
              </Link>
              <Link to="/ma">
              <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
                M&A
              </li>
              </Link>
              <Link to="/forinvestor" smooth={true} duration={500}>
              <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
                Investor
              </li>
              </Link>

              <Link to="/contact" smooth={true} duration={500}>
                <li className="text-gray-400 hover:text-white  border-b-2 border-white px-6 py-2">
               Contact
              </li>
              </Link>
              
            </ul>
          </div>
        </sidebar>
      )}
    </>
  );
};

export default Herosection;

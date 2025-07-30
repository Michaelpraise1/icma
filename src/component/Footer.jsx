

const Footer = () => {
  return (
    <footer className="  h-fit  pb-0">
      <div className=" bg-white w-full h-full lg:flex space-y-2 justify-center items-center px-10 py-10 border-b-[1px] border-white gap-20 ">
        <div className="space-y-1 text-black flex flex-col items-center ">
          {" "}
          <h1 className=" lg:text-2xl font-bold   ">
            Our Office
          </h1>
          <p>ICMA Fundación</p>
          <p>NIF: N0305013E</p>
          <p>Avda. Diagonal 449, 4º, </p>
          <p>08036 Barcelona, Spain</p>
          
        </div>
        <div className="flex text-black flex-col items-center ">
            {" "}
            <h1 className="font-semibold lg:text-2xl">Contact Us</h1>
            <a className="  underline" href="#">
              info@icma.fund
            </a>
            <a className="  underline" href="#">
              0034 6242 55 208
            </a>
          </div>

        {/* <div className="flex gap-5 text-2xl text-white ">
          <FaTwitter /> <FaFacebook /> <IoLogoDiscord /> <SiYoutube />
        </div> */}
      </div>

      <div className=" bg-[#22272a] container  text-center">
        <p>&copy; {new Date().getFullYear()} ICMA Fundación. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

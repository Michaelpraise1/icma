import React from 'react';
import CountUp from "react-countup";

const StatsCom = () => {
  return (
   <div className="lg:flex justify-center gap-2 px-10 bg-white  text-center">
        <div className="block p-6 bg-white rounded-lg shadow-md flex-col justify-center items-center gap-2 border-r-[1px] border-gray-400 py-5">
          <h1 className="text-6xl text-blue-700">
            <CountUp delay={2} end={120000} duration={2.75} />
          </h1>
          <p className="text-xl text-black">
            Investors in database
          </p>
        </div>
        <div className="block  p-6 bg-white rounded-lg shadow-md flex-col items-center gap-2 border-r-[1px] border-gray-400 ">
          <h1 className="text-6xl text-orange-600">
            {" "}
            <CountUp delay={2} end={200}  duration={2.75} />
          </h1>
          <p className="text-xl text-black">
            Inner circle investors
          </p>
        </div>
        <div className="block p-6 bg-white rounded-lg shadow-md flex-col items-center gap-2 border-r-[1px] border-gray-400 px-16">
          <h1 className="text-6xl text-green-700">
            {" "}
            <CountUp delay={2} end={19} duration={2.75} />
          </h1>
          <p className="text-xl text-black">Countries</p>
        </div>
        <div className="flex-col items-center gap-2 block p-6 bg-white rounded-lg shadow-md px-16">
          <h1 className="text-6xl text-yellow-600">
            {" "}
            <CountUp delay={2} end={25} duration={2.75} />
          </h1>
          <p className="text-xl text-black">Years of experience</p>
        </div>
      </div>

  )
}

export default StatsCom;
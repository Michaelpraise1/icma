import React from "react";

import StatsCom from "./StatsCom";


const Stat = () => {
  return (
    <section className=" py-10 bg-[url('https://fundmystartup.vc/wp-content/uploads/2023/03/venture_03.png')]  inset-0 z-20 ">
      
        <div className="flex flex-col items-center align-center justify-center pb-20">
        <h3 className="text-yellow-400 text-xl font-semibold inline-block border-b border-yellow-300 pb-1">Stats</h3>
        <h1 className="font-semibold text-2xl text-black ">Fund My Startup in numbers</h1>
      </div>
    <StatsCom/>
    </section>
  );
};

export default Stat;

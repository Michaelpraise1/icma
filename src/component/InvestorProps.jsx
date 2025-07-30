import React from 'react'

const InvestorProps = ({ id, title, desc }) => {
  return (
     <section className="lg:flex mb-10  items-center ">
      <div className="space-y-7 flex space-x-2 w-1/2 transition-all duration-500 ease-in opacity-100 hover:opacity-50 mb-3">
        <h1 className="text-white text-2xl">{id}</h1>
        <h2 className="lg:text-5xl  text-2xl  font-bold">{title}</h2>
        {/* <p className="text-lg">{desc}</p> */}

        
      </div>
      <div className="w-1/2">
        {/* <img src={image} /> */}
        <p className="text-lg whitespace-pre-line">{desc}</p>
      </div>
    </section>
  )
}

export default InvestorProps;
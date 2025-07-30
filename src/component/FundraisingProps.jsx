import React from 'react'

const FundraisingProps = ({ id, title, desc }) => {
  return (
     <section className="lg:flex mb-10 flex flex-col justify-center  lg:items-start lg:gap-10 gap-5 space-x-6 lg:flex-row">
      <div className="space-y-7 flex space-x-2 w-1/2 transition-all duration-500 ease-in opacity-100 hover:opacity-50 mb-3">
        <h1 className="text-white text-2xl">{id}</h1>
        <h2 className="lg:text-5xl  text-2xl  font-bold">{title}</h2>
        {/* <p className="text-lg">{desc}</p> */}

        
      </div>
      <div className="lg:w-1/2 space-x-3 items-center">
        {/* <img src={image} /> */}
        <p className="text-lg whitespace-pre-line">{desc}</p>
      </div>
    </section>
  )
}

export default FundraisingProps;
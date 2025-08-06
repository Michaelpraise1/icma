import "./App.css";
import React from "react";
// import Contact from "./pages/Contact";
// import Fundraising from "./pages/Fundraising";
// import Homepage from "./pages/Homepage";
import { Routes, Route } from 'react-router-dom';
// import MA from "./pages/MA";
// import Aboutus from "./pages/Aboutus";
// import ForInvestor from "./pages/ForInvestor";
import { Suspense } from "react";
const Homepage = React.lazy(() => import('./pages/Homepage'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Fundraising = React.lazy(() => import('./pages/Fundraising'));
const MA = React.lazy(() => import('./pages/MA'));
const Aboutus = React.lazy(() => import('./pages/Aboutus'));
const ForInvestor = React.lazy(() => import('./pages/ForInvestor'));



function App() {
  return (
    <div>
    
      <Routes>
        
          <Route path="/" element={
           <Suspense fallback={<div className="flex items-center justify-center h-full w-full "><div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div></div>}>
              <Homepage />
              </Suspense>} /> 
        
        
        <Route path="/contact" element={
           <Suspense fallback={<div className="flex items-center justify-center h-full w-full "><div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div></div>}>
        <Contact />
        </Suspense>} />
        
        
        <Route path="/fundraising" element={
          <Suspense fallback={<div className="flex items-center justify-center h-full w-full "><div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div></div>}>
            <Fundraising />
            </Suspense>} />
        
        
        <Route path="/ma" element={
          <Suspense fallback={<div className="flex items-center justify-center h-full w-full "><div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div></div>}>
            <MA />
             </Suspense>} />
       
        
        <Route path="/aboutus" element={
          <Suspense fallback={<div className="flex items-center justify-center h-full w-full "><div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div></div>}>
            <Aboutus /> 
            </Suspense>} />
        
        
          <Route path="/forinvestor" element={
            <Suspense fallback={<div className="flex items-center justify-center h-full w-full "><div className="w-10 h-10 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div></div>}>
              <ForInvestor />
              </Suspense>} />
        
        
       
      
      </Routes>
    
     
    </div>

  


    
  );
}

export default App;

import "./App.css";
import Contact from "./pages/Contact";
import Fundraising from "./pages/Fundraising";
import Homepage from "./pages/Homepage";
import { Routes, Route } from 'react-router-dom';
import MA from "./pages/MA";
import Aboutus from "./pages/Aboutus";
import ForInvestor from "./pages/ForInvestor";


function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fundraising" element={<Fundraising />} />
        <Route path="/ma" element={<MA />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/forinvestor" element={<ForInvestor />} />
      </Routes>
     
    </div>

  


    
  );
}

export default App;

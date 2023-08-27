import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Services from "./components/Services";
import Projects from "./Components/Projects";
import Contact from "./components/Contact";
import Banner from "./components/Banner";
import Home from "./Components/Home";
import About from "./components/About";

function App() {
  return (
    <div className="bg-gradient-to-b from-coolDark to-gray-900 bg-no-repeat bg-cover overflow-clip w-screen h-screen ">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Banner" element={<Banner />} />
          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

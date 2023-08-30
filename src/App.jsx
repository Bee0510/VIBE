import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Banner from "./Components/Banner";
import Home from "./Components/Home";
import About from "./Components/About";
import Header from "./Components/Header";

function App() {
  return (
    <div className="bg-gradient-to-b from-coolDark to-gray-900 bg-no-repeat bg-cover overflow-clip w-screen h-screen overflow-y-scroll">
      <Router>
        <Navbar />
        <Header />
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

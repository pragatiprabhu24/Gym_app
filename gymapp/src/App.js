import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Training from './pages/Training';
import Nutrition from './pages/nutrition'
import About from './pages/About'
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
function App() {
  return (
    <BrowserRouter>
    
      <div className="app">
    
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/training" element={<Training />} />
            <Route path="/nutrition" element={<Nutrition />} />
            <Route path="/about" element={<About />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
       
      </div>
    
    </BrowserRouter>
  );
}

export default App;

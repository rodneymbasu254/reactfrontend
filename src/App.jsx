import { HelmetProvider } from "react-helmet-async";

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Hero from "./Components/Hero/Hero";
import Divisions from "./Components/Divisions/Divisions";
import Projects from "./Components/Projects/Projects";
import Blog from "./Components/Blog/Blog";
import Inquiries from "./Components/Contact/Inquiries";

function App() {
  return (
    <HelmetProvider>
    <div className="bg-gray-50 text-gray-900 font-sans">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Divisions />
              <Projects />
              <Blog />
              <Inquiries />
            </>
          }
        />
        <Route path="/divisions" element={<Divisions />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Inquiries />} />
      </Routes>
      <Footer />
    </div>
    </HelmetProvider>  
  );
}

export default App;




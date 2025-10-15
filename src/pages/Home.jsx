import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Projects from "../Components/Projects/Projects";
import Blog from "../Components/Blog/Blog";
import Divisions from "../Components/Divisions/Divisions";
import Contact from "../Components/Contact/Inquiries";

function Home() {
  return (
    <div className="space-y-20">
      <Hero />
      <About />
      <Projects />
      <Divisions />
      <Blog />
      <Contact />
    </div>
  );
}

export default Home;


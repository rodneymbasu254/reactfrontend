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
      {/* ✅ SEO + Metadata */}
      <Helmet>
        <title>Wiz@rd Group Holdings | Innovating the Future</title>
        <meta
          name="description"
          content="Wiz@rd Group Holdings is a technology company advancing innovations in gaming, AI, cloud, and app development. Explore our divisions, projects, and insights shaping the digital world."
        />
        <meta
          name="keywords"
          content="Wiz@rd Group Holdings, Wzrd Group, Technology Company, Gaming, AI, Cloud, App Development, Kenya Tech, Software Company"
        />
        <meta name="author" content="Wiz@rd Group Holdings" />

        {/* ✅ Open Graph (for Facebook, LinkedIn) */}
        <meta property="og:title" content="Wiz@rd Group Holdings" />
        <meta
          property="og:description"
          content="Discover how Wiz@rd Group Holdings is building the future of technology through innovation and collaboration."
        />
        <meta property="og:image" content="/banner.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://wizrdgroupholdings.vercel.app/" />

        {/* ✅ Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Wiz@rd Group Holdings" />
        <meta
          name="twitter:description"
          content="Wiz@rd Group Holdings — Innovating the future in gaming, AI, app, and cloud development."
        />
        <meta name="twitter:image" content="/banner.png" />

        {/* ✅ Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Helmet>

      {/* ✅ Actual Page Sections */}
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

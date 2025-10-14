import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      {/* background video (put hero-bg.mp4 into /public) */}
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/assets/nextzone.mp4" type="video/mp4" />
      </video>

      {/* gradient overlay */}
      <div className="absolute inset-0 hero-overlay"></div>

      {/* content */}
      <motion.div
        className="relative z-10 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
      >
        <motion.h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight max-w-4xl mx-auto" 
                   initial={{ scale: 0.98 }} animate={{ scale: 1 }} transition={{ duration: 0.8 }}>
          We build boundary-pushing technology in AI, Games, Cloud & Creative Media.
        </motion.h1>

        <motion.p className="mt-6 text-gray-200 max-w-2xl mx-auto text-lg sm:text-xl" initial={{ opacity: 0.85 }}>
          Wiz@rd Group Holdings is a multi-sector innovation ecosystem uniting Artificial Intelligence, Gaming, Fintech, Research, AR/VR, and Creative Media. Through its subsidiaries, the Group builds technology that empowers education, creativity, and digital transformation across Africa.
        </motion.p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/projects" className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-wzrdPurple hover:bg-indigo-600 text-white font-semibold shadow-lg">
            Explore Projects
          </Link>
          <Link to="/divisions" className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-black transition text-white">
            Our Divisions
          </Link>
        </div>

        {/* small trust row */}
        <div className="mt-8 flex items-center justify-center gap-6 text-sm text-gray-300">
          <div></div>
          <div className="w-px h-4 bg-white/10" />
          <div></div> 
        </div>
      </motion.div>

      {/* subtle animated shapes (decorative) */}
      <motion.div className="absolute -right-32 -top-32 w-80 h-80 rounded-full bg-wzrdPurple/10 blur-3xl" animate={{ rotate: 360 }} transition={{ duration: 30, loop: Infinity }} />
    </section>
  );
}

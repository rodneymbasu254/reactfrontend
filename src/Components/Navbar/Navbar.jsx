import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/projects", label: "Projects" },
    { to: "/blog", label: "Blog" },
    { to: "/divisions", label: "Divisions" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled ? "nav-glass shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-wzrdIndigo to-wzrdPurple flex items-center justify-center shadow-lg">
            <span className="text-white font-bold"><img src="/assets/Logo.png"></img></span>
          </div>
          <span className="text-white font-semibold tracking-wide">Wiz@rd Group Holdings</span>
        </Link>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({isActive}) => `text-sm font-medium transition ${isActive ? 'text-wzrdPurple' : 'text-gray-200 hover:text-white'}`}
            >
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" className="ml-4 inline-flex items-center px-4 py-2 rounded-full bg-wzrdPurple text-white text-sm font-semibold shadow hover:brightness-95 transition">
            Contact
          </Link>
        </nav>

        {/* mobile toggle */}
        <div className="md:hidden">
          <button aria-label="menu" onClick={() => setOpen(!open)} className="p-2 rounded-md text-white hover:bg-white/5 transition">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d={open ? "M6 18L18 6M6 6l12 12" : "M3 12h18M3 6h18M3 18h18"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path></svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <div className={`${open ? 'max-h-60' : 'max-h-0'} md:hidden overflow-hidden transition-max-height duration-300`}>
        <div className="px-6 pb-6 space-y-3">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className="block text-white font-medium py-2">
              {l.label}
            </NavLink>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="block text-center mt-2 px-4 py-2 rounded-full bg-wzrdPurple text-white font-semibold">Contact</Link>
        </div>
      </div>
    </header>
  );
}

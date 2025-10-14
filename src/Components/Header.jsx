// src/components/Header.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const location = useLocation();
  const [isLanding, setIsLanding] = useState(false);

  useEffect(() => {
    // If we're on the home page ('/'), set landing mode
    setIsLanding(location.pathname === "/");
  }, [location]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isLanding
          ? "nav-glass text-white" // transparent glass on landing
          : "bg-[#0f172a]/95 text-white shadow-lg border-b border-white/10" // solid dark on other pages
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <img src="/assets/Logo.png"></img>
        <Link to="/" className="flex items-center space-x-2 font-bold text-lg">
          <span className="text-indigo-400">Wiz@rd</span>
          <span>Group Holdings</span>
        </Link>

        {/* Links */}
        <div className="flex space-x-6 text-sm font-medium">
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/divisions">Divisions</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </nav>
    </header>
  );
}

function NavLink({ to, children }) {
  const location = useLocation();
  const active = location.pathname === to;
  return (
    <Link
      to={to}
      className={`transition-colors duration-200 ${
        active
          ? "text-indigo-400 font-semibold"
          : "text-gray-300 hover:text-indigo-300"
      }`}
    >
      {children}
    </Link>
  );
}

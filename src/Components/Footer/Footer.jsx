import React from "react";

export default function Footer(){
  return (
    <footer className="bg-black text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <div className="text-xl font-semibold text-white">Wiz@rd Group Holdings</div>
          <p className="mt-2 text-sm text-gray-400">INNOVATING AFRICA'S FUTURE IN GAMING, AI , TECH & IMPACT.</p>
        </div>

        <div className="text-sm text-gray-400">
          <div className="font-medium text-white mb-2">Company</div>
          <a className="block py-1 hover:text-white" href="/projects">Projects</a>
          <a className="block py-1 hover:text-white" href="/blog">Blog</a>
          <a className="block py-1 hover:text-white" href="/divisions">Divisions</a>
        </div>

        <div className="text-sm text-gray-400">
          <div className="font-medium text-white mb-2">Contact</div>
          <div className="py-1">wizardgroup254@gmail.com</div>
          <div className="py-1">+254 707858428</div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Wiz@rd Group Holdings — All rights reserved.
      </div>
    </footer>
  );
}

// components/Header.tsx
"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-[#060010] shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-cyan-100">
          RG
        </h1>
        <nav className="space-x-6">
          <Link
            href="#home"
            scroll={true}
            className="text-cyan-100 font-bold"
          >
            Home
          </Link>
          <Link
            href="#about"
            scroll={true}
            className="text-cyan-100 font-bold"
          >
            About
          </Link>
          <Link
            href="#skills"
            scroll={true}
            className="text-cyan-100 font-bold"
          >
            Skills
          </Link>
          <Link
            href="#contact"
            scroll={true}
            className="text-cyan-100 font-bold"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

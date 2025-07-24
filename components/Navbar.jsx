import React from "react";
import { useState } from "react";
import { SunMoonIcon, MenuIcon } from "lucide-react";
import Link from "next/link";

const Navbar = ({ darkMode, setDarkMode, textColor }) => {

  const [menuOpen, setMenuOpen] = useState(false);
  const setMenuClose = () => setMenuOpen(false);

  const toggleBorder = darkMode ? "border-gray-300" : "border-gray-500";

  return (
    <nav
      className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between ${textColor} z-[100] backdrop-blur-lg bg-opacity-80 border-b ${toggleBorder} ${
        darkMode ? "bg-gray-900/70" : "bg-white/70"
      }`}
    >
      <a href="/">
        <p className="w-28 cursor-pointer mr-14 rounded-md">
          <span className="text-4xl font-bold">Blog.com</span>
        </p>
      </a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center justify-between gap-6 lg:gap-12 rounded-full px-12 py-3 bg-transparent shadow-xl">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/login">Login</Link>
        </li>
        <button onClick={() => setDarkMode(!darkMode)} className="ml-4">
          <SunMoonIcon className="w-8 h-8 cursor-pointer" />
        </button>
      </ul>

      {/* Mobile Menu Button & SunMoonIcon */}
      <div className="flex md:hidden items-center gap-2">
        <button onClick={() => setDarkMode(!darkMode)} className="mr-2">
          <SunMoonIcon className="w-8 h-8 cursor-pointer" />
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="focus:outline-none px-2 py-1 rounded-md shadow-xl"
        >
          <MenuIcon className="w-7 h-7" />
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className={`absolute top-full right-5 mt-2 w-40 rounded-lg shadow-lg flex flex-col md:hidden z-50 animate-fade-in backdrop-blur-3xl bg-opacity-80 ${toggleBorder} ${darkMode ? "bg-gray-800" : "bg-gray-200"}`}>
          <Link href="/" className="px-6 py-3 hover:scale-105 rounded-t-lg" onClick={setMenuClose}>
            Home
          </Link>
          <Link href="/about" className="px-6 py-3 hover:scale-105" onClick={setMenuClose}>
            About
          </Link>
          <Link href="/login" className="px-6 py-3 hover:scale-105 rounded-b-lg" onClick={setMenuClose}>
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

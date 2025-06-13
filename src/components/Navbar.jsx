"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <NavLink to="/" className="text-xl font-bold">
            Campus Club Finder
          </NavLink>

          {/* Mobile menu button */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /> : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex space-x-8">
            <NavLink to="/" className={({ isActive }) => (isActive ? "font-bold border-b-2 border-white" : "hover:text-blue-200")} end>
              Home
            </NavLink>
            <NavLink to="/clubs" className={({ isActive }) => (isActive ? "font-bold border-b-2 border-white" : "hover:text-blue-200")}>
              Clubs
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "font-bold border-b-2 border-white" : "hover:text-blue-200")}>
              About
            </NavLink>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <NavLink to="/" className={({ isActive }) => (isActive ? "block py-2 px-4 bg-blue-700 rounded" : "block py-2 px-4 hover:bg-blue-700 rounded")} onClick={() => setIsMenuOpen(false)} end>
              Home
            </NavLink>
            <NavLink to="/clubs" className={({ isActive }) => (isActive ? "block py-2 px-4 bg-blue-700 rounded" : "block py-2 px-4 hover:bg-blue-700 rounded")} onClick={() => setIsMenuOpen(false)}>
              Clubs
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => (isActive ? "block py-2 px-4 bg-blue-700 rounded" : "block py-2 px-4 hover:bg-blue-700 rounded")} onClick={() => setIsMenuOpen(false)}>
              About
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}

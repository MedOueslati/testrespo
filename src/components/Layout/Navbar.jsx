import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from "../assets/images/duologo.png"; // Import logo image

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="relative">
        {/* Main Navbar Container */}
        <div className="container pt-6 mx-auto">
          <div className="flex justify-between items-center h-16">
            {/* Logo on the left */}
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="w-[10.5rem] h-[3.5rem] md:w-[12rem] md:h-[4rem] sm:w-[8rem] sm:h-[2.5rem] lg:w-[14rem] lg:h-[5rem]" src={logo} alt="Logo" />
              </Link>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-[3rem] h-[4rem]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>

            {/* Links on the right for Desktop */}
            <div className="hidden md:flex space-x-4">
              <Link to="/" className="text-white">Accueil</Link>
              <Link to="/services" className="text-white">Nos Services</Link>
              <Link to="/realisation" className="text-white">Nos Réalisation</Link>
              <Link to="/contact" className="text-white">Demander Devis</Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu (Sidenav) */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isMenuOpen ? "block" : "hidden"}`}
          onClick={toggleMenu}
        >
          <div
            className={`fixed left-0 top-0 h-full bg-gray-900 w-64 transform ${
              isMenuOpen ? "translate-x-0" : "-translate-x-full"
            } transition-transform duration-300`}
          >
            <div className="flex justify-end p-4">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <ul className="text-white p-4 space-y-4">
              <li>
                <Link to="/" className="block">Accueil</Link>
              </li>
              <li>
                <Link to="/services" className="block">Nos Services</Link>
              </li>
              <li>
                <Link to="/realisation" className="block">Nos Réalisation</Link>
              </li>
              <li>
                <Link to="/contact" className="block">Demander Devis</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Footer = () => {
  return (
    <footer className="bg-black">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-white sm:text-center underline">
        
            Duo Agency   © 2025{" "}
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white sm:mt-0">
          <li>
            <Link to="/" className="hover:underline me-4 md:me-6">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:underline me-4 md:me-6">
              Nos Services
            </Link>
          </li>
          <li>
            <Link to="/nospack" className="hover:underline me-4 md:me-6">
              Nos Packs
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
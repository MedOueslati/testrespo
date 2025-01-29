import React from "react";
import { Link } from "react-router-dom"; // If you want to link to other pages

const Header = () => {
  return (
    <>
      <section className="text-white body-font">
        <div className="container mx-auto h-[100vh] flex items-center justify-start sm:justify-start">
          <div className="w-full sm:text-left text-center">
            <h1 className="text-4xl sm:text-5xl font-semibold leading-tight ">
              NOUS SOMMES L’AGENCE WEB <br /> QUI BOOSTE VOTRE SUCCÈS.
            </h1>
            <Link to="/contact">
              <button
                className="text-black bg-white font-medium border-0 py-3 px-6 focus:outline-none rounded-lg text-lg mt-6 sm:mt-12 mx-auto sm:mx-0 flex items-center space-x-2 transition-all duration-300 hover:bg-gray-300"
                aria-label="Contactez Nous"
              >
                <span className="text-2xl hover:text-blue-600">→</span>
                <span>Contactez Nous</span>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;

import React, { useState } from "react";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMenu = () => {
    setIsMobile(!isMobile);
  };

  const handleLinkClick = () => {
    setIsMobile(false);
  };

  return (
    <nav className="bg-gray-700 text-white fixed w-full top-0 left-0 shadow-md z-10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Kowsik's Portfolio</h1>
        <div className="sm:hidden">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <ul
          className={`sm:flex ${
            isMobile
              ? "absolute top-16 left-0 w-full bg-gray-700 py-4 flex-col space-y-4"
              : "hidden"
          } sm:flex-row sm:space-x-8 space-y-4 sm:space-y-0 items-center transition-all duration-300`}
        >
          <li>
            <a
              href="#home"
              className="hover:text-blue-500 block text-center"
              onClick={handleLinkClick}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-blue-500 block text-center"
              onClick={handleLinkClick}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="hover:text-blue-500 block text-center"
              onClick={handleLinkClick}
            >
              Technologies
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-blue-500 block text-center"
              onClick={handleLinkClick}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#certifications"
              className="hover:text-blue-500 block text-center"
              onClick={handleLinkClick}
            >
              Certifications
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({ logo, features, buttonText, buttonLink, categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
        >
          <img src="images/favicon.jpg" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="font-bold">Cameroon HealthConnect</span>
        </Link>

        {/* Primary Navbar items */}
        <div className="hidden md:flex items-center space-x-4">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="py-5 px-3 text-gray-700 hover:text-gray-900"
            >
              {feature.name}
            </Link>
          ))}

          {/* Dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="py-5 px-3 text-gray-700 hover:text-gray-900 flex items-center"
            >
              {categories.name}
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full mt-2 bg-white shadow-lg rounded-md">
                {categories.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Secondary Navbar items */}
        <Link
          to={buttonLink}
          className="hidden md:block py-2 px-3 bg-blue-500 text-white rounded hover:bg-blue-400 transition duration-300"
        >
          {buttonText}
        </Link>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="mobile-menu-button">
            {isOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          {features.map((feature, index) => (
            <Link
              key={index}
              to={feature.link}
              className="block py-2 px-4 text-sm hover:bg-gray-200"
            >
              {feature.name}
            </Link>
          ))}
          <div className="block py-2 px-4 text-sm hover:bg-gray-200">
            <button onClick={toggleDropdown} className="w-full text-left">
              {categories.name}
            </button>
            {isDropdownOpen && (
              <div className="mt-2 bg-white shadow-lg rounded-md">
                {categories.items.map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="block py-2 px-4 text-sm hover:bg-gray-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            to={buttonLink}
            className="block py-2 px-4 text-sm bg-blue-500 text-white hover:bg-blue-400 transition duration-300 rounded"
          >
            {buttonText}
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = ({ sections, companyName, companyLogo }) => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between mb-6">
          <div className="flex items-center mb-4 md:mb-0">
            <img
              src={companyLogo}
              alt={companyName}
              className="h-10 w-10 mr-2"
            />
            <span className="font-bold text-xl">{companyName}</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-gray-400">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-400">
              <FaLinkedin />
            </a>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full md:w-2/3 px-4">
            <div className="flex flex-wrap">
              {sections.map((section, index) => (
                <div key={index} className="w-full md:w-1/3 px-4">
                  <h4 className="font-bold text-lg mb-4">{section.title}</h4>
                  <ul>
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex} className="mb-2">
                        <a href={link.url} className="hover:underline">
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <h4 className="font-bold text-lg mb-4">Newsletter</h4>
            <form>
              <input
                type="email"
                className="w-full p-2 mb-4 text-gray-800 rounded"
                placeholder="Your email address"
              />
              <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-400 transition duration-300">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-6 text-center border-t border-gray-700 pt-4">
          <p>
            &copy; {new Date().getFullYear()} {companyName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer className=" border-t-2 footer bg-gray-900 footer-center  text-primary-content p-4">
        <aside>
          <img className='w-20 h-20' src={logo} alt="" />
          <p className="font-bold">
            MD Ahad Miah.
            <br />
           Front End Developer
          </p>
          <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
        </aside>
        <nav>
          <div className="grid grid-flow-col gap-4">
          <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl transition duration-200"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl transition duration-200"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white text-2xl transition duration-200"
              >
                <FaLinkedin />
              </a>
          </div>
        </nav>
      </footer>
    );
};

export default Footer;
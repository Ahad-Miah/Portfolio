import React from 'react';
import logo from '../../assets/logo.png'
import { FaFacebook, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
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
            href="https://www.facebook.com/bappa.miah.98/"
            target="_blank"
            className="text-gray-400 hover:text-white text-2xl transition duration-200"
          >
            <FaFacebook />
          </a>
          <a
            target="_blank"
            href="https://github.com/Ahad-Miah"
            className="text-gray-400 hover:text-white text-2xl transition duration-200"
          >
            <FaGithub />
          </a>
          <a
            target="_blank"
            href="http://www.linkedin.com/in/md-ahad-miah"
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
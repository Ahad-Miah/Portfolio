import React from 'react';
import Drawer from '../Drawer/Drawer';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';
import cv from '../../assets/Black Modern Professional Resume.pdf'
const Navbar = () => {

  const links = <>
    <NavLink to='/'>
      <li className='font-semibold text-lg'><a>Home</a></li>
    </NavLink>
    <NavLink to='/projects'>
      <li className='font-semibold text-lg'><a>Projects</a></li>
    </NavLink>
    <NavLink to='/contact'>
      <li className='font-semibold text-lg'><a>Contacts</a></li>
    </NavLink>

  </>
  return (
    <div className="navbar bg-gray-900 *:text-white sticky z-10 top-0 md:px-9">
      <div className="navbar-start">
        <div className="dropdown">
          {/* drawer */}
          <Drawer links={links}></Drawer>
        </div>
        <div className='w-40 h-20'>
          <img className='w-full h-full object-cover' src={logo} alt="" />
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        <a href={cv} download className="btn  bg-[#7bff0081] hover:bg-blue-500 text-white py-2 px-4 rounded-lg transition duration-200">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Navbar;
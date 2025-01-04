import React from 'react';
import Drawer from '../Drawer/Drawer';
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

    const links=<>
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
        <div className="navbar bg-[#28282E] *:text-white">
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
            { links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;
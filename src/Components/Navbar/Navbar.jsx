import React from 'react';
import Drawer from '../Drawer/Drawer';
import logo from '../../assets/logo.png'

const Navbar = () => {

    const links=<>
     <li><a>Item 1</a></li>        
     <li><a>Item 2</a></li>
     <li><a>Item 3</a></li>
    </>
    return (
        <div className="navbar bg-base-100">
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
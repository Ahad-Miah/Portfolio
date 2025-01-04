import React from 'react';
import { RiMenu2Line } from "react-icons/ri";

const Drawer = ({links}) => {
    return (
        <div className="drawer lg:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer" className="btn btn-ghost">
                <RiMenu2Line className="h-6 w-6" />
            </label>
        </div>
        <div className="drawer-side z-20">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay bg-opacity-60 bg-black"></label>
            <ul className="menu bg-gray-700 min-h-full w-[70%] p-6 space-y-4 shadow-xl rounded-tr-lg rounded-br-lg">
                {/* Sidebar content here */}
               {links}
            </ul>
        </div>
    </div>
    );
};

export default Drawer;
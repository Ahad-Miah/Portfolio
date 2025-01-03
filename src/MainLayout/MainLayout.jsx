import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
           <Navbar></Navbar>
            This is main layout
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;
import React from 'react';
import { Outlet } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <h2>Navbar</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Navbar;
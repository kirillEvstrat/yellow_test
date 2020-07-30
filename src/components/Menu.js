import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div className='header-menu'>
            <div className='header-menu-item'>
            <NavLink to='/jogs'>JOGS</NavLink>
        </div>
            <div className='header-menu-item'>
                <NavLink to='/info'>INFO</NavLink>
            </div>
            <div className='header-menu-item'>
                <NavLink to='/contact'>CONTACT US</NavLink>
            </div>
        </div>
    );
};

export default Menu;
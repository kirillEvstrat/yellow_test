import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <div>
                <NavLink to='/jogs'>JOGS</NavLink>
            </div>
            <div>
                <NavLink to='/info'>INFO</NavLink>
            </div>
            <div>
                <NavLink to='/contact'>CONTACT US</NavLink>
            </div>
        </div>
    );
};

export default Menu;
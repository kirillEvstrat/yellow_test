import React from "react";
import headerImg from "../images/logo.svg";
import Menu from "./Menu";

const Header = () => {
    return (
        <div className='header-wr'>
            <div className='logo-wr'>
                <img className='header-logo' src={headerImg} alt="logo"/>
            </div>
            <div className="menu-wr">
                <Menu/>
            </div>

        </div>
    );
};

export default Header;
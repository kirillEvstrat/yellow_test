import React from "react";
import headerImg from "../images/logo.svg";
import Menu from "./Menu";

const Header = () => {
    return (
        <div className='header-wr'>
            <img className='header-logo' src={headerImg} alt="logo"/>
            <Menu/>
        </div>
    );
};

export default Header;
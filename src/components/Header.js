
import React from "react";
import headerImg from "../images/logo.svg";

const Header = () => {
    return (
        <div className='header-wr'>
            <img className='header-logo' src={headerImg} alt="logo"/>
        </div>
    );
};

export default Header;
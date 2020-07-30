import React from "react";
import headerImg from "../images/logo.svg";
import headerImgM from "../images/logo.png";
import Menu from "./Menu";
import Media from "react-media";
import MenuMobile from "./MenuMobile";
import {connect} from "react-redux";

const Header = (props) => {
    return (
        <div className='header-wr'>
            <div className='logo-wr'>
                <Media query="(max-width: 599px)" render={() =>
                    (
                        <img className='header-logo' src={headerImgM} alt="logo"/>
                    )}
                />
                <Media query="(min-width: 600px)" render={() =>
                    (
                        <img className='header-logo' src={headerImg} alt="logo"/>
                    )}
                />
            </div>
            {props.isAuth ? (
                <>
                    <div className="menu-wr">
                    <Media query="(min-width: 600px)" render={() =>
                        (
                            <Menu/>
                        )}
                    />
                    </div>
                    <Media query="(max-width: 599px)" render={() =>
                        (
                            <MenuMobile/>
                        )}
                    />
                </>
                ) : false }

        </div>
    );
};

const mstp = state => {
    return{
        isAuth: state.jog.isAuth,
    }
};

export default connect(mstp)(Header);
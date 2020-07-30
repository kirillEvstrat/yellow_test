import React from "react";
import {NavLink} from "react-router-dom";
import Menu from "../images/menu.png";
import close from "../images/close.png";
import logo from "../images/mobileMenulofo/logo.png";

class MenuMobile extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false
        }
    };

    openHandler = (e) => {
        this.setState( state => ({...state, isOpen: !state.isOpen}));
    };

    render() {
        return (
            !this.state.isOpen ?
                (
                    <img className='menu-open' src={Menu} alt="" onClick={e => this.openHandler(e)}/>
                ) :
                (
                <div className='mobile-menu-wr'>
                    <img className='menu-logo' src={logo} alt=""/>
                    <img className='menu-close' src={close} alt="" onClick={e => this.openHandler(e)}/>
                    <div className='mobile-menu-items'>
                        <div className='mobile-menu-item'>
                            <NavLink to='/jogs'>JOGS</NavLink>
                        </div>
                        <div className='mobile-menu-item'>
                            <NavLink to='/info'>INFO</NavLink>
                        </div>
                        <div className='mobile-menu-item'>
                            <NavLink to='/contact'>CONTACT US</NavLink>
                        </div>
                    </div>
                </div>
                )
        )
    };
}

export default MenuMobile;
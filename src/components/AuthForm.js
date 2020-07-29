import React from "react";
import Img from "../images/bear-face.svg";
import AuthButton from "./AuthButton";

const AuthForm = () => {
    return (
        <div className='form-wr'>
            <div className="form-auth">
                <img className='form-logo' src={Img} alt="logo"/>
                <AuthButton text='Let me in'/>
            </div>

        </div>
    );
};

export default AuthForm;
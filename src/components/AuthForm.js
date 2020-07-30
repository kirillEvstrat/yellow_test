import React from "react";
import Img from "../images/bear-face.svg";
import ImgMob from "../images/66E35473-EFF1-491D-8F3C-F575439AC462.png";
import AuthButton from "./AuthButton";
import Media from 'react-media';

const AuthForm = () => {
    return (
        <>
        <Media query="(min-width: 600px)" render={() => (
                <div className='form-wr'>
                    <div className="form-auth">
                        <img className='form-logo' src={Img} alt="logo"/>
                        <AuthButton text='Let me in'/>
                    </div>
                </div>
            )}
        />
        <Media query="(max-width: 599px)" render={() => (
                    <div className="">
                        <img className='form-logo-mobile' src={ImgMob} alt="logo"/>
                        <AuthButton text='Let me in'/>
                    </div>
            )}
        />
        </>
    );
};

export default AuthForm;
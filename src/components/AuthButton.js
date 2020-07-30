import React from "react";
import {connect} from 'react-redux';
import {auth} from "../redux/actions";

const AuthButton = (props) => {
    return <div className="auth-button" onClick={(e) => props.auth()}>{props.text}</div>;
};

const mdtp = {
    auth : auth
};
export default connect(null, mdtp)(AuthButton);
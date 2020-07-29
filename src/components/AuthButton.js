import React from "react";
import {connect} from 'react-redux';
import {auth} from "../redux/actions";

class AuthButton extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    };

    authHandler = (e) => {
        this.props.auth();
    };

    render() {
        return (
        <div className="auth-button" onClick={this.authHandler}>{this.props.text}</div>
        );
    };
}

const mdtp = {
    auth : auth
};
export default connect(null, mdtp)(AuthButton);
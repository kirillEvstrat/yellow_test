import {connect} from 'react-redux';
import {auth, getJogsByUser} from "../redux/actions";
import React from "react";

class JogsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    };

    componentDidMount() {
        console.log('mount');
        this.props.getJogsByUser(this.props.accessToken);

    }

    authHandler = (e) => {
        this.props.auth();
    };

    render() {
        console.log(this.props.jogList);
        return (
            this.props.jogList.map(jog => );
        );
    };
}

const mstp = state =>(
    {
        accessToken : state.jog.accessToken,
        jogList : state.jog.jogList,
    }
);

const mdtp = {
    getJogsByUser
};

export default connect(mstp, mdtp)(JogsList);
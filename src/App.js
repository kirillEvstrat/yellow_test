import React from 'react';
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import {connect} from "react-redux";
import JogsPage from "./components/JogsPage";

class App  extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };

    };

    render(){
        console.log(this.props);
      return  (
            <React.Fragment>
                <Header/>
                {this.props.isAuth === false ? <AuthForm/> : <JogsPage/>}

            </React.Fragment>
        );
    }
}
const mstp = state => (
    {
        isAuth : state.jog.isAuth,
        accessToken : state.jog.accessToken,
    }
);
export default connect(mstp)(App);


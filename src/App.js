import React from 'react';
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import {connect} from "react-redux";
import JogsPage from "./components/JogsPage";
import {BrowserRouter , Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import ContactPage from "./components/ContactPage";
import InfoPage from "./components/InfoPage";
import AddModal from "./components/AddModal";

class App  extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };

    };

    render(){
        console.log(this.props);
        return (
            <BrowserRouter>
                <Header/>
                {this.props.isAddModal ? <Redirect to="/add"/> : <Redirect to="/auth" />}
                {this.props.isAuth === false ? <Redirect to="/auth" /> : false}
                <Switch>

                    <Route exact path="/auth">
                        {this.props.isAuth? <Redirect to="/jogs" /> : <AuthForm/>}
                    </Route>
                    <Route exact path="/add">
                        <AddModal/>
                    </Route>
                    <Route path="/jogs">
                        <JogsPage/>
                    </Route>
                    <Route path="/info">
                        <InfoPage />
                    </Route>
                    <Route path="/contact">
                        <ContactPage />
                    </Route>
                </Switch>
            </BrowserRouter>
        );
    }
}
const mstp = state => (
    {
        isAuth : state.jog.isAuth,
        accessToken : state.jog.accessToken,
        isAddModal: state.jog.isAddModal,
    }
);
export default connect(mstp)(App);
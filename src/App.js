import React from 'react';
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import {connect} from "react-redux";
import JogsPage from "./components/JogsPage";
import {BrowserRouter , Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import ContactPage from "./components/ContactPage";
import InfoPage from "./components/InfoPage";

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
                <Switch>
                    <Route exact path="/">
                        {this.props.isAuth? <Redirect to="/jogs" /> : <AuthForm/>}
                    </Route>
                    <Route path="/jogs">
                        {this.props.isAuth === false ? <Redirect to="/" /> : <JogsPage/>}
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
    }
);
export default connect(mstp)(App);


// You can think of these components as "pages"
// in your app.

function Home() {
    return (
        <div>
            <h2>Home</h2>
        </div>
    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}
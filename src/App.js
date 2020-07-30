import React from 'react';
import Header from "./components/Header";
import AuthForm from "./components/AuthForm";
import {connect} from "react-redux";
import JogsPage from "./components/JogsPage";
import {BrowserRouter , Link, NavLink, Redirect, Route, Switch} from "react-router-dom";
import ContactPage from "./components/ContactPage";
import InfoPage from "./components/InfoPage";
import AddModal from "./components/AddModal";
import {autWithLocalStorage} from "./redux/actions";

class App  extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    };

    componentDidMount() {
        if(!this.props.isAuth && localStorage.getItem('accessToken')){
            this.props.autWithLocalStorage(localStorage.getItem('accessToken'));
        }
    }

    render(){
        console.log(this.props);
        return (
            <BrowserRouter>
                <Header/>
                {this.props.isAuth === false ? <Redirect to="/auth" /> : false}
                {this.props.isAddModal ? <Redirect to="/add"/> : <Redirect to="/auth" />}
                {this.props.isUpdateModal ? <Redirect to="/update"/> : <Redirect to="/auth" />}

                <Switch>
                    <Route exact path="/auth">
                        {this.props.isAuth? <Redirect to="/jogs" /> : <AuthForm/>}
                    </Route>
                    <Route path="/add">
                        <AddModal/>
                    </Route>
                    <Route path="/update">
                        {this.props.isUpdateModal ? <AddModal isUpdate={true} data={this.props.updateData[0]}/> : <Redirect to="/auth"/>}
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
        isAuth : state.app.isAuth,
        accessToken : state.app.accessToken,
        isAddModal: state.app.isAddModal,
        isUpdateModal: state.app.isUpdateModal,
        updateId : state.app.updateID,
        updateData : state.jog.jogList.filter(jog => jog.id === state.app.updateID)
    }
);

const mdtp = {
    autWithLocalStorage
};

export default connect(mstp, mdtp)(App);
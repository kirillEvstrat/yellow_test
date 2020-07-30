import {connect} from 'react-redux';
import {auth, getJogsByUser, openAddModal} from "../redux/actions";
import React from "react";
import JogInfo from "./JogInfo";
import addImg from '../images/add.svg';
import JogsFilter from "./JogsFilter";

class JogsList extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    };

    componentDidMount() {
       // console.log('mount');
        //this.props.getJogsByUser(this.props.accessToken);

    }

    addJogHandler = (e) => {
        this.props.openAddModal();
    };

    render() {
        console.log(this.props.jogList);
        return (
                <div>
                    <JogsFilter/>
                    <div className='jog-list-page'>
                        <ul>
                        {this.props.jogList.map(jog => <JogInfo id={jog.id} distance={jog.distance} time={jog.time} date = {jog.date} /> )}
                        </ul>
                    </div>
                    <div className='add-jog-wr'>
                        <img src={addImg} alt="add" onClick={this.addJogHandler}/>
                    </div>
                </div>

        )

    };
}

const mstp = state =>(
    {
        accessToken : state.jog.accessToken,
        jogList : state.jog.filterJogList,
    }
);

const mdtp = {
    getJogsByUser,
    openAddModal,
};

export default connect(mstp, mdtp)(JogsList);
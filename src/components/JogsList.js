import {connect} from 'react-redux';
import {getJogsByUser, openAddModal} from "../redux/actions";
import React from "react";
import JogInfo from "./JogInfo";
import addImg from '../images/add.svg';


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
        return (
            <div>
                <div className='jog-list-page'>
                    <ul>
                        {this.props.jogList.map(jog => <JogInfo key={jog.id} id={jog.id} distance={jog.distance} time={jog.time} date = {jog.date} /> )}
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
        jogList : state.jog.filterJogList,
    }
);

const mdtp = {
    openAddModal,
};

export default connect(mstp, mdtp)(JogsList);
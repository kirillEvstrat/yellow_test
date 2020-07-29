import React from "react";
import cancelImg from "../images/cancel.svg"
import {connect} from "react-redux";
import {addJog, closeAddModal} from "../redux/actions";

class AddModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            distance : "",
            time : "",
            date : "",
        }
    };

    onChangeHandler (event){
        event.persist();
        this.setState( prev=>({...prev, ...{
                [event.target.name] : event.target.value
            }}))
    };

    onSubmitHandler (e) {
        e.persist();
        this.props.addJog(this.props.accessToken, this.state);
    };

    render () {
        return (
        <div className='modal-add-jog-wr'>
            <div className="modal-add-jog">
                <img className='cancel' src={cancelImg} alt="cancel" onClick={(e) => this.props.closeAddModal()}/>
                <form className='form-add-jog' action="">
                    <div className="form-group">
                        <label htmlFor="distance">Distance</label>
                        <input name='distance' type="text" value={this.state.distance} onChange={(e) => this.onChangeHandler(e) }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input name="time" type="text" value={this.state.time} onChange={(e) => this.onChangeHandler(e) }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <input name="date" type="text" value={this.state.date} onChange={(e) => this.onChangeHandler(e) }/>
                    </div>

                    <div  className='save' onClick={(e) => this.onSubmitHandler(e)}>Save</div>
                </form>
            </div>

        </div>
        );
    }
}
const mstp = state =>{
    return {
        accessToken : state.jog.accessToken,
    }
};

const mdtp ={
    addJog,
    closeAddModal
};

export default  connect(mstp, mdtp)(AddModal);
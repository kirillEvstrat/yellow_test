import React from "react";
import cancelImg from "../images/cancel.svg"
import {connect} from "react-redux";
import {addJog, closeAddModal, updateJog} from "../redux/actions";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class AddModal extends React.Component {
    constructor(props){
        super(props);
        console.log(props);

        if(props.isUpdate){
            const date = new Date(props.data.date * 1000);
            this.state = {
                jog_id : props.data.id,
                user_id : props.data.user_id,
                distance : props.data.distance,
                time : props.data.time,
                date : date,
            }
        }
        else{
            this.state = {
                distance : "",
                time : "",
                date : new Date(),
            }
        }
    };

    onChangeHandler (event){
        event.persist();
        this.setState( prev=>({...prev, ...{
                [event.target.name] : event.target.value
            }}))
    };

    handleChangeTime = date => {
        this.setState( prev=>({...prev, ...{
                date : date
            }}));
    };

    onSubmitHandler (e) {
        e.persist();
        if(this.props.isUpdate){
            this.props.updateJog(this.props.accessToken, this.state);
        }
        else {
            this.props.addJog(this.props.accessToken, this.state);
        }
    };

    render () {
        return (
        <div className='modal-add-jog-wr'>
            <div className="modal-add-jog">
                <img className='cancel' src={cancelImg} alt="cancel" onClick={(e) => this.props.closeAddModal()}/>
                <form className='form-add-jog' action="">
                    <div className="form-group">
                        <label htmlFor="distance">Distance</label>
                        <input name='distance' type="number" value={this.state.distance} onChange={(e) => this.onChangeHandler(e) }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input name="time" type="number" value={this.state.time} onChange={(e) => this.onChangeHandler(e) }/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="date">Date</label>
                        <DatePicker name='date'
                            selected={this.state.date}
                            onChange={this.handleChangeTime}
                        />
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
        accessToken : state.app.accessToken,
    }
};

const mdtp ={
    addJog,
    updateJog,
    closeAddModal
};

export default  connect(mstp, mdtp)(AddModal);
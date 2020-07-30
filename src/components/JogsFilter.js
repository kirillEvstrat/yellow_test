import {connect} from 'react-redux';
import {auth, filterJogs, getJogsByUser, openAddModal} from "../redux/actions";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


class JogsFilter extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: this.props.start,
            finishDate: this.props.finish
        }
    };

    handleChangeStart = date => {
        this.props.filterJogs(
            {
                start: date,
                finish: this.props.finish
            }
        );

    };

    handleChangeFinish = date => {
       this.props.filterJogs(
            {
                start: this.props.start,
                finish: date
            }
        );
    };

    render() {
        console.log(this.props);
        return (
            <div className='jog-filter-wr'>
                <div className='jog-filter'>
                    <div className='start'>
                        <span className='title'>Date From</span>
                        <DatePicker
                            selected={this.props.start}
                            onChange={this.handleChangeStart}
                        />
                    </div>
                    <div className='finish'>
                        <span className='title'>Date To</span>
                        <DatePicker
                            selected={this.props.finish}
                            onChange={this.handleChangeFinish}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

const mstp = state =>(
    {
        start : state.jog.startFilter,
        finish : state.jog.finishFilter,
    }
);

const mdtp = {
    filterJogs
};

export default connect(mstp, mdtp)(JogsFilter);
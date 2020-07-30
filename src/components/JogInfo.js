import React from "react";
import img from "../images/icon.svg"
import {useDispatch} from "react-redux";
import {openUpdateModal} from "../redux/actions";
const JogInfo = (props) => {
    const dispatch = useDispatch();
    const speed = Math.round(props.distance / props.time);
    const date = new Date(props.date * 1000);
    const dateStr = date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear();
    //console.log(props.id);

    return (
        <li className='jog-wr' key={props.id} onClick={()=> dispatch(openUpdateModal(props.id))}>
            <div className='jog-img-wr'>
                <img src={img} alt=""/>
            </div>
            <div className='jog-info-wr'>
                <span className='gray' >{dateStr}</span>
                <p>speed: <span className='gray'>{speed}</span></p>
                <p>distance: <span className='gray'>{props.distance} km</span></p>
                <p>time: <span className='gray'>{props.time} min</span></p>
            </div>
        </li>
    );
};

export default JogInfo;
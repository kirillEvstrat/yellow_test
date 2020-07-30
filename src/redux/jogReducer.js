import {
    ADD_JOG,
    FILTER_JOGS,
    GET_JOG,
    UPDATE_JOG
} from "./types";

const initialState = {
    jogList : [],
    filterJogList : [],
    startFilter : new Date(),
    finishFilter : new Date(),
};

export const jogReducer = (state = initialState, action ) => {
    switch (action.type) {
        case GET_JOG :
            return {...state, jogList: action.payload, filterJogList: action.payload};

        case FILTER_JOGS :
            const dataStart =  Math.round((new Date(action.payload.start)).getTime() / 1000);
            const dataFinish =  Math.round((new Date(action.payload.finish)).getTime() / 1000);
            const filterJogList = state.jogList.slice().filter( jog => (
                    jog.date > dataStart && jog.date < dataFinish
                )
            );
            console.log(filterJogList);
            return {...state,
                filterJogList : filterJogList,
                startFilter: action.payload.start,
                finishFilter: action.payload.finish
            };

        case ADD_JOG :
            console.log(action.payload);
            let  date = new Date(action.payload.date);
            let seconds = date.getTime() / 1000;
            let newJogList = state.jogList.slice();
            let newFilterJogList = state.filterJogList.slice();
            let newItem = {
                date: seconds,
                distance: action.payload.distance,
                id: action.payload.id,
                time: action.payload.time,
                user_id: action.payload.user_id,
            };
            newJogList.push(newItem);
            newFilterJogList.push(newItem);
            console.dir(newJogList);
            return {...state, jogList : newJogList, filterJogList: newFilterJogList};

        case UPDATE_JOG :
            console.log(action.payload);
            let  dateUp = new Date(action.payload.date);
            let secondsUp = dateUp.getTime() / 1000;
            let newJogListUp = state.jogList.slice().filter(jog => jog.id !== action.payload.id);
            let newFilterJogListUp = state.filterJogList.slice().filter(jog => jog.id !== action.payload.id);
            console.log(newJogListUp);
            let newItemU ={
                date: secondsUp,
                distance: action.payload.distance,
                id: action.payload.id,
                time: action.payload.time,
                user_id: action.payload.user_id,
            };
            newJogListUp.push(newItemU);
            newFilterJogListUp.push(newItemU);
            console.dir(newJogListUp);
            return {...state, jogList : newJogListUp, filterJogList: newFilterJogListUp};

        default: return  state;
    }

};
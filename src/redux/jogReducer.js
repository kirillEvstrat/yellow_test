import {
    ADD_JOG,
    AUTH,
    CLOSE_ADD_MODAL,
    FILTER_JOGS,
    GET_JOG,
    OPEN_ADD_MODAL,
    OPEN_UPDATE_MODAL,
    UPDATE_JOG
} from "./types";

const initialState = {
    isAuth : false,
    accessToken : "",
    jogList : [],
    filterJogList : [],
    isAddModal : false,
    updateID : true,
    isUpdateModal: false,
    startFilter : new Date(),
    finishFilter : new Date(),
};

export const jogReducer = (state = initialState, action ) => {
        switch (action.type) {
            case AUTH :
                //console.log({...state, isAuth: true, accessToken: action.payload.response["access_token"]});
                return {...state, isAuth: true, accessToken: action.payload};

            case GET_JOG :
                return {...state, jogList: action.payload, filterJogList: action.payload};

            case OPEN_ADD_MODAL :
                return {...state, isAddModal: true };

            case OPEN_UPDATE_MODAL :
                console.log(action);
                return {...state, isUpdateModal: true, updateID: action.payload };

            case CLOSE_ADD_MODAL :
                return {...state, isAddModal: false, isUpdateModal: false};

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
                console.log(newJogList);
                newJogList.push({
                    date: seconds,
                    distance: action.payload.distance,
                    id: action.payload.id,
                    time: action.payload.time,
                    user_id: action.payload.user_id,
                });
                console.dir(newJogList);
                return {...state, jogList : newJogList};


            case UPDATE_JOG :
                console.log(action.payload);
                let  dateUp = new Date(action.payload.date);
                let secondsUp = dateUp.getTime() / 1000;
                let newJogListUp = state.jogList.slice().filter(jog => jog.id !== action.payload.id);
                console.log(newJogListUp);
                newJogListUp.push({
                    date: secondsUp,
                    distance: action.payload.distance,
                    id: action.payload.id,
                    time: action.payload.time,
                    user_id: action.payload.user_id,
                });
                console.dir(newJogListUp);
                return {...state, jogList : newJogListUp};

            default: return  state;
        }

};
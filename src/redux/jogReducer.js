import {ADD_JOG, AUTH, CLOSE_ADD_MODAL, FILTER_JOGS, GET_JOG, OPEN_ADD_MODAL} from "./types";

const initialState = {
    isAuth : false,
    accessToken : "",
    jogList : [],
    filterJogList : [],
    isAddModal : false,
    startFilter : new Date(),
    finishFilter : new Date(),
};

export const jogReducer = (state = initialState, action ) => {
        switch (action.type) {
            case AUTH :
                //console.log({...state, isAuth: true, accessToken: action.payload.response["access_token"]});
                return {...state, isAuth: true, accessToken: action.payload.response["access_token"]};

            case GET_JOG :
                return {...state, jogList: action.payload, filterJogList: action.payload};

            case OPEN_ADD_MODAL :
                return {...state, isAddModal: true };

            case CLOSE_ADD_MODAL :
                return {...state, isAddModal: false};

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
                const  date = new Date(action.payload.date);
                const seconds = date.getTime() / 1000;
                const newJogList = state.jogList.slice();
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

            default: return  state;
        }

};
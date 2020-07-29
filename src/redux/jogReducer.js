import {AUTH, GET_JOG} from "./types";

const initialState = {
    isAuth : false,
    accessToken : "",
    jogList : [],
};

export const jogReducer = (state = initialState, action ) => {
        switch (action.type) {
            case AUTH :
                //console.log({...state, isAuth: true, accessToken: action.payload.response["access_token"]});
                return {...state, isAuth: true, accessToken: action.payload.response["access_token"]};

            case GET_JOG :
                return {...state, jogList: action.payload};

            default: return  state;
        }

};
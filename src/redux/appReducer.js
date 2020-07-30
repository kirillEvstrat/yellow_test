import {
    AUTH,
    CLOSE_ADD_MODAL,
    OPEN_ADD_MODAL,
    OPEN_UPDATE_MODAL,
} from "./types";

const initialState = {
    isAuth : false,
    accessToken : "",
    isAddModal : false,
    isUpdateModal: false,
    updateID : true,
};

export const appReducer = (state = initialState, action ) => {
    switch (action.type) {
        case AUTH :
            return {...state, isAuth: true, accessToken: action.payload};

        case OPEN_ADD_MODAL :
            return {...state, isAddModal: true };

        case OPEN_UPDATE_MODAL :
            return {...state, isUpdateModal: true, updateID: action.payload };

        case CLOSE_ADD_MODAL :
            return {...state, isAddModal: false, isUpdateModal: false};

        default: return  state;
    }
};
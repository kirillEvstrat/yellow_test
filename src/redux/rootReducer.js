import {combineReducers} from "redux";
import {jogReducer} from "./jogReducer";

export const rootReducer = combineReducers({
    jog: jogReducer,
});
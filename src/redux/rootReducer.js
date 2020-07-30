import {combineReducers} from "redux";
import {jogReducer} from "./jogReducer";
import {appReducer} from "./appReducer";

export const rootReducer = combineReducers({
    app: appReducer,
    jog: jogReducer,
});
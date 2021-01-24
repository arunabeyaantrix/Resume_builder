import { combineReducers } from "redux";
import projectReducer from "./projects";
import addressReducer from "./address";

export default combineReducers({
    projectReducer:projectReducer,
    address : addressReducer,
})
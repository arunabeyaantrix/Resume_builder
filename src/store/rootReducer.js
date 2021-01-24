import { combineReducers } from "redux";
import projectReducer from "./projects";
import addressReducer from "./address";
import eduReducer from "./educational";

export default combineReducers({
    projectReducer:projectReducer,
    address : addressReducer,
    educational:eduReducer,
})
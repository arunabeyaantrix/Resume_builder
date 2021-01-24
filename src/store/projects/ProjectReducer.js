import {SAVE_PROJECT_DATA} from "./ProjectActionTypes";

const initialState = {
    getProductData:false,
    passFilter : {}
}

export default function projectReducer(state = initialState, action) {
    switch(action.type){
        case SAVE_PROJECT_DATA:
            return{
                ...state,
                getProductData:true,
                passFilter: action.passFilter,
            }
        default:
            return state;
    }
}
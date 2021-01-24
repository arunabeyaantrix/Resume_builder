import {SAVE_EDU_DATA} from "./eduActionTypes";

const initialState = {
    getEduData:false,
    passFilter : {}
}

export default function eduReducer(state = initialState, action) {
    switch(action.type){
        case SAVE_EDU_DATA:
            return{
                ...state,
                getEduData:true,
                passFilter: action.passFilter,
            }
        default:
            return state
    }
}
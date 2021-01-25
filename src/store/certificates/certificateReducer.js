import {SAVE_CERTIFICATE_DATA} from "./certificateActionTypes";

const initialState = {
    getCertificateData:false,
    passFilter : {}
}

export default function certificateReducer(state = initialState, action) {
    switch(action.type){
        case SAVE_CERTIFICATE_DATA:
            return{
                ...state,
                getCertificateData:true,
                passFilter: action.passFilter,
            }
        default:
            return state
    }
}
import {SAVE_ADDRESS_DATA} from "./AddressActionTypes";

const initialState = {
    getAddressData:false,
    passFilter : {}
}

export default function addressReducer(state = initialState, action) {
    switch(action.type){
        case SAVE_ADDRESS_DATA:
            return{
                ...state,
                getAddressData:true,
                passFilter: action.passFilter,
            }
        default:
            return state
    }
}
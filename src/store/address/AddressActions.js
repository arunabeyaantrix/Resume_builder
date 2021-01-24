import {SAVE_ADDRESS_DATA} from "./AddressActionTypes";

export function SaveAddressData(args) {

    return (dispatch) => {
        dispatch({
            type : SAVE_ADDRESS_DATA,
            passFilter: args,
        })
    }

}
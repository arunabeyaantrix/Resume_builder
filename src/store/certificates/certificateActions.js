import {SAVE_CERTIFICATE_DATA} from "./certificateActionTypes";

export function SaveCertificateData(args) {

    return (dispatch) => {
        dispatch({
            type : SAVE_CERTIFICATE_DATA,
            passFilter: args,
        })
    }

}
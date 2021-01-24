import {SAVE_EDU_DATA} from "./eduActionTypes";

export function SaveEduData(args) {

    return (dispatch) => {
        dispatch({
            type : SAVE_EDU_DATA,
            passFilter: args,
        })
    }

}
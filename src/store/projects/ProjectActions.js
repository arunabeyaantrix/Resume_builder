import {SAVE_PROJECT_DATA} from "./ProjectActionTypes";

export function SaveProjectData(args) {

    return (dispatch) => {
        dispatch({
            type : SAVE_PROJECT_DATA,
            passFilter: args,
        })
    }

}
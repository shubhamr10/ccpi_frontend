import {GET_ALL_INFORMATION} from "../types";

const initialState = {
    informations:[]
}

export default function informationReducer(state = initialState, action ) {
    const {type, payload} = action;
    switch (type){
        case GET_ALL_INFORMATION:
            return {
                ...state,
                informations: payload
            }
        default:
            return state;
    }
}
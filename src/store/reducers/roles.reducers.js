import {GETALLROLES} from "../types";

const initialState = {
    roles:[]
};

export default function rolesReducer(state = initialState, action ) {
    const { type, payload } = action;
    switch (type){
        case GETALLROLES:
            return {
                ...state,
                roles:payload
            }
        default:
            return state;
    }
}
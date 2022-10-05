import {GET_ALL_MESSAGE, GET_ALL_NAMESPACES, GET_ALL_ROOMS} from "../types";

const initialState = {
    namespaces:[],
    rooms:[],
    messages:[]
}

export default function chatroomsReducer(state = initialState, action ) {
    const {type, payload} = action;

    switch (type){
        case GET_ALL_NAMESPACES:
            return {
                ...state,
                namespaces: payload
            }
        case GET_ALL_ROOMS:
            return {
                ...state,
                rooms: payload
            }
        case GET_ALL_MESSAGE:
            return {
                ...state,
                messages: payload
            }
        default:
            return state;
    }
}
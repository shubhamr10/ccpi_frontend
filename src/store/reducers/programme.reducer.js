import {GET_ALL_PROGRAMMES, GET_ALL_SUBJECTS} from "../types";

const initialState = {
    programmes:[],
    subjects:[]
};

export default function programmesReducer(state = initialState, action ) {
    const {type, payload} = action;
    switch (type){
        case GET_ALL_PROGRAMMES:
            return {
                ...state,
                programmes:payload
            }
        case GET_ALL_SUBJECTS:
            return {
                ...state,
                subjects: payload
            }
        default:
            return state;
    }

}
import {GET_ALL_REGIONAL_CENTRES, GET_ALL_STUDY_CENTRES} from "../types";

const initialState = {
    regionalCentres:[],
    studyCentres:[]
};

export default function centresReducer(state = initialState, action ) {
    const {type, payload} = action;
    switch (type){
        case GET_ALL_REGIONAL_CENTRES:
            return {
                ...state,
                regionalCentres: payload
            };
        case GET_ALL_STUDY_CENTRES:
            return {
                ...state,
                studyCentres: payload
            }
        default:
            return state;
    }

}
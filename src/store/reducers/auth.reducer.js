import {LOGIN_FAILED, LOGIN_SUCCESS} from "../types";

const initialState = {
    token:localStorage.getItem("token"),
    isAuthenticated:false,
    loading:true,
    user:null,
};

export default function authReducer(state = initialState, action ) {
    const { type, payload } = action;
    switch (type){
        case LOGIN_SUCCESS:
            localStorage.setItem("token",payload);
            return {
                ...state,
                isAuthenticated: true,
                loading:false
            }
        case LOGIN_FAILED:
            localStorage.removeItem("token");
            return {
                ...state,
                token:null,
                isAuthenticated: false,
                loading:false,
                user:null
            }
        default:
            return state;

    }
}
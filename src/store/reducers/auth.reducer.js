import {GET_ALL_USERS, GET_ROLES, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT} from "../types";

const initialState = {
    token:localStorage.getItem("token"),
    isAuthenticated:false,
    loading:true,
    user:null,
    users:[],
    role:{}
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
        case LOGOUT:
            localStorage.removeItem("token");
            return {
                ...state,
                token:null,
                isAuthenticated: false,
                loading:false,
                user:null
            }
        case GET_ROLES:
            return {
                ...state,
                role:payload
            }
        case GET_ALL_USERS:
            return {
                ...state,
                users:payload
            }
        default:
            return state;

    }
}
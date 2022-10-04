import axios from "axios";
import {GET_ROLES_API, LOGIN_API} from "../apis";
import {GET_ROLES, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, USER} from "../types";
import {setAlert} from "./alert.action";
import jwtDecode from "jwt-decode";


export const login = (formData) => async dispatch => {
    try{
        let { data } = await axios.post(LOGIN_API, formData);

        if(data.success){
            dispatch({
                type:LOGIN_SUCCESS,
                payload:data.data
            });
            const decodedToken = jwtDecode(data.data);
            dispatch({
                type:USER,
                payload:decodedToken
            })
            dispatch(getMyRole())
            // dispatch()
        }
    } catch (e) {
        console.error("LOGIN API error",e);
        const { errors } = e.response.data;
        if(Array.isArray(errors)){
            errors.map(err => dispatch(setAlert(err.msg, "danger")));
        }
        dispatch({
            type:LOGIN_FAILED
        })
    }
}

export const logout = () => async dispatch => {
    try{
        dispatch({type:LOGOUT});
    } catch (e) {
        console.error("LOGIN API error",e);
        const { errors } = e.response.data;
        if(Array.isArray(errors)){
            errors.map(err => dispatch(setAlert(err.msg, "danger")));
        }
    }
}

export const getMyRole = () => async dispatch => {
    try{
        const decodedToken = jwtDecode(localStorage.token);
        let { data } = await axios.get(GET_ROLES_API+"/"+decodedToken.user.role);
        if(data.success){
            dispatch({
                type:GET_ROLES,
                payload:data.data
            });
        }
    } catch (e) {
        console.error("LOGIN API error",e);
        const { errors } = e.response.data;
        if(Array.isArray(errors)){
            errors.map(err => dispatch(setAlert(err.msg, "danger")));
        }
    }
}
import axios from "axios";
import {LOGIN_API} from "../apis";
import {LOGIN_FAILED, LOGIN_SUCCESS} from "../types";
import {setAlert} from "./alert.action";


export const login = (formData) => async dispatch => {
    try{
        let { data } = await axios.post(LOGIN_API, formData);
        if(data.token){
            dispatch({
                type:LOGIN_SUCCESS,
                payload:data
            });
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
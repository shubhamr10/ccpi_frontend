import axios from "axios";
import {setAlert} from "./alert.action";
import {GET_ROLES_API} from "../apis";
import {GETALLROLES} from "../types";

export const getAllRoles = () => async dispatch => {
    try {
        const { data } = await axios.get(GET_ROLES_API );
        if(data.success){
            dispatch({
                type:GETALLROLES,
                payload:data.data
            })
        }
    } catch (e) {
        console.error("LOGIN API error",e);
        const { errors } = e.response.data;
        if(Array.isArray(errors)){
            errors.map(err => dispatch(setAlert(err.msg, "danger")));
        }
    }
}
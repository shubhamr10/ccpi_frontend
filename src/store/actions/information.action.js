import axios from "axios";
import {GET_ALL_INFORMATION_API, INFORMATION_CREATE_API} from "../apis";
import {GET_ALL_INFORMATION} from "../types";

export const createNewInformation = formData => async dispatch => {
    try{
        let { data } = await axios.post(INFORMATION_CREATE_API, formData);
        if(data.success){
            window.alert("Information created successfully!");
        }
    } catch (e) {

    }
}

export const getAllInformation = (formData) => async dispatch => {
    try{
        let { data } = await axios.post(GET_ALL_INFORMATION_API, formData);
        if(data.success){
           dispatch({
               type:GET_ALL_INFORMATION,
               payload:data.data.list
           })
        }
    } catch (e) {

    }
}
import axios from "axios";
import {CREATE_MESSAGE, GET_MESSAGES, GET_NAMEPSPACES, GET_ROOMS} from "../apis";
import {GET_ALL_MESSAGE, GET_ALL_NAMESPACES, GET_ALL_ROOMS} from "../types";


export const getAllNameSpace = () => async dispatch => {
    try{
        let { data } = await axios.get(GET_NAMEPSPACES);
        if(data.success){
            dispatch({
                type:GET_ALL_NAMESPACES,
                payload:data.data.list
            })
        }
    } catch (e) {
        
    }
}

export const getAllRoom = (nameSpace) => async dispatch => {
    try{
        let { data } = await axios.post(GET_ROOMS, {nameSpace:nameSpace});
        if(data.success){
            dispatch({
                type:GET_ALL_ROOMS,
                payload:data.data.list
            })
        }
    } catch (e) {

    }
}

export const addMesaage = (formData) => async dispatch => {
    try{
    let { data } = await axios.post(CREATE_MESSAGE, formData);
    if(data.success){
        dispatch(getAllMessage(formData.room));
    }
    } catch (e) {

    }
}

export const getAllMessage = (room) => async dispatch => {
    try{
        let {data} = await axios.post(GET_MESSAGES, { room:room });
        if(data.success){
            dispatch({
                type:GET_ALL_MESSAGE,
                payload:data.data.list
            })
        }
    } catch (e) {

    }
}
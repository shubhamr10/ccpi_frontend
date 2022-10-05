import axios from "axios";
import {CREATE_SUBJECTS_API, GET_SUBJECTS, PROGRAMMES_API} from "../apis";
import {GET_ALL_PROGRAMMES, GET_ALL_SUBJECTS} from "../types";
import {setAlert} from "./alert.action";


export const createNewProgramme = (formData) => async dispatch => {
    try{
        let { data } = await axios.post(PROGRAMMES_API, formData);
        if(data.success){
            window.alert("Programme created successfully!");
        }
    } catch (e) {
        console.error("LOGIN API error",e);
        const { errors } = e.response.data;
        if(Array.isArray(errors)){
            errors.map(err => dispatch(setAlert(err.msg, "danger")));
        }
    }
}

export const createNewSubject = (formData) => async dispatch => {
    try{
        let { data } = await axios.post(CREATE_SUBJECTS_API, formData);
        if(data.success){
            window.alert("Subject created successfully!");
        }
    } catch (e) {
        console.error("LOGIN API error",e);
        const { errors } = e.response.data;
        if(Array.isArray(errors)){
            errors.map(err => dispatch(setAlert(err.msg, "danger")));
        }
    }
}

export const getAllProgrammes = () => async dispatch => {
    try{
        let { data } = await axios.get(PROGRAMMES_API);
        if(data.success){
           dispatch({
               type:GET_ALL_PROGRAMMES,
               payload : data.data.list
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

export const getAllSubjects = (programmeId) => async dispatch => {
    try{
        let { data } = await axios.post(GET_SUBJECTS,{ programme_code:programmeId  });
        if(data.success){
            dispatch({
                type:GET_ALL_SUBJECTS,
                payload : data.data.list
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
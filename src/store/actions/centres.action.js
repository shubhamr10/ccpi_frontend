import axios from "axios";
import {CREATE_CENTRE, REGIONAL_CENTRE_API, STUDY_CENTRE_API} from "../apis";
import {GET_ALL_REGIONAL_CENTRES, GET_ALL_STUDY_CENTRES} from "../types";

export const getAllRegionalCentres = () => async dispatch => {
    try {
        let { data } = await axios.post(REGIONAL_CENTRE_API);
        if(data.success){
            dispatch({
                type:GET_ALL_REGIONAL_CENTRES,
                payload:data.data.list
            })
        }
    } catch (e) {

    }
}

export const getAllStudyCentres = (regionalCentreId) => async dispatch => {
    try {
        let { data } = await axios.post(STUDY_CENTRE_API,{ rc_code: regionalCentreId});
        if(data.success){
            dispatch({
                type:GET_ALL_STUDY_CENTRES,
                payload:data.data.list
            })
        }
    } catch (e) {

    }
}

export const createCentre = (formData) => async dispatch => {
    try {
        let { data } = await axios.post(CREATE_CENTRE,formData);
        if(data.success){
            window.alert("Centre added successfully!")
        }
    } catch (e) {

    }
}
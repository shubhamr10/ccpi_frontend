import axios from "axios";
import {CREATE_PROFILE, CREATE_USER, GET_ROLES_API, GET_USERS, LOGIN_API} from "../apis";
import {GET_ALL_USERS, GET_ROLES, LOGIN_FAILED, LOGIN_SUCCESS, LOGOUT, USER} from "../types";
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

export const createUser = (formData) => async dispatch => {
    const formData1 = {
        name:formData.name,
        email:formData.email,
        role:formData.role,
        password:formData.password
    };
    const formData2 = {
        user:"",
        programme:formData.programme,
        regionalCentre:formData.regionalCentre,
        studyCentre:formData.studyCentre,
        currentSemester:formData.currentSemester,
        subjects:[formData.subjects]
    }
    try{
        let { data } = await axios.post(CREATE_USER,formData1);
        if(data.success){
            formData2.user = data.data.data._id;
            dispatch(createProfile(formData2))
        }
    } catch (e) {
        console.error("LOGIN API error",e);
        const { errors } = e.response.data;
        if(Array.isArray(errors)){
            errors.map(err => dispatch(setAlert(err.msg, "danger")));
        }
    }
}

export const createProfile = formData => async dispatch => {
    try{
        let { data } = await axios.post(CREATE_PROFILE,formData);
        if(data.success){
            window.alert("User created successfully");
        }
    } catch (e) {
        console.error("LOGIN API error",e);
        const { errors } = e.response.data;
        if(Array.isArray(errors)){
            errors.map(err => dispatch(setAlert(err.msg, "danger")));
        }
    }
}

export const getUsers = (role) => async dispatch => {
    try{
        let { data } = await axios.post(GET_USERS,{role:role});
        if(data.success){
            dispatch({
                type:GET_ALL_USERS,
                payload:data.data.list
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
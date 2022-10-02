import axios from "axios";

const setAuthTokenUtils = token => {
    axios.defaults.headers.common["Content-Type"] = "application/json";
    if(token){
        axios.defaults.headers.common["x-auth-token"] = token;
    } else {
        delete axios.defaults.headers.common["x-auth-token"];
    }
}

export default setAuthTokenUtils;
import {combineReducers} from "redux";
import alertReducer from "./alert.reducer";
import authReducer from "./auth.reducer";
import rolesReducer from "./roles.reducers";
import programmesReducer from "./programme.reducer";
import centresReducer from "./centre.reducer";
import informationReducer from "./information.reducer";
import chatroomsReducer from "./chatrooms.reducer";

export default combineReducers({
    alert:alertReducer,
    auth:authReducer,
    roles:rolesReducer,
    programme:programmesReducer,
    centre:centresReducer,
    information:informationReducer,
    chatroom:chatroomsReducer
})
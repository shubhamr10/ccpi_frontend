import { applyMiddleware, legacy_createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index.reducer";

const initialState = {};
const middleware = [thunk];

const store = legacy_createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
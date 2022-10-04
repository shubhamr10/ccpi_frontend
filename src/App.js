import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store/store";
import Routing from "./components/routing/Routing";
import setAuthTokenUtils from "./utils/setAuthToken.utils";
import {LOGIN_SUCCESS} from "./store/types";
import {getMyRole} from "./store/actions/auth.action";

if(localStorage.token){
    setAuthTokenUtils(localStorage.token);
     store.dispatch({
         type:LOGIN_SUCCESS,
         payload: localStorage.token
     });
     store.dispatch(getMyRole());
}

const App = () => {
    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route exact path='*' element={<Routing/>}/>
                </Routes>
            </Router>
        </Provider>
    )
}

export default App;
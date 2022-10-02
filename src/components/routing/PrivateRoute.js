import React, {Fragment} from 'react';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import NavBar from "../layouts/NavBar";


const PrivateRoute = ({ children, auth : { isAuthenticated, loading } }) => {
    return !isAuthenticated && !loading ? <Navigate replace={true} to={"/"}/> :
        (
            <Fragment>
                <NavBar/>
                {children}
            </Fragment>
        )
};

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{})(PrivateRoute);
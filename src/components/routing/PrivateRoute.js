import React, {Fragment} from 'react';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children, auth : { isAuthenticated, loading } }) => {
    return !isAuthenticated && !loading ? <Navigate replace={true} to={"/"}/> :
        (
            <Fragment>
                {children}
            </Fragment>
        )
};

const mapStateToProps = state => ({
    auth:state.auth
})

export default connect(mapStateToProps,{})(PrivateRoute);
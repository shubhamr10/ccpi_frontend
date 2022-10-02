import React, {useState} from 'react';
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../store/actions/auth.action";

const LandingPage = ({ isAuthenticated, login }) => {
    const [state, setState] = useState({
        email:"admin@acq.io",
        password:"Abcd@123"
    });
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }

    const onSubmitForm = e => {
        e.preventDefault();
        const formData = {
            email:state.email,
            password:state.password
        }
        login(formData);
    }

    if(isAuthenticated){
        return <Navigate replace to={"/home"} />
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <div className="landing-page-main">
                        <p className={"text-primary"}>Welcome to CCPI</p>

                        <form onSubmit={onSubmitForm} className={"login-form"}>
                            <div className="form-group">
                                <input type="email" name={"email"} value={state.email} onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" required={true}/>
                            </div>
                            <div className={"form-group"}>
                                <input type="password" name={"password"} value={state.password} onChange={onChange} className="form-control" id="password" placeholder="Password" required={true}/>
                            </div>
                            <div className={"form-group"}>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(LandingPage);
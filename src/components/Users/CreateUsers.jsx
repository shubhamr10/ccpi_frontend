import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import {getAllRoles} from "../../store/actions/roles.action";

const CreateUsers = ({ getAllRoles, roles }) => {
    console.log(roles)
    useEffect(() => {
        getAllRoles();
    },[getAllRoles]);

    const [state, setState] = useState({
        name:"",
        email:"",
        password:"Abcd@123",
        programme:"",
        regionalCentre:"",
        studyCentre:"",
        currentSemester:"",
        subjects:[],
        namespaces:[],
    });
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    }
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-12">
                    <h3>Create Users</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="user-type">User role</label>
                            {
                                roles.map( (role, index) => (
                                    <div className="form-check" key={index}>
                                        <input className="form-check-input" type="radio" name="role" id={role._id} value={role._id} />
                                        <label className="form-check-label" htmlFor={role._id}>
                                            {role.role_name}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    roles:state.roles.roles
})

export default connect(mapStateToProps, { getAllRoles })(CreateUsers);
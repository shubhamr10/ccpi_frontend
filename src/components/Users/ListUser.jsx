import React, {useEffect} from 'react';
import { connect } from "react-redux";
import {getUsers} from "../../store/actions/auth.action";

const ListUser = ({ctype, users, getUsers, roles}) => {
    const heading = ctype === "LA" ? "Administrator" :  ctype ===  "LM" ? "Manager" : ctype ===  "LT" ? "Teacher" : "Student";
    const currentRole = roles.filter(role => role.role_name === heading)[0]._id;
    useEffect(()=> {
        getUsers(currentRole);
    },[getUsers])
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-12">
                    <h3>List {heading}</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            users.map( (user, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    users: state.auth.users,
    roles:state.roles.roles,
})

export default connect(mapStateToProps, { getUsers })(ListUser);
import React from 'react';
import ignouLogo from "../../assets/img/ignou_logo.png";
import { connect } from "react-redux";
import { logout } from "../../store/actions/auth.action";

// "Administrator" , "Manager", "Teacher", "Owner", "Student"
const NavBar = ({logout, role}) => {
    const roleName = role.role_name;
    console.log(roleName)
    return (
        <div className={"container-fluid"}>
            <nav className={"navbar navbar-expand-lg navbar-dark bg-primary"}>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navToggler" aria-controls="navToggler" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse p-0" id="navToggler">
                    <a href={"/"} className="navbar-brand">
                        &emsp;<img src={ignouLogo} alt="logo" width={"80px"}/>
                    </a>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <a href={"/"}  className="nav-link text-light" >Home </a>
                        </li>
                        {
                            (roleName !== "Teacher" && roleName !== "Student") ? (
                                <li className="nav-item ">
                                    <a href={"/"}  className="nav-link text-light" >Users </a>
                                </li>
                            ) : null
                        }
                        {
                            (roleName !== "Teacher" && roleName !== "Student") ? (
                                <li className="nav-item ">
                                    <a href={"/"}  className="nav-link text-light" >Information </a>
                                </li>
                            ) : null
                        }
                        {
                            (roleName !== "Teacher" && roleName !== "Student" && roleName !== "Manager") ? (
                                <li className="nav-item ">
                                    <a href={"/centre"}  className="nav-link text-light" >Centres </a>
                                </li>
                            ) : null
                        }
                        {
                            (roleName !== "Teacher" && roleName !== "Student" && roleName !== "Manager") ? (
                                <li className="nav-item ">
                                    <a href={"/"}  className="nav-link text-light" >Programmes </a>
                                </li>
                            ) : null
                        }
                        {
                            (roleName === "Teacher" || roleName === "Student") ? (
                                <li className="nav-item ">
                                    <a href={"/chat-room"}  className="nav-link text-light" >Chatroom </a>
                                </li>
                            ) : null
                        }
                        <li className="nav-item">
                            <a href={"/"} className="nav-link text-light" onClick={() => logout()}>Logout </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    role:state.auth.role
})

export default connect(mapStateToProps, {logout})(NavBar);

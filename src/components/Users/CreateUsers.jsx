import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import {getAllRoles} from "../../store/actions/roles.action";
import {getAllStudyCentres} from "../../store/actions/centres.action";
import {getAllRegionalCentres} from "../../store/actions/centres.action";
import {getAllProgrammes} from "../../store/actions/programme.action";
import {getAllSubjects} from "../../store/actions/programme.action";
import {createUser} from "../../store/actions/auth.action";

const CreateUsers = ({ createUser, getAllRoles, roles, getAllStudyCentres, getAllRegionalCentres, getAllProgrammes, getAllSubjects, programmes, subjects, regionalCentres,  studyCentres }) => {
    useEffect(() => {
        getAllRoles();
        getAllRegionalCentres();
        getAllProgrammes();
    },[getAllRoles]);

    const [state, setState] = useState({
        name:"",
        email:"",
        role:"",
        password:"Abcd@123",
        programme:"",
        regionalCentre:"",
        studyCentre:"",
        currentSemester:"",
        subjects:[],
    });
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
        if(e.target.name === "programme"){
            getAllSubjects(e.target.value)
        }
        if(e.target.name === "regionalCentre"){
            getAllStudyCentres(e.target.value)
        }
        if(e.target.name === "subjects"){
            console.log(e.target.value)
        }
    }

    const onSubmitForm = e => {
        e.preventDefault();
        const formData = {
            name:state.name,
            email:state.email,
            role:state.role,
            password:state.password,
            programme:state.programme,
            regionalCentre:state.regionalCentre,
            studyCentre:state.studyCentre,
            currentSemester:state.currentSemester,
            subjects:state.subjects,
        };
        console.log(formData)
        createUser(formData);
        setState({
            name:"",
            email:"",
            role:"",
            password:"Abcd@123",
            programme:"",
            regionalCentre:"",
            studyCentre:"",
            currentSemester:"",
            subjects:[],
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
                    <form  onSubmit={onSubmitForm}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" onChange={onChange} name={"name"} value={state.name} className="form-control" id="name" placeholder="Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="currentSemester">Current Semester</label>
                            <input type="number" onChange={onChange} name={"currentSemester"} value={state.currentSemester}  className="form-control" id="currentSemester" placeholder="currentSemester"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" onChange={onChange} name={"email"} value={state.email}  className="form-control" id="email" placeholder="Email"/>
                        </div>

                        <div className="form-group">
                            <label htmlFor="user-type">User role</label>
                            {
                                roles.map( (role, index) => (
                                    <div className="form-check" key={index}>
                                        <input className="form-check-input" type="radio" onChange={onChange} name="role" id={role._id} value={role._id} />
                                        <label className="form-check-label" htmlFor={role._id}>
                                            {role.role_name}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="programme">Select Programme</label>
                            <select name={"programme"} onChange={onChange} className="form-control" id="programme">
                                <option>Select Programme</option>
                                {
                                    programmes.map((program, index) => (
                                        <option key={index} value={program._id}>{program.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="subjects">Select Subjects *Use ctrl+click to select multiple</label>
                            <select multiple={true} name={"subjects"} onChange={onChange} className="form-control" id="subjects">
                                <option>Select Subjects</option>
                                {
                                    subjects.map((subject, index) => (
                                        <option key={index} value={subject._id}>{subject.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="regionalCentre">Select Regional Centre</label>
                            <select name={"regionalCentre"} onChange={onChange} className="form-control" id="regionalCentre">
                                <option>Select Regional Centre</option>
                                {
                                    regionalCentres.map((rc, index) => (
                                        <option key={index} value={rc.code}>{rc.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="studyCentre">Select Study Centre</label>
                            <select name={"studyCentre"} onChange={onChange} className="form-control" id="studyCentre">
                                <option>Select Study Centre</option>
                                {
                                    studyCentres.map((sc, index) => (
                                        <option key={index} value={sc.code}>{sc.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className={"form-group"}>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    roles:state.roles.roles,
    programmes:state.programme.programmes,
    subjects:state.programme.subjects,
    regionalCentres:state.centre.regionalCentres,
    studyCentres:state.centre.studyCentres
})

export default connect(mapStateToProps, { getAllRoles,getAllStudyCentres,getAllRegionalCentres, getAllProgrammes, getAllSubjects, createUser  })(CreateUsers);
import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { getAllProgrammes } from "../../store/actions/programme.action";
import { getAllSubjects} from "../../store/actions/programme.action";

const ListSubjects = ({ getAllProgrammes, programmes, getAllSubjects, subjects }) => {
    useEffect(() => {
        getAllProgrammes()
    },[getAllProgrammes]);


    const onChange = e => {
        getAllSubjects(e.target.value);
    }

    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-12">
                    <h3>List Subjects</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <div className="form-group">
                        <label htmlFor="programme">Select Programme</label>
                        <select name={"programme_code"} onChange={onChange} className="form-control" id="programme">
                            <option>Select Programme</option>
                            {
                                programmes.map((program, index) => (
                                    <option key={index} value={program._id}>{program.name}</option>
                                ))
                            }
                        </select>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Subject Name</th>
                            <th scope="col">Subject code</th>
                            <th scope="col">Credits</th>
                            <th scope="col">Semester</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            subjects.map( (subject, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{subject.name}</td>
                                    <td>{subject.code}</td>
                                    <td>{subject.credits}</td>
                                    <td>{subject.semester}</td>
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
    isAuthenticated: state.auth.isAuthenticated,
    programmes:state.programme.programmes,
    subjects:state.programme.subjects
})

export default connect(mapStateToProps, { getAllProgrammes, getAllSubjects })(ListSubjects);
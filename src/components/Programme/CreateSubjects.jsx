import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import { createNewSubject, getAllProgrammes } from "../../store/actions/programme.action";

const CreateSubjects = ({createNewSubject, getAllProgrammes, programmes}) => {
    useEffect(() => {
        getAllProgrammes()
    },[getAllProgrammes]);
    const [state, setState] = useState({
        name:"",
        code:"",
        credits:"",
        programme:"",
        semester:""
    });
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
    };
    const onSubmitForm = e => {
        e.preventDefault();
        const formData = {
            name:state.name,
            code:state.code,
            credits:state.credits,
            programme:state.programme,
            semester:state.semester
        }
        createNewSubject(formData);
    }
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-12">
                    <h3>Create Programme</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <form onSubmit={onSubmitForm}>
                        <div className="form-group">
                            <label htmlFor="name">Name of Subject</label>
                            <input type="text" className="form-control" id="name" name={"name"} placeholder="Name of subject" value={state.name} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="code">Code of Subject</label>
                            <input type="text" className="form-control" id="code" name={"code"} placeholder="Code of subject" value={state.code} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="semester">Which semster course is it</label>
                            <input type="number" className="form-control" id="semester" name={"semester"} placeholder="Semester of subject" value={state.semester} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="credits">Subject credits</label>
                            <input type="number" className="form-control" id="credits" name={"credits"} placeholder="Credits of subject" value={state.credits} onChange={onChange} />
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
    programmes:state.programme.programmes,
    subjects:state.programme.subjects
})



export default connect(mapStateToProps, { createNewSubject, getAllProgrammes })(CreateSubjects);
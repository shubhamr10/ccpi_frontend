import React, {useState} from 'react';
import { connect } from "react-redux";
import { createNewProgramme } from "../../store/actions/programme.action";

const CreateProgrammes = ({createNewProgramme}) => {
    const [state, setState] = useState({
        name:"",
        code:"",
        total_semester:""
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
            total_semester:state.total_semester
        }
        createNewProgramme(formData);
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
                            <label htmlFor="name">Name of programme</label>
                            <input type="text" className="form-control" id="name" name={"name"} placeholder="Name of programme" value={state.name} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="code">Code of programme</label>
                            <input type="text" className="form-control" id="code" name={"code"} placeholder="Code of programme" value={state.code} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="total_semester">Total Semesters</label>
                            <input type="number" className="form-control" id="total_semester" name={"total_semester"} placeholder="Total Semester of programme" value={state.total_semester} onChange={onChange} />
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


export default connect(null, { createNewProgramme })(CreateProgrammes);
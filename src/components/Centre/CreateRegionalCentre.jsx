import React, {useState} from 'react';
import { connect } from "react-redux";
import { createCentre } from "../../store/actions/centres.action";


const CreateRegionalCentre = ({ createCentre }) => {
    const [state, setState] = useState({
        name:"",
        code:"",
        email:"",
        type:"RC",
        address:""
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
            email:state.email,
            type:state.type,
            address:state.address
        };
        setState({
            name:"",
            code:"",
            email:"",
            type:"SC",
            address:""
        });
        createCentre(formData);
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
                            <label htmlFor="name">Regional Centre Name</label>
                            <input type="text" className="form-control" id="name" name={"name"} placeholder="Name of regional centre" value={state.name} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="code">Regional centre code</label>
                            <input type="text" className="form-control" id="code" name={"code"} placeholder="Code of regional centre" value={state.code} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Email</label>
                            <input type="email" name={"email"} value={state.email} onChange={onChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter regional centre email" required={true}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">address</label>
                            <textarea type="text" className="form-control" id="address" name={"address"} placeholder="Address of regional centre" value={state.address} onChange={onChange} />
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

export default connect(null, { createCentre })(CreateRegionalCentre);
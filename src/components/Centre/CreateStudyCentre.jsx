import React, {useEffect, useState} from 'react';
import {connect} from "react-redux";
import {getAllRegionalCentres, createCentre} from "../../store/actions/centres.action";


const CreateStudyCentre = ({ getAllRegionalCentres, createCentre, regionalCentres }) => {
    useEffect(() => {
        getAllRegionalCentres()
    },[getAllRegionalCentres]);

    const [state, setState] = useState({
        name:"",
        code:"",
        email:"",
        type:"SC",
        rc_code:"",
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
            rc_code:state.rc_code,
            address:state.address
        };
        console.log(formData)
        createCentre(formData);
        setState({
            name:"",
            code:"",
            email:"",
            type:"SC",
            address:""
        });
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
                            <label htmlFor="rc_code">Regional centre</label>
                            <select name={"rc_code"} onChange={onChange} className="form-control" id="rc_code">
                                <option>Select Regional Centre</option>
                                {
                                    regionalCentres.map((rc, index) => (
                                        <option key={index} value={rc.code}>{rc.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Study Centre Name</label>
                            <input type="text" className="form-control" id="name" name={"name"} placeholder="Name of Study centre" value={state.name} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="code">Study centre code</label>
                            <input type="text" className="form-control" id="code" name={"code"} placeholder="Code of Study centre" value={state.code} onChange={onChange} />
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

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    regionalCentres:state.centre.regionalCentres,
})

export default connect(mapStateToProps, { getAllRegionalCentres, createCentre })(CreateStudyCentre);
import React, {Fragment, useEffect, useState} from 'react';
import { connect } from "react-redux";
import {getAllProgrammes} from "../../store/actions/programme.action";
import {getAllRegionalCentres} from "../../store/actions/centres.action";
import {getAllStudyCentres} from "../../store/actions/centres.action";
import {createNewInformation} from "../../store/actions/information.action";

const CreateInformation = ({ getAllProgrammes, getAllRegionalCentres, getAllStudyCentres, programmes, regionalCentres, studyCentres, createNewInformation }) => {
    useEffect(()=>{
        getAllProgrammes()
        getAllRegionalCentres()
    },[])
    const [state, setState] = useState({
        heading:"",
        content:"",
        attachment:"",
        type:"ANNOUNCEMENT",
        flow:"",
        programme:"",
        studyCentre:"",
        regionalCentre:""
    });
    const onChange = e => {
        setState({
            ...state,
            [e.target.name]:e.target.value
        });
        if(e.target.name === "regionalCentre"){
            getAllStudyCentres(e.target.value);
            setState({
                ...state,
                [e.target.name]:e.target.value,
                studyCentre:""
            })
        }
        if(e.target.name === "programme"){
            setState({
                ...state,
                [e.target.name]:e.target.value,
                studyCentre:"",
                regionalCentre:""
            })
        }
    };
    const onSubmitForm = e => {
        e.preventDefault();
        const formData = {
            heading:state.heading,
            content:state.content,
            attachment:state.attachment,
            type:state.type,
            flow:state.flow,
            programme:state.programme,
            studyCentre:state.studyCentre,
            regionalCentre:state.regionalCentre
        };
        createNewInformation(formData);
        setState({
            heading:"",
            content:"",
            attachment:"",
            type:"RC",
            flow:"",
            programme:"",
            studyCentre:"",
            regionalCentre:""
        });
    }
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-12">
                    <h3>Create Announcements/Notices</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <form onSubmit={onSubmitForm}>
                        <div className="form-group">
                            <label htmlFor="user-type">Information Type</label>
                            {
                                ["NEWS","ANNOUNCEMENT"].map( (type, index) => (
                                    <div className="form-check" key={index}>
                                        <input className="form-check-input" type="radio" name="type" id={type} value={type} onChange={onChange} />
                                        <label className="form-check-label" htmlFor={type}>
                                            {type}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="user-type">Information flow</label>
                            {
                                ["GLOBAL","PROGRAMME","RC","SC"].map( (flow, index) => (
                                    <div className="form-check" key={index}>
                                        <input className="form-check-input" type="radio" name="flow" id={flow} value={flow} onChange={onChange} />
                                        <label className="form-check-label" htmlFor={flow}>
                                            {flow}
                                        </label>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="form-group">
                            <label htmlFor="heading">Heading</label>
                            <input type="text" className="form-control" id="heading" name={"heading"} placeholder="Heading of Announcement" value={state.heading} onChange={onChange} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="content">Content</label>
                            <textarea type="text" className="form-control" id="content" name={"content"} placeholder="Type your content here..." value={state.content} onChange={onChange} />
                        </div>
                        {
                            state.flow === "PROGRAMME" ? <div className="form-group">
                                <label htmlFor="programme">Select Programme</label>
                                <select name={"programme"} onChange={onChange} className="form-control" id="programme">
                                    <option>Select Programme</option>
                                    {
                                        programmes.map((program, index) => (
                                            <option key={index} value={program._id}>{program.name}</option>
                                        ))
                                    }
                                </select>
                            </div> : null
                        }
                        {
                            state.flow === "RC" ? <div className="form-group">
                                <label htmlFor="regionalCentre">Select Regional Centre</label>
                                <select name={"regionalCentre"} onChange={onChange} className="form-control" id="regionalCentre">
                                    <option>Select Regional Centre</option>
                                    {
                                        regionalCentres.map((rc, index) => (
                                            <option key={index} value={rc.code}>{rc.name}</option>
                                        ))
                                    }
                                </select>
                            </div> : null
                        }
                        {
                            state.flow === "SC" ? <Fragment>
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
                                        <option>Select Regional Centre</option>
                                        {
                                            studyCentres.map((rc, index) => (
                                                <option key={index} value={rc.code}>{rc.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </Fragment> : null
                        }
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
    regionalCentres:state.centre.regionalCentres,
    studyCentres:state.centre.studyCentres
})

export default connect(mapStateToProps, { getAllProgrammes, getAllRegionalCentres, getAllStudyCentres, createNewInformation })(CreateInformation);
import React, {useEffect, useState} from 'react';
import { connect } from "react-redux";
import {getAllInformation} from "../../store/actions/information.action";

const ListAnnouncements = ({informations, getAllInformation}) => {
    const [state, setState] = useState("");
    const onClick = e => {
        console.log("I was called", e.target.value)
        setState(e.target.value);
    }
    useEffect(()=>{
        getAllInformation();
    },[getAllInformation, state])
    console.log(state);
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-12">
                    <h3>List Announcements/Notice</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">

                    {
                        informations.map((info, index)=> (
                            <div className={"p-4"}>
                            <div id={"accordion mb-2"} key={index}>
                                <div className="card">

                                    <div className="card-header" id={`heading${index+1}`}>
                                        <h6 className={"mb-0"}>
                                            <button onClick={onClick} value={index} className="btn btn-link" data-toggle={"collapse"} data-target={`#collapse${index+1}`} aria-expanded={"true"} aria-controls={`collapse${index+1}`} >
                                                {info.heading}
                                                {console.log(index, state, index === state)}
                                            </button>
                                        </h6>
                                    </div>

                                    <div id={`collapse${index+1}`} className={`collapse ${ state == index.toString() ? 'show': '' }`} aria-labelledby={`heading${index+1}`} data-parent="#accordion" >
                                        <div className="card-body">
                                            {info.content}
                                        </div>
                                    </div>

                                </div>
                            </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    programmes:state.programme.programmes,
    regionalCentres:state.centre.regionalCentres,
    studyCentres:state.centre.studyCentres,
    informations:state.information.informations
})

export default connect(mapStateToProps, { getAllInformation })(ListAnnouncements);
import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { getAllRegionalCentres } from "../../store/actions/centres.action";
import { getAllStudyCentres } from "../../store/actions/centres.action";

const ListStudyCentre = ({getAllRegionalCentres, regionalCentres, getAllStudyCentres, studyCentres}) => {
    useEffect(() => {
        getAllRegionalCentres()
    },[getAllRegionalCentres]);


    const onChange = e => {
        getAllStudyCentres(e.target.value);
    }
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-12">
                    <h3>List Regional Centres</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-6 mx-auto">
                    <div className="form-group">
                        <label htmlFor="programme">Select Regional Centre</label>
                        <select name={"programme_code"} onChange={onChange} className="form-control" id="programme">
                            <option>Select Regional Centre</option>
                            {
                                regionalCentres.map((rc, index) => (
                                    <option key={index} value={rc.code}>{rc.name}</option>
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
                            <th scope="col">SC Name</th>
                            <th scope="col">SC code</th>
                            <th scope="col">SC email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            studyCentres.map( (program, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{program.name}</td>
                                    <td>{program.code}</td>
                                    <td>{program.email}</td>
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
    regionalCentres:state.centre.regionalCentres,
    studyCentres:state.centre.studyCentres
})

export default connect(mapStateToProps, { getAllRegionalCentres, getAllStudyCentres })(ListStudyCentre);
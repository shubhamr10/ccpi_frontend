import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { getAllRegionalCentres } from "../../store/actions/centres.action";

const ListRegionalCentre = ({getAllRegionalCentres, regionalCentres}) => {
    useEffect(()=>{
        getAllRegionalCentres();
    },[getAllRegionalCentres])
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-12">
                    <h3>List Regional Centres</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">RC Name</th>
                            <th scope="col">RC code</th>
                            <th scope="col">RC email</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            regionalCentres.map( (program, index) => (
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
    regionalCentres:state.centre.regionalCentres
})

export default connect(mapStateToProps, { getAllRegionalCentres })(ListRegionalCentre);
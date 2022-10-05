import React, {useEffect} from 'react';
import { connect } from "react-redux";
import { getAllProgrammes } from "../../store/actions/programme.action";

const ListProgrammes = ({ getAllProgrammes, programmes }) => {
    useEffect(() => {
        getAllProgrammes()
    },[getAllProgrammes]);
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-12">
                    <h3>List Programme</h3>
                    <hr/>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <table className="table">
                        <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Programme Name</th>
                            <th scope="col">Programme code</th>
                            <th scope="col">Semester</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            programmes.map( (program, index) => (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{program.name}</td>
                                    <td>{program.code}</td>
                                    <td>{program.total_semesters}</td>
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
    programmes:state.programme.programmes
})

export default connect(mapStateToProps, { getAllProgrammes })(ListProgrammes);
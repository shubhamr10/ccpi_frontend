import React, { useState } from 'react';
import { connect } from "react-redux";
import CreateRegionalCentre from "./CreateRegionalCentre";
import ListRegionalCentre from "./ListRegionalCentre";
import CreateStudyCentre from "./CreateStudyCentre";
import ListStudyCentre from "./ListStudyCentre";

const Centre = () => {
    const [state, setState] = useState('LSC');
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-2 my-2">
                    <div className="namespaceContainer">
                        <ul className="list-group">
                            <li style={{cursor:"pointer"}} className={`list-group-item ${state === 'LRC'  ? "active" : ""}`} onClick={() => setState('LRC')}>List Regional Centre</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'LSC'  ? "active" : ""}`} onClick={() => setState('LSC')}>List Study Centre</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'CRC'  ? "active" : ""}`} onClick={() => setState('CRC')}>Create Regional Centre</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'CSC'  ? "active" : ""}`} onClick={() => setState('CSC')}>Create Study Centre</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-10 my-2">
                    { state === 'LRC' ? <ListRegionalCentre ctype={state}/> : null}
                    { state === 'LSC' ? <ListStudyCentre ctype={state}/> : null}
                    { state === 'CRC' ? <CreateRegionalCentre ctype={state}/> : null}
                    { state === 'CSC' ? <CreateStudyCentre ctype={state}/> : null}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    role:state.auth.role
})
export default connect(mapStateToProps, {})(Centre);
import React, { useState } from 'react';
import { connect } from "react-redux";

const Programme = () => {
    const [state, setState] = useState('LP');
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-2 my-2">
                    <div className="namespaceContainer">
                        <ul className="list-group">
                            <li style={{cursor:"pointer"}} className={`list-group-item ${state === 'LP'  ? "active" : ""}`} onClick={() => setState('LP')}>List Programmes</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'LS'  ? "active" : ""}`} onClick={() => setState('LS')}>List Subjects</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'CP'  ? "active" : ""}`} onClick={() => setState('CP')}>Create Programmes</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'CS'  ? "active" : ""}`} onClick={() => setState('CS')}>Create Subjects</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-10 my-2">
                    {/*{ state === 'LP' ? <ListCentre ctype={state}/> : null}*/}
                    {/*{ state === 'LS' ? <ListCentre ctype={state}/> : null}*/}
                    {/*{ state === 'CP' ? <CreateCentre ctype={state}/> : null}*/}
                    {/*{ state === 'CS' ? <CreateCentre ctype={state}/> : null}*/}
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    role:state.auth.role
})
export default connect(mapStateToProps, {})(Programme);
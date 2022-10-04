import React, { useState } from 'react';
import { connect } from "react-redux";

const User = () => {
    const [state, setState] = useState('LS');
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-2 my-2">
                    <div className="namespaceContainer">
                        <ul className="list-group">
                            <li style={{cursor:"pointer"}} className={`list-group-item ${state === 'LA'  ? "active" : ""}`} onClick={() => setState('LA')}>List Administrators</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'LM'  ? "active" : ""}`} onClick={() => setState('LM')}>List Managers</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'LT'  ? "active" : ""}`} onClick={() => setState('LT')}>List Teachers</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'LS'  ? "active" : ""}`} onClick={() => setState('LS')}>List Students</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'CU'  ? "active" : ""}`} onClick={() => setState('CU')}>Create Users</li>
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
export default connect(mapStateToProps, {})(User);
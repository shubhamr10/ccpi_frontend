import React, { useState } from 'react';
import { connect } from "react-redux";
import CreateUsers from "./CreateUsers";
import ListUser from "./ListUser";

const User = () => {
    const [state, setState] = useState('CU');
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
                    { state === 'LA' ? <ListUser ctype={state}/> : null}
                    { state === 'LM' ? <ListUser ctype={state}/> : null}
                    { state === 'LT' ? <ListUser ctype={state}/> : null}
                    { state === 'LS' ? <ListUser ctype={state}/> : null}
                    { state === 'CU' ? <CreateUsers ctype={state}/> : null}
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
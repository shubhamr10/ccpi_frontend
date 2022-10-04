import React, { useState } from 'react';
import { connect } from "react-redux";

const Information = () => {
    const [state, setState] = useState('LN');
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-2 my-2">
                    <div className="namespaceContainer">
                        <ul className="list-group">
                            <li style={{cursor:"pointer"}} className={`list-group-item ${state === 'LN'  ? "active" : ""}`} onClick={() => setState('LN')}>List Notices</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'LA'  ? "active" : ""}`} onClick={() => setState('LA')}>List Announcements</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'CN'  ? "active" : ""}`} onClick={() => setState('CN')}>Create Notices</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'CA'  ? "active" : ""}`} onClick={() => setState('CA')}>Create Announcements</li>
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
export default connect(mapStateToProps, {})(Information);
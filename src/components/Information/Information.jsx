import React, { useState } from 'react';
import { connect } from "react-redux";
import CreateAnnouncements from "./CreateInformation";
import ListAnnouncements from "./ListAnnouncements";
import ListNotices from "./ListNotices";

const Information = () => {
    const [state, setState] = useState('LN');
    return (
        <div className={"container-fluid"}>
            <div className="row">
                <div className="col-sm-2 my-2">
                    <div className="namespaceContainer">
                        <ul className="list-group">
                            <li style={{cursor:"pointer"}} className={`list-group-item ${state === 'LN'  ? "active" : ""}`} onClick={() => setState('LN')}>List Notices/Announcements</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'CN'  ? "active" : ""}`} onClick={() => setState('CN')}>Create Notices</li>
                            <li style={{cursor:"pointer"}}  className={`list-group-item ${state === 'CA'  ? "active" : ""}`} onClick={() => setState('CA')}>Create Announcements</li>
                        </ul>
                    </div>
                </div>
                <div className="col-sm-10 my-2">
                    { state === 'LN' ? <ListAnnouncements ctype={state}/> : null}
                    { state === 'CN' ? <CreateAnnouncements ctype={state}/> : null}
                    { state === 'CA' ? <CreateAnnouncements ctype={state}/> : null}
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
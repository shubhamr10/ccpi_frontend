import React from 'react';

const NotFound = props => {
    return (
        <div className={"container-fluid container-full-height"}>
            <div className="row">
                <div className="col-sm-12">
                    <div className={"not-found"}>
                    <div className="number">404</div>
                    <div className="text"><span>Ooops...</span><br/>page not found</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

NotFound.propTypes = {
    
};

export default NotFound;
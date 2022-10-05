import React from 'react';

const ListUser = ({ctype}) => {
    const heading = ctype === "LA" ? "Administrators" :  ctype ===  "LM" ? "Managers" : ctype ===  "LT" ? "Teachers" : "Student";
    return (
        <div className={"container-fluid"}>
            List {heading}
        </div>
    );
};

export default ListUser;
import React from 'react';

const ListCentre = ({ctype}) => {
    const headingString = ctype === "LRC" ? "Regional Centres" : "Study Centres";
    return (
        <div>
            List {headingString}
        </div>
    );
};

export default ListCentre;
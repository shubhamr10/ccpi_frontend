import React from 'react';

const CreateCentre = ({ctype}) => {
    const headingString = ctype === "CRC" ? "Regional Centres" : "Study Centres";
    return (
        <div>
            Create {headingString}
        </div>
    );
};

export default CreateCentre;
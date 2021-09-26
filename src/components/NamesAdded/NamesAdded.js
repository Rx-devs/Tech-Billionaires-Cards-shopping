import React from 'react';

const NamesAdded = (props) => {
    return (
        // Added Names List Area
        <div className="bg-primary text-center text-light my-1 p-2 w-100 rounded">
            <p className="m-0">{props.name}</p>
        </div>
    );
};

export default NamesAdded;
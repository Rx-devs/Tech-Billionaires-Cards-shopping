import React from 'react';

const Person = (props) => {
    const {name,age,img,net_worth,source_of_wealth,title } = props.person;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} style={{width:'200px'}} className="card-img-top" alt="Profile_Image"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{title}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{source_of_wealth}</small>
                </div>
            </div>
        </div>
    );
};

export default Person;
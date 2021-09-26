import React from 'react';
import './Person.css';

const Person = (props) => {
    const { name, age, img, net_worth, source_of_wealth, title } = props.person;
    
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="p-3 card-img" alt="Profile_Image"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{title}</p>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">Net worth: {net_worth} billion USD</p>
                    <p className="card-text">Source Of Wealth: {source_of_wealth}</p>
                    <button onClick={()=>props.buttonHandler(props.person)}className="btn btn-outline-danger">Add to Cart</button>
                </div>
                <div className="card-footer">
                    <small className="text-muted">{source_of_wealth}</small>
                </div>
            </div>
        </div>
    );
};

export default Person;
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Person.css';

const Person = (props) => {
    // destructuring person props
    const { name, age, img, net_worth, source_of_wealth, title } = props.person;

    // add social media & cart icons
    const cartIcon = <FontAwesomeIcon icon={faCartPlus} />
    const fbIcon = <FontAwesomeIcon icon={faFacebook} />
    const tweeterIcon = <FontAwesomeIcon icon={faTwitter} />
    
    return (
        // person card
        <div className="col">
            <div className="card h-100">
                <img src={img} className="p-3 card-img" alt="Profile_Image"/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{title}</p>
                    <p className="card-text">Age: {age}</p>
                    <p className="card-text">Net worth: {net_worth} billion USD</p>
                    <p className="card-text">Source Of Wealth: {source_of_wealth}</p>
                    <button onClick={()=>props.buttonHandler(props.person)}className="btn btn-outline-primary shadow-none">{cartIcon} Add Card</button>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <small className="text-muted">{source_of_wealth}
                    </small>
                    <div>
                        <a className="text-muted me-3" href="https://facebook.com">{fbIcon}</a>
                        <a className="text-muted me-2" href="https://twitter.com">{tweeterIcon}</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Person;
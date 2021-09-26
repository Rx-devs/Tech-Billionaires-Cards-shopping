import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';
import './CardShop.css';

const Persons = () => {
    // load cards data
    const [persons, setPersons] = useState([]);

    // cart data states
    const [cart, setCart] = useState([]);

    // fetch cards data
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setPersons(data))
        
    }, []);

    // button event handler
    const buttonHandler = (card) => {
        const newCardAdded = [...cart, card];
        setCart(newCardAdded);
    }
    
    return (
        <div className="container-fluid container-style">
            <div className="row">
                <div className="col-12 col-md-9">
                    {/* Billionaries Cards */}
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                    {
                        persons.map(person => <Person
                            person={person}
                            key={person.name}
                            buttonHandler={buttonHandler}
                        ></Person>)
                    }
                    </div>
                </div>
                <div className="col-12 col-md-3">
                    {/* Cart */}
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>           
        </div>
    );
};

export default Persons;
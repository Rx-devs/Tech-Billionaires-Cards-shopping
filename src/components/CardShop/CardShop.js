import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Person from '../Person/Person';


const Persons = () => {
    const [persons, setPersons] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setPersons(data))
        
    }, []);
    const buttonHandler = (card) => {
        const newCardAdded = [...cart, card];
        setCart(newCardAdded)
    }
    
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-9">
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
                    <Cart
                        cart={cart}
                    ></Cart>
                </div>
            </div>
            
            
        </div>
    );
};

export default Persons;
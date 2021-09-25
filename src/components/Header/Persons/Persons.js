import React, { useEffect, useState } from 'react';
import Person from '../Person/Person';


const Persons = () => {
    const [persons, setPersons] = useState([])
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setPersons(data))
        
    },[])
    return (
        <div class="container">
            <div class="row row-cols-3 g-4">
                {
                    persons.map(person => <Person
                        person={person}
                        key={person.name}
                    ></Person>)
                }
            </div>
            
        </div>
    );
};

export default Persons;
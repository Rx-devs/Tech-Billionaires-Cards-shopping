import React from 'react';
import NamesCard from '../../NamesCard/NamesCard';

const Cart = (props) => {
    const { cart } = props;

    let nameAdded = [];
    let total = 0;
    for (const person of cart) {
        total = total + person.net_worth;
        nameAdded = [...nameAdded,person.name];
    }

    return (
        <div className="mx-3 border border-3 p-3 rounded">
            <h3>Add to Cart</h3>
            <p>Cards Collected: {cart.length}</p>
            <p>Total Net Worth: {total.toFixed(2)}</p>
            <div className="text-center">
                {
                    nameAdded.map(name => <NamesCard
                        name={name}
                        key={name}
                    ></NamesCard>)
                }
            </div>
        </div>
    );
};

export default Cart;
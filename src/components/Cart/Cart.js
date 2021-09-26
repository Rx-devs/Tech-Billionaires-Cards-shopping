import React from 'react';
import NamesCard from '../NamesCard/NamesCard';
import './Cart.css';

const Cart = (props) => {
    const { cart } = props;

    let nameAdded = [];
    let total = 0;
    for (const person of cart) {
        total = total + person.net_worth;
        nameAdded = [...nameAdded,person.name];
    }

    return (
        <div>
            <div className="mx-3 mb-4 border border-1 px-3 py-4 rounded cart">
                <h3 className="text-center mb-4">Cards Cart</h3>
                <p>Cards Collected: {cart.length}</p>
                <p>Total Net Worth: $ {total.toFixed(2)} billion</p>
                <button className="btn btn-outline-danger w-100">Buy Card</button>
            </div>
            <div className="mx-5 names-card">
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
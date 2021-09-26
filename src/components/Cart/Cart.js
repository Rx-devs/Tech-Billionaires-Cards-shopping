import React from 'react';
import NamesAdded from '../NamesAdded/NamesAdded';
import './Cart.css';

const Cart = (props) => {
    // destructuring cart props
    const { cart } = props;

    // display added names & total Net Worth
    let namesAdded = [];
    let total = 0;
    for (const person of cart) {
        total = total + person.net_worth;
        // add names only one times
        if (!namesAdded.includes(person.name)) {
            namesAdded = [...namesAdded,person.name];
        } 
    }

    return (
        <div>
            {/* Cart area */}
            <div className="mx-3 mb-4 border px-3 py-4 rounded cart">
                <h3 className="text-center mb-4">Cart</h3>
                <p>Cards Collected: {cart.length}</p>
                <p>Total Net Worth: $ {total.toFixed(2)} billion</p>
                <button className="btn btn-outline-danger w-100 shadow-none">Buy Cards</button>
            </div>
            
            {/* Names area */}
            <div className="mx-3">
                {
                    namesAdded.map(name => <NamesAdded
                        name={name}
                        key={name}
                    ></NamesAdded>)
                }
            </div>
        </div>
    );
};

export default Cart;
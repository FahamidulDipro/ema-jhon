import React from 'react';

const Cart = (props) => {
    const {cart} = props;
    return (
        <div>
                    <h4>Order Summary</h4>
                    <p><b>Selected Items:</b> {cart.length}</p>
        </div>
    );
};

export default Cart;
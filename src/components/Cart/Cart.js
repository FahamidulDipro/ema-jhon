import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let totalShippingCharge = 0;
  
    cart.forEach(product => {
        total += product.price;
        totalShippingCharge += product.shipping;
    });
    let tax = total*10/100;
    const grandTotal = total-totalShippingCharge-tax;
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p><b>Selected Items:</b> {cart.length}</p>
            <p><b>Total Price:</b> ${total}</p>
            <p><b>Total Shipping Charge:</b> ${totalShippingCharge}</p>
            <p><b>Tax:</b> {tax}</p>
            {
                
            }
            <h3><b>Grand Total: </b>${grandTotal}</h3>
            <button className='clear-cart-btn'>Clear Cart</button>
            &nbsp;<button className='review-order-btn'>Review Order</button>
        </div>
    );
};

export default Cart;
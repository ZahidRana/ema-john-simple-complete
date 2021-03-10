import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cartDetails;
    const singleItemPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const itemPrice = Number(singleItemPrice.toFixed(2));

    const shippingPrice = cart.reduce((total, item) => total + item.shipping * item.quantity, 0);
    const shippingCost = Number(shippingPrice.toFixed(2));

    const tax = Number((itemPrice / 10).toFixed(2));
    const total = Number((itemPrice + shippingCost + tax).toFixed(2));
    return (
        <div>
            <div className="cart">
                <h2>Order Summary</h2>
                <p>Items Ordered : {cart.length}</p>
            </div>
            <div className="pricing">
                <small>Item Price : <span id="itemPrice">${itemPrice}</span></small>
                <br />
                <small>Shipping Cost : <span id="shipping">${shippingCost}</span></small>
                <br />
                <small>Tax : <span id="tax">${tax}</span></small>
                <h4>Total Price : <span id="total">${total}</span></h4>
                {
                    props.children
                }
            </div>
        </div>
    );
};

export default Cart;
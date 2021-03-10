import React from 'react';
import './ReviewItem.css';

const ReveiwItem = (props) => {
    const {name, quantity, seller, key, price} = props.products;
    return (
        <div className="review-items">
            <h4 className="product-title">{name}</h4>
            <p>by {seller}</p>
            <p>Price : {price}</p>
            <p>Quantity : {quantity}</p>
            <br/>
            <button onClick={() => props.removeItem(key)}>Remove Item</button>
        </div>
    );
};

export default ReveiwItem;
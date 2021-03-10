import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { name, price, img, stock, seller, key } = props.productDetails;
    const handleAddCart = props.handleAddCartBtn;
    return (
        <div className="product">
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-details">
                <h4><Link className="link" to={"/product/" + key}>{name}</Link></h4>
                <p><small>by</small> {seller}</p>
                <p>${price}</p>
                <p><small>only {stock} left in stock - order now</small></p>
                <button onClick={() => handleAddCart(props.productDetails)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Review.css';
import { Link } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);

    const handlePlaceOrder = () => {
        setCart([]);
        processOrder();
    }
    const handleRemoveItem = (productKey) => {
        const newCart = cart.filter(product => product.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);

        const cartProducts = productKeys.map(key => {
            const products = fakeData.find(product => product.key === key);
            products.quantity = savedCart[key];
            return products;
        })
        setCart(cartProducts);
    }, [])
    return (
        <div className="review-area">
            <div className="review-container">
                {
                    cart.map(product => <ReviewItem removeItem={handleRemoveItem} key={product.key} products={product}></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cartDetails={cart}>
                    <Link to='/complete'>
                        <button onClick={handlePlaceOrder}>Place Your Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Review;
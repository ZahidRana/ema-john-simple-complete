import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import { Link } from 'react-router-dom';

const Shop = () => {
    const firstTwenty = fakeData.slice(0, 20);
    const [products, setProducts] = useState(firstTwenty);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        const previousCart = productKeys.map(key => {
            const products = fakeData.find(product => product.key === key);
            products.quantity = savedCart[key];
            return products;
        })
        setCart(previousCart);
    }, [])

    const handleAddCart = (productDetails) => {
        const sameProduct = cart.find(product => product.key === productDetails.key);
        let count = 1;
        let newCart;
        if (sameProduct) {
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const otherProducts = cart.filter(product => product.key !== productDetails.key);
            newCart = [...otherProducts, sameProduct];
        }
        else {
            productDetails.quantity = 1;
            newCart = [...cart, productDetails];
        }
        setCart(newCart);
        // const sameProduct = newCart.filter(product => product.key === productDetails.key);
        // const count = sameProduct.length;
        addToDatabaseCart(productDetails.key, count);
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    products.map(product => <Product key={product.key} productDetails={product} handleAddCartBtn={handleAddCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cartDetails={cart}>
                    <Link to="/review">
                        <button>Review Your Order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;
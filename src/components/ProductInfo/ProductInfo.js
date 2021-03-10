import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import './ProductInfo.css'

const ProductInfo = () => {
    const { productKey } = useParams();
    const findProduct = fakeData.find(product => product.key === productKey);
    console.log(findProduct);
    const { name, img, price, seller, features } = findProduct;
    return (
        <div className="details-area">
            <div className="product-info">
                <div className="productInfo-img">
                    <img src={img} alt="" />
                </div>
                <div>
                    <h2 className="product-title">{name}</h2>
                    <p>by {seller}</p>
                    <p>Price : ${price}</p>
                    <h3>Features :</h3>
                    <ul>
                        {
                            features.map(feature => <li>{feature.description}: {feature.value}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProductInfo;
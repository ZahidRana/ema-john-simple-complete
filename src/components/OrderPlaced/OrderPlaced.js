import React from 'react';
import './OrderPlaced.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

const OrderPlaced = () => {
    return (
        <div>
            <div className="stars">
                <FontAwesomeIcon className="small-star" icon={faStar} />
                <FontAwesomeIcon className="medium-star" icon={faStar} />
                <FontAwesomeIcon className="big-star" icon={faStar} />
                <FontAwesomeIcon className="medium-star" icon={faStar} />
                <FontAwesomeIcon className="small-star" icon={faStar} />
            </div>
            <div className="confirm-heading">
                <h1 className="confirm-text">Order Confirmed</h1>
                <br/>
                <p>We are pleased to inform you that your order has been received and confirmed.</p>
                <p>Your Order is Confirmed. Thank You!!!!</p>
                <br/>
                <h1 className="confirm-text">Thank You!!!</h1>
            </div>
        </div>
    );
};

export default OrderPlaced;
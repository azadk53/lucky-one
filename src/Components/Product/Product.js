import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {

    const { img, price, name, brand, category } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='info'>
                <h4> {name}</h4>
                <p>Brand: {brand}</p>
                <p>Price: ${price}</p>
                <p>Category: {category}</p>
            </div>
            <button onClick={() => props.addToCart(props.product)} className='btn-cart'><p className='btn-text'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;
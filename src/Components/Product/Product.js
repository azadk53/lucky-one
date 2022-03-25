import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'

const Product = (props) => {

    const { img, price, name, category, id } = props.product
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='info'>
                <h4> {name}</h4>
                <p>Price: ${price}</p>
                <p>Category: {category}</p>
            </div>
            <button onClick={() => props.addToCart(props.product)} className='btn-cart'><p>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
        </div>
    );
};

export default Product;
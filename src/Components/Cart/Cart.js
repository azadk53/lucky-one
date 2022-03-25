import React from 'react';
import './Cart.css'
const Cart = ({ cart, reset }) => {
    console.log(cart)
    let img, name;
    for (const product of cart) {
        img = product.img
        name = product.name
    }
    return (
        <div className='cart'>
            <h3>Selected Watch</h3>
            <div className='cart-product'>
                <img src={img} alt="" />
                <h4>{name}</h4>
            </div>
            <button>Choose 1 for me</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
};

export default Cart;
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
            <h2>Selected Watch</h2>
            <div className='cart-product'>
                <img src={img} alt="" />
                <h4>{name}</h4>
            </div>
            <div className='btn'>
                <button className='btn-choose'>Choose 1 for me</button>
                <button onClick={reset} className='btn-reset'>Reset</button>
            </div>
        </div>
    );
};

export default Cart;
import React from 'react';
import './Cart.css'
const Cart = ({ cart, reset, chooseItem, items }) => {
    console.log(items)
    const { img, name } = items;




    return (
        <div className='cart'>
            <h2>Selected Watch</h2>
            <div className='cart-product'>
                {
                    cart.map((product) =>
                        <div className='cart-info'>
                            <img src={product.img} alt="" />
                            <h4>{product.name}</h4>
                        </div>
                    )
                }
            </div>
            <div className='btn'>
                <button onClick={() => chooseItem()} className='btn-choose'><p>Choose 1 for me</p></button>
            </div>
            <div className='choose-item'>
                <img src={img} alt="" />
                <h4>{name}</h4>
            </div>
            <div className='btn'>
                <button onClick={reset} className='btn-reset'>Reset</button>
            </div>
        </div>
    );
};

export default Cart;
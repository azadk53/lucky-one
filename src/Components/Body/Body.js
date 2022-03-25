import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Body.css'

const Body = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    const reset = () => {
        setCart([])
    }
    return (
        <div className='body-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} reset={reset}></Cart>
            </div>
        </div>
    );
};

export default Body;
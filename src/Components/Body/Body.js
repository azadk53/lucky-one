import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Body.css'

const Body = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])
    const [items, setItems] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        const exists = cart.find(prod => prod.id === product.id)
        if (!exists) {
            if (cart.length < 4) {
                const newCart = [...cart, product]
                setCart(newCart)
            }
        }
    }
    const reset = () => {
        setCart([])
        setItems([])
    }
    const chooseItem = () => {
        let a = Math.random() * (cart.length + 1 - 1)
        let b = parseInt(a)
        const item = cart[b]
        setItems(item)

    }
    return (
        <div className='body-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} reset={reset} chooseItem={chooseItem} items={items}></Cart>
            </div>
        </div>
    );
};

export default Body;
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Body = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const addToCart = (product) => {
        console.log(product)
    }
    return (
        <div>
            <div>
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
        </div>
    );
};

export default Body;
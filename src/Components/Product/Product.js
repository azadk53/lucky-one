import React from 'react';

const Product = (props) => {

    const { img, price, name, category, id } = props.product
    return (
        <div>
            <img src={img} alt="" />
            <div className='info'>
                <h4> {name}</h4>
                <p>Price: ${price}</p>
                <p>Category: {category}</p>
            </div>
            <button onClick={() => props.addToCart(props.product)}>Add to Cart</button>
        </div>
    );
};

export default Product;
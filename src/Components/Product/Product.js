import React from 'react';

const Product = ({ product }) => {
    const { img, price, name, catagory, id } = product
    return (
        <div>
            <img src={img} alt="" />
        </div>
    );
};

export default Product;
import React from 'react';

const Product = ({product}) => {
    return (
        <div style={{backgroundColor: 'lightgrey'}} className="p-3 m-3">
            <h5>{product.name}</h5>
            <button className="btn btn-primary">Add to Cart</button>
        </div>
    );
};

export default Product;
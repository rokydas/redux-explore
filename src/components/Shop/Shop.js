import React from 'react';
import Product from '../Product/Product';

const Shop = () => {

    const products = [
        {name: 'Asus Laptop', id: 1},
        {name: 'Dell Laptop', id: 2},
        {name: 'Lenevo Laptop', id: 3},
        {name: 'Samsung Laptop', id: 4},
        {name: 'New Laptop', id: 5},
    ]

    return (
        <div className="border m-5">
            <h3 className="text-center">Shop</h3>
            {
                products.map(pd => <Product product={pd} key={pd.id} />)
            }
        </div>
    );
};

export default Shop;
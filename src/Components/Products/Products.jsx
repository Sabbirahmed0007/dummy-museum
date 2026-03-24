import React from 'react';
import Product from './Product';

const Products = ({ products }) => {
    console.log(products);
    
    return (
        <div>
            <h1>{products.length} </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5'>
                {products.map(product=><Product key={product.id} product={product}></Product>)}
            </div>
        </div>
    );
};

export default Products;
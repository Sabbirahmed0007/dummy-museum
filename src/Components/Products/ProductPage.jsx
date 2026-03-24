import React from 'react';
import { useLoaderData } from 'react-router';

const ProductPage = () => {

    const product = useLoaderData();
    console.log(product);
    const { id, created_data, image, name, quote, views, short_details, key_features, long_details } = product
    

    return (
        <div>
            
        </div>
    );
};

export default ProductPage;
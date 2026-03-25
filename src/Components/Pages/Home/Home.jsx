import React from 'react';
import Hero from '../Hero/Hero';
import Products from '../../Products/Products';
import { useLoaderData } from 'react-router';

const Home = () => {
    

    const products = useLoaderData()
    // console.log(products);
    

    return (
        <div className=' space-y-5 px-6 mb-6 box-border  '>
            <Hero></Hero>
            <Products products={products}></Products>
            
            
        </div>
    );
};

export default Home;
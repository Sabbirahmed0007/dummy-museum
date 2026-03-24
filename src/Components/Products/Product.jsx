import React from 'react';
import { Link } from 'react-router';

const Product = ({ product }) => {


    const {id, created_data, image, name, quote, views, short_details, key_features, long_details } = product




    return (
        <div>
            <div className="card bg-base-100 shadow-sm mx-auto box-border p-4">
                <figure>
                    <img
                        className='h-72 w-full object-cover object-top hover:scale-105 transition-all hover:-rotate-2'
                        src={image}
                        alt={ name} />
                </figure>
                <div className="card-body">
                    <h2 className="card-title h-12">{name} </h2>
                    <p  className='lg:h-14'>{ short_details}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/idea/${id}`}  className="btn btn-secondary w-full btn-outline hover:text-base-300">Buy Now</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;
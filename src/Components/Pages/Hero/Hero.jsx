import React from 'react';
import { Link } from 'react-router';

const Hero = () => {
    return (
        <div>
            <div className='carousel lg:min-h-screen relative rounded-lg'>
                <div className=' carousel-item w-full '>

                    <img className='w-full' src="https://ucarecdn.com/521746bf-be02-4f5b-88ce-eb17479ae4a5/image.png" alt="" />
                </div>
                <div className='absolute inset-0 bg-black/50 flex items-center justify-start'>
                    <div className='max-w-xl font-news px-6 text-base-200'>
                        <h1 className=' text-2xl lg:text-4xl font-bold italic'>Welcome to the <br /> museum</h1>
                        <p className='italic text-base-300'>Discover the most weirdest and most useless intentions ever created.</p>
                        <div>
                            <Link className=' btn btn-secondary'>View Details</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
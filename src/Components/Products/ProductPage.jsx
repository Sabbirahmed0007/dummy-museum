import { Eye, Star, StarIcon, Stars } from 'lucide-react';
import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import { addUnwantedIdeas, addWantedIdeas, isUnwantedIdeas, isWantedIdeas } from '../Utility/localStorage';
import toast from 'react-hot-toast';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';

const ProductPage = () => {

    const [showMore, setShowMore] = useState(false);
    const [isTrue, setIsTrue] = useState(false);

    const product = useLoaderData();
    console.log(product);
    const { id, created_date, image, name, quote, views, short_details, key_feature, long_details, rating } = product





    //event for wanted ideas
    const handleWanThis = (id) => {
        console.log(id);

        // setIsTrue(true)

        if (isWantedIdeas(id)) {

            toast.error(`This products is already in your wanted list`);
            return;
        }
        if (isUnwantedIdeas(id)) {

            toast.error(`This products is already marked as unwanted`);
            // setIsTrue(true)
            return;
        }


        Confirm.show(
            'Are you sure?',
            'This product will be added to your wanted list?',
            'Yes',
            'No',
            () => {
                addWantedIdeas(id);
                toast.success(`You added ${name} to the list successfully`)
            },
        );



        

        

    }



    // event for unwanted ideas

    const handleDontWantThis = (id) => {

        if (isWantedIdeas(id)) {

            toast.error(`This products is already in your wanted list`);
            return;
        }

        if (isUnwantedIdeas(id)) {

            toast.error(`This products is already marked as unwanted`);
            return;
        }


        Confirm.show(
            'Are you sure?',
            'This product will be added to your unwanted list?',
            'Yes',
            'No',
            () => {
                addUnwantedIdeas(id);
                toast.success('You marked as unwanted')
            },  
        );


    }



    return (
        // <div className="max-w-3xl mx-auto bg-base-100 shadow-xl rounded-2xl overflow-hidden mt-10">

        //     {/* Image */}
        //     <figure>
        //         <img src={image} alt={name} className="w-full object-cover" />
        //     </figure>

        //     {/* Content */}
        //     <div className="p-6 space-y-4">

        //         {/* Title + Views */}
        //         <div className="flex justify-between items-center">
        //             <h2 className="text-2xl font-bold">{name}</h2>
        //             <span className="badge badge-success">{views} views</span>
        //         </div>

        //         {/* Quote */}
        //         <p className="italic text-gray-500">"{quote}"</p>

        //         {/* Date */}
        //         <p className="text-sm text-gray-400">
        //             Created on: {created_date}
        //         </p>

        //         {/* Short Details */}
        //         <p className="text-base">{short_details}</p>

        //         {/* Key Features */}
        //         <div>
        //             <h3 className="font-semibold text-lg mb-2">Key Features: <span className='font-medium italic'>{key_feature} </span></h3>

        //         </div>
        //         <div>
        //             <p className='text-yellow-600 flex items-center gap-2'>Rating : { rating}<StarIcon></StarIcon></p>
        //         </div>
        //         {/* Long Details (toggle) */}
        //         <div>



        //             <div>
        //             Details: {showMore ? 
        //                 <p className="mt-3 text-gray-600">{long_details}</p>: <p className="mt-3 text-gray-600">{long_details.slice(0, 40)}...</p> 
        //             }
        //             </div>
        //             <button
        //                 onClick={() => setShowMore(!showMore)}
        //                 className="btn btn-sm btn-outline"
        //             >
        //                 {showMore ? "Show Less" : "Read More"}
        //             </button>


        //         </div>

        //     </div>
        // </div>
        <main className="px-6 my-10">
            <article className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 rounded-2xl bg-base-100 border border-base-300 shadow-sm p-5 md:p-8">
                <figure className="rounded-xl overflow-hidden bg-base-200 h-85 md:h-140">
                    <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover object-center"
                    />
                </figure>

                <section className="space-y-5">
                    <div>
                        <h1 className="font-newsreader text-4xl md:text-6xl font-extrabold italic text-primary mt-2">
                            {name}
                        </h1>
                        <p className="mt-3 text-lg text-base-content/80">
                            {short_details}
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                        <div className="rounded-xl bg-base-200 p-4">
                            <p className="text-xs uppercase text-base-content/60">Rating</p>
                            <div className="mt-1 flex items-center gap-2 text-lg font-semibold">
                                <Star size={18} className="text-warning fill-warning" />
                                <span>{rating}</span>
                            </div>
                        </div>

                        <div className="rounded-xl bg-base-200 p-4">
                            <p className="text-xs uppercase text-base-content/60">Views</p>
                            <div className="mt-1 flex items-center gap-2 text-lg font-semibold">
                                <Eye size={18} />
                                <span>
                                    {new Intl.NumberFormat("en-US", {
                                        notation: "compact",
                                    }).format(views)}
                                </span>
                            </div>
                        </div>

                        <div className="rounded-xl bg-base-200 p-4 col-span-2 sm:col-span-1">
                            <p className="text-xs uppercase text-base-content/60">Created</p>
                            <p className="mt-1 text-lg font-semibold">{created_date}</p>
                        </div>
                    </div>

                    <div>
                        <h2 className="font-newsreader text-2xl font-bold text-primary italic">
                            Why It Is Iconic
                        </h2>
                        <p className="mt-2 leading-7 text-base-content/85">
                            {long_details}
                        </p>
                    </div>
                    <p>
                        <span className="font-semibold">Key Feature:</span> {key_feature}
                    </p>
                    <div className="space-x-2">
                        <button
                            to="/"
                            className="btn btn-accent"
                            // disabled={isTrue && true}
                            onClick={() => handleWanThis(id)}
                        >
                            I Actually Want This
                        </button>
                        <button
                            to="/"
                            className="btn btn-accent btn-outline"

                            onClick={() => handleDontWantThis(id)}
                        >
                            I Don't Want This
                        </button>
                    </div>
                    <div className="rounded-xl border border-base-300 bg-base-200/60 p-4 space-y-3">
                        <blockquote className="border-l-4 border-accent pl-4 italic text-base-content/80">
                            {quote}
                        </blockquote>
                    </div>
                </section>
            </article>
        </main>
    );
};

export default ProductPage;
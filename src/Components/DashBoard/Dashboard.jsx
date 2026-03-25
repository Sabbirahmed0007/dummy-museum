import React from 'react';
import { useLoaderData } from 'react-router';
import { getUnwantedIdeasId, getWantedIdeasId } from '../Utility/localStorage';
import { Heart, TheaterIcon, ThumbsDown } from 'lucide-react';

const Dashboard = () => {

    const products = useLoaderData();


    const wantedIds = getWantedIdeasId();
    const unWnatedIds = getUnwantedIdeasId();
    

    const wantedCount = wantedIds.length;
    const unWantedcount = unWnatedIds.length;
    const totalCount = products.length;



    return (
        <div className='p-6 box-border space-y-5'>
            <h1 className='italic font-news text-accent text-4xl font-bold'>DashBoard</h1>

            {/* Dashboard Contents */}

            <div className=' flex flex-col lg:flex-row items-center gap-5'>
                {/* Stats */}
                {/* stat one */}
                <div className='stat bg-base-300 rounded-box '>

                    {/* stat figure */}
                    <div className='stat-figure'>
                        <div>
                            <Heart></Heart>
                        </div>
                    </div>
                    {/* stat title */}
                    <div className='stat-title'>
                        Wanted items
                    </div>
                    {/* stat value */}
                    <div className='stat-value '>
                        {wantedCount}
                    </div>
                </div>

                {/* stat two */}
                <div className='stat bg-base-300 rounded-box '>

                    {/* stat figure */}
                    <div className='stat-figure'>
                        <div>
                            <ThumbsDown></ThumbsDown>
                        </div>
                    </div>
                    {/* stat title */}
                    <div className='stat-title'>
                        Unwanted items
                    </div>
                    {/* stat value */}
                    <div className='stat-value '>
                        {unWantedcount}
                    </div>
                </div>
                {/* stat total */}
                <div className='stat bg-base-300 rounded-box '>

                    {/* stat figure */}
                    <div className='stat-figure'>
                        <div>
                            <TheaterIcon></TheaterIcon>
                        </div>
                    </div>
                    {/* stat title */}
                    <div className='stat-title'>
                        Total items
                    </div>
                    {/* stat value */}
                    <div className='stat-value '>
                        {totalCount}
                    </div>
                </div>
               

            </div>


            



        </div>
    );
};

export default Dashboard;
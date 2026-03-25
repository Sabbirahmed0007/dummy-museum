import React from 'react';
import { useLoaderData } from 'react-router';
import { getUnwantedIdeasId, getWantedIdeasId } from '../Utility/localStorage';
import { Heart, TheaterIcon, ThumbsDown } from 'lucide-react';
import { BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, PieChart, Pie, Legend } from 'recharts';

const Dashboard = () => {

    const products = useLoaderData();


    const wantedIds = getWantedIdeasId();
    const unWnatedIds = getUnwantedIdeasId();


    const wantedCount = wantedIds.length;
    const unWantedcount = unWnatedIds.length;
    const totalCount = products.length;

    const barData = products.sort((a, b) => b.views - a.views).slice(0, 7).map(p => {
        const name = p.name;
        const views = p.views;
        return { name, views };
    });
    console.log(barData);

    const pieData = [
        
        {
            name: "Wanted",
            value: wantedCount,
            fill: "green",
        },
        {
            name: "Unwanted",
            value: unWantedcount,
            fill: "maroon",
        },
        {
            name: "Total",
            value: totalCount,
            fill: "skyblue",
        }
    ]




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


            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 '>

                {/* Bar charts */}
                <div className=' p-4 bg-base-200 rounded-box  overflow-auto  text-secondary '>

                    <ResponsiveContainer height={400}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <BarChart data={barData}>
                            <Legend></Legend>
                            <Tooltip></Tooltip>
                            <XAxis dataKey={"name"}></XAxis>
                            <YAxis fill='skyblue' dataKey={"views"} tickFormatter={(v) => (
                                new Intl.NumberFormat("en-us", {
                                    notation: "compact"
                                }).format(v)
                            )}></YAxis>
                            <Bar dataKey={'views'} fill='accent' color='skyblue' radius={[4, 4, 0, 0]}

                            ></Bar>

                        </BarChart>

                    </ResponsiveContainer>
                </div>

                {/* Pie charts    */}
                <div className=' p-4 bg-base-200 rounded-box  overflow-auto  '>

                    <ResponsiveContainer height={400}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <PieChart  data={pieData}>
                            <Tooltip></Tooltip>
                            <Pie dataKey={"value"}></Pie>
                            <Legend></Legend>
                        </PieChart>
                        

                    </ResponsiveContainer>
                </div>

            </div>



        </div>
    );
};

export default Dashboard;
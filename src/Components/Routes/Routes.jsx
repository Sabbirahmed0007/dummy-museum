import React from 'react';
import { createBrowserRouter } from "react-router";
import Layout from '../Layout/Layout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Collections from '../Pages/Collections/Collections';
import axios from 'axios';
import ProductPage from '../Products/ProductPage';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index:true,
                path: '/',
                Component: Home,
                loader: async() => {
                    const res = await axios.get('/data.json');


                    // console.log(res.data);
                    return res.data;
                    
                }
            },
            {
                path: '/idea/:id',
                element: <ProductPage></ProductPage>,
                loader: async({ params }) => {
                    const res = await axios.get(`/data.json`);
                    
                    
                    const idea = res.data.find(product =>parseInt( product.id) === parseInt( params.id));
                    // console.log(idea);
                    
                    return idea;
                }
            },
            {
                path: '/collections',
                element:<Collections></Collections>
            }
        ]
    },
]);
export default Routes;
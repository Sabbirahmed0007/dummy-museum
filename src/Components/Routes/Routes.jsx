import React from 'react';
import { createBrowserRouter } from "react-router";
import Layout from '../Layout/Layout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index:true,
                path: '/',
                Component:Home,
            }
        ]
    },
]);
export default Routes;
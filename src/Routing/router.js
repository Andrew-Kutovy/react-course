import {createBrowserRouter} from "react-router-dom";
import React from "react";
import {MainLayout} from '../layouts/MainLayout'
import {PostsPage} from "../pages/PostsPage";
import {CommentsPage} from "../pages/CommentsPage";
import {CarsPage} from "../pages/CarsPage";

let router = createBrowserRouter ([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <PostsPage/>
            },
            {
                path: '/comments',
                element: <CommentsPage/>
            },
            {
                path: '/cars',
                element: <CarsPage/>
            }
        ]
    }
])

export {router} ;
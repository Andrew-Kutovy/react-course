import {createBrowserRouter} from "react-router-dom";
import React from "react";

import MainLayout from "./layouts/MainLayout/MainLayout";
import {ListPage, GenresPage, DetailsPage, NotFoundPage } from "./pages";

let router= createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            {
                path: 'list',
                element: <ListPage/>
            },
            {
                path: 'genres',
                element: <GenresPage/>
            },
            {
                path: 'details',
                element: <DetailsPage/>,
                children: [
                    {
                        path: ''  // ...!!!!!!!!!!!!!!!!!!!!!!!!!!!!
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])

export {router};
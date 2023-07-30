import {createBrowserRouter} from "react-router-dom";
import React from "react";

import MainLayout from "../layouts/MainLayout/MainLayout";
import {MoviesPage, GenresPage, DetailsPage, NotFoundPage } from "../pages";
import UserPage from "../pages/UserPage/UserPage";
import GenreMoviesPage from "../components/GenreBadge/GenreMoviesPage/GenreMoviesPage";

let router= createBrowserRouter([
    {
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <MoviesPage/>
            },
            {
                path: '/genres',
                element: <GenresPage/>
            },
            {
                path: 'details/:movieId',
                element: <DetailsPage/>
            },
            {
                path: 'user',
                element: <UserPage/>
            },
            {
                path: 'genres/:genreId',
                element: <GenreMoviesPage />
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])

export {router};
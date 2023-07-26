import React from 'react';
import {Outlet} from "react-router-dom";
import Header from "../../components/Header/Header";
import MoviesPage from "../../containers/MoviesPage/MoviesPage";



const MainLayout = () => {
    return (
        <div>
            <Header/>
            <MoviesPage/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
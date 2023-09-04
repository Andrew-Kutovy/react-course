import React from 'react';
import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <ul>
            <li><Link to={'users'}>Users</Link></li>
            <li><Link to={'posts'}>posts</Link></li>
            <li><Link to={'comments'}>comments</Link></li>
            <Outlet/>
        </ul>
    );
};

export default MainLayout;
import React from 'react';
import {Link,  Outlet} from "react-router-dom";

const MainLayout = () => {

    return (
        <div>
            MainLayout
            <ul>
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'comments'}>comments</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
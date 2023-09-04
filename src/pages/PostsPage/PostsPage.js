import React from 'react';
import {Outlet, useLoaderData} from "react-router-dom";

import PostComponent from "../../components/UsersContainer/PostComponent/PostComponent";

const PostsPage = () => {
    const posts = useLoaderData()

    return (<>
            <hr/>
            <Outlet/>
            <hr/>
            <ul>
                {posts.map(post=> <PostComponent key={post.id} post={post}/>)}
            </ul>
        </>

    );
};

export default PostsPage;
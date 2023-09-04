import React from 'react';
import {useLoaderData, useLocation} from "react-router-dom";

const PostsOfUsers = () => {
    const {state} = useLocation()

    const posts = useLoaderData()

    return (
        <div>
            <p>{JSON.stringify(state)}</p>
            <hr/>
            <ul>
                {posts.map(post => <li key={post.id}>{post.title}</li>)}
            </ul>

        </div>
    );
};

export default PostsOfUsers;
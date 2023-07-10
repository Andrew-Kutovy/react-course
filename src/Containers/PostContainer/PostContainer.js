import React, {useEffect, useState} from 'react';
import PostComponent from "./PostComponent/PostComponent";

const PostContainer = () => {
    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => setPosts(posts))
    }, [])

    return (
        <>
            {posts.map((post, id)=> <PostComponent key={id} post={post}/>) }
        </>
    );
};

export default PostContainer;
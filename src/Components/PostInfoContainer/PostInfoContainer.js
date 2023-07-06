import React, {useEffect, useState} from 'react';
import PostInfo from "../PostInfoContainer/PostInfoContainer";
import {postId} from "../PostContainer/PostContainer";

const PostInfoContainer = () => {
    console.log(postId)

    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(res => res.json())
        .then(post => console.log(post))

    // let [posts, setPosts] = useState([])
    //
    //     useEffect(()=>{
    //         fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    //             .then(res => res.json())
    //             .then(post => console.log(posts))
    //     }, [])


    return  <>
        {/*<div>*/}
        {/*    <h1 style={{color:'red', textAlign:'center'}}>Post's info:</h1>*/}
        {/*    <div className="posts">*/}
        {/*        <PostInfo />*/}
        {/*    </div>*/}
        {/*</div>*/}
    </>
};

export default PostInfoContainer;
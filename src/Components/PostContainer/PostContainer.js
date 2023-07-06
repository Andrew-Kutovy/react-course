import React, {useEffect, useState} from 'react';
import Post from "./PostComponent/Post";

export let postId;
export const PostContainer = () => {

    let [posts, setPosts] = useState([])
        useEffect(()=>{
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(res => res.json())
                .then(posts => setPosts(posts))
        }, [])


let show = (val) => {
        postId = val
        alert(`id = ${postId}`)
    console.log(postId)
}



    return <>
        <div>
            <h1 style={{color:'red', textAlign:'center'}}>Posts list:</h1>
            <div className="posts">
                {posts.map((post, id) => {
                    return <Post key={id} post={post} show={show}/>
                })}
            </div>
        </div>
    </>
};

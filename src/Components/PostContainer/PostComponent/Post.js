import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    let {post, show} = props
    return (

        <div className={styles.post}>
            <div>
                 <p> id: {post.id}  {post.title}</p>
                <button onClick={()=> show(post.id)}>Show more</button>
            </div>
        </div>
    );
};

export default Post;
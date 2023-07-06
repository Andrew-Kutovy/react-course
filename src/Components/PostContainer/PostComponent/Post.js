import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    let {post} = props
    return (

        <div className={styles.post}>
            <div>
                 <p> id: {post.id}  {post.title}</p>
            </div>
        </div>
    );
};

export default Post;
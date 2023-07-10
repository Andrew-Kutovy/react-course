import React, {useState} from 'react';
import styles from './PostComponent.module.css';

const PostComponent = (props) => {
    const [show, setShow] = useState(true);
    let {post} = props
    let block = (
        <div className={styles.container}>
            <p>id: {post.id}</p>
            <p>{post.title}</p>
            <button onClick={()=> setShow(false)}>show more</button>
        </div>)
    let detail = (
        <div className={styles.container}>
            <p>user's id: {post.userId}</p>
            <p>id: {post.id}</p>
            <p>{post.title}</p>
            <p>{post.body}</p>
            <button onClick={()=> setShow(true)}>hide</button>
        </div>
    )
    return show ? block : detail;
};

export default PostComponent;
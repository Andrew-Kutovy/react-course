import React, { useState } from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    const { post, show } = props;
    const [expanded, setExpanded] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
        setIsExpanded(!isExpanded);
    };

    return (
        <div className={styles.post}>
            <div>
                <p> id: {post.id} {post.title}</p>
                {expanded ? (
                    <div>
                        <p>{post.userId}</p>
                        <p>{post.body}</p>
                        <button onClick={toggleExpand}>Hide</button>
                    </div>
                ) : (
                    <button onClick={toggleExpand}>Show more</button>
                )}
            </div>
        </div>
    );
};

export default Post;
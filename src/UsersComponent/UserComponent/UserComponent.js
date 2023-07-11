import React, { useState } from 'react';
import styles from './UserComponent.module.css';

const UserComponent = (props) => {
    const { user } = props;
    const [posts, setPosts] = useState([]);
    const [showPosts, setShowPosts] = useState(false);

    const fetchPosts = () => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then((res) => res.json())
            .then((posts) => setPosts(posts));
        setShowPosts(true);
    };

    const togglePosts = () => {
        if (showPosts) {
            setPosts([]);
        }
        setShowPosts(!showPosts);
    };

    return (
        <div className={styles.container}>
            <h2>{user.name}</h2>
            {showPosts ? (
                <>
                    <button onClick={togglePosts}>Hide posts</button>
                    {posts.length > 0 && (
                        <ul>
                            {posts.map((post) => (
                                <li key={post.id}>{post.title}</li>
                            ))}
                        </ul>
                    )}
                </>
            ) : (
                <button onClick={fetchPosts}>Show posts</button>
            )}
        </div>
    );
};

export default UserComponent;
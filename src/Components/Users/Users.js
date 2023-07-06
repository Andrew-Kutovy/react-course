import React, { useEffect, useState } from 'react';

const Users = () => {
    const [users, setUsers] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
            })
            .catch((error) => {
                console.error('Error fetching users:', error);
            });
    }, []);

    const fetchPosts = (userId) => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => {
                const postsArray = Array.from(data); // Преобразование данных о постах в массив
                setPosts(postsArray);
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    };

    const handleButtonClick = (userId) => {
        setSelectedUserId(userId);
        fetchPosts(userId);
    };

    return (
        <div>
            <h1>Users</h1>
            {users.map((user) => (
                <div key={user.id}>
                    <p>User id: {user.id}</p>
                    <p>User Name: {user.name}</p>
                    <p>User Email: {user.email}</p>
                    <button onClick={() => handleButtonClick(user.id)}>Show Posts</button>
                    {selectedUserId === user.id && (
                        <div>
                            <h2>Posts by {user.name}</h2>
                            <ul>
                                {posts.map((post) => (
                                    <li key={post.id}>
                                        <p>Post Title: {post.title}</p>
                                        <p>Post Body: {post.body}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default Users;
import React from 'react';
import {useLoaderData, useNavigate} from "react-router-dom";
import PostsOfUsers from "../PostsOfUsers/PostsOfUsers";

const UserComponent = ({user}) => {

    const navigate = useNavigate()

    // const posts = useLoaderData()
    const showUsersPosts = () => {
        navigate({pathname: `${user.id}`}, {state: {...user}})
    }
    return (
        <div>
            {user.name}
            <button onClick={showUsersPosts}>show posts</button>
        </div>
    );
};

export default UserComponent;
import React from 'react';
import {useLoaderData} from "react-router-dom";
import UserComponent from "../../components/UsersContainer/UserComponent/UserComponent";


const UsersPage = () => {

    const users = useLoaderData()

    return (
        <div>
            UsersPage
            <hr/>
            {users.map(user => <UserComponent key={user.id} user={user}/>)}
        </div>
    );
};

export default UsersPage;
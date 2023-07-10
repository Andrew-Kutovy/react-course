import React from 'react';
import {users} from "../../accets/users";
import UserComponent from "./UserComponent/UserComponent";

const UserContainer = () => {
    return (
        <div>
            {users.map((user, id) => (<UserComponent key={id} user={user}/>))}
        </div>
    );
};

export default UserContainer;
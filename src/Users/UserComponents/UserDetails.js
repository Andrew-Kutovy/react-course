import React from 'react';

const UserDetails = (props) => {
    let {user} = props
    return (
        <ul> Details:
            <li>{user.id}</li>
            <li>{user.name}</li>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>{user.phone}</li>
            <li>{user.website}</li>
        </ul>
    );
};

export default UserDetails;
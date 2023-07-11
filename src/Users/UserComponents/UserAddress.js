import React from 'react';

const UserAddress = (props) => {
    let {user} = props
    return (
        <ul>adresss:
            <li>{user.address.street}</li>
            <li>{user.address.suite}</li>
            <li>{user.address.city}</li>
        </ul>
    );
};

export default UserAddress;
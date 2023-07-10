import React from 'react';
import styles from "./UserComponent.module.css"

const UserComponent = (props) => {
    let {user} = props
    return (
        <div className={styles.container}>
            <p>{user.id}</p>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.address.city}</p>
        </div>
    );
};

export default UserComponent;
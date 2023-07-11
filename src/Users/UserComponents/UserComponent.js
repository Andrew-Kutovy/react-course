import React from 'react';
import styles from './UserComponent.module.css';
import UserDetails from "./UserDetails";
import UserAddress from "./UserAddress";
import Company from "./Company";

const UserComponent = (props) => {
    let {user} = props
    return (
        <div className={styles.container}>
            <UserDetails user={user}/>
            <UserAddress user={user}/>
            <Company user={user}/>
        </div>
    );
};

export default UserComponent;
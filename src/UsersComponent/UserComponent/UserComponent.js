import React from 'react';
import styles from './UserComponent.module.css';

const UserComponent = (propt) => {
    let {user} = propt
    return (
        <div className={styles.container}>
            <p>{user.name}</p>
            <button onClick={()=>{
                console.log('click')
            }}>show posts</button>
        </div>
    );
};

export default UserComponent;
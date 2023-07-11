import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent/UserComponent";
import styles from './UsersComponent.module.css'

const UsersComponent = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users))
    }, [])


    return (
        <div className={styles.container}>
            {users.map((user, id) => <UserComponent key={id} user={user} />)}
        </div>

    );
};

export default UsersComponent;
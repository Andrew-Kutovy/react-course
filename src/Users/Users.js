import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponents/UserComponent";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users =>  setUsers(users))
    }, [])


    return (
        <>
            <h2>property drill</h2>
            {users.map((user, id) => <UserComponent key={id} user={user} />)}

        </>
    );
};

export default Users;
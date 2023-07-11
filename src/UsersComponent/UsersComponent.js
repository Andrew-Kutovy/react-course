import React, {useEffect, useState} from 'react';
import UserComponent from "./UserComponent/UserComponent";

const UsersComponent = () => {
    const [users, setUsers] = useState([])


    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(users => setUsers(users))
    }, [])


    return (<>{users.map((user) => (<UserComponent key={user.id} user={user} />))}</>)
};

export default UsersComponent;
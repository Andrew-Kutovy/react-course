import React from 'react';

const Company = (props) => {
    let {user} = props
    return (
        <ul>Company:
            <li>{user.company.name}</li>
            <li>{user.company.catchPhrase}</li>
            <li>{user.company.bs}</li>
        </ul>
    );
};

export default Company;
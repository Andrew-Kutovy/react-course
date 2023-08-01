import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <NavLink to={'/'}>main</NavLink>
            <NavLink to={'/posts'}>posts</NavLink>
            <NavLink to={'/comments'}>comments</NavLink>
            <NavLink to={'/cars'}>cars</NavLink>
        </div>
    );
};

export default Header;
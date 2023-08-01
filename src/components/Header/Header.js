import React from 'react';
import {NavLink} from 'react-router-dom';

import style from './Header.module.css'

const Header = () => {
    return (
        <div className={style.Header}>
            <NavLink to={'/'}>posts</NavLink>
            <NavLink to={'/comments'}>comments</NavLink>
            <NavLink to={'/cars'}>cars</NavLink>
        </div>
    );
};

export default Header;
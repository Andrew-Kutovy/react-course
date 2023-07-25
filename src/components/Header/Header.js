import React from 'react';

import css from './Header.module.css'
import {NavLink} from "react-router-dom";

//
const Header = () => {
    return (
        <div className={css.Header}>
            <NavLink to={'list'}>List</NavLink>
            <NavLink to={'genres'}>Genres</NavLink>
            <NavLink to={'details'}>Details</NavLink>
        </div>
    );
};

export default Header;
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import css from './Header.module.css';

const Header = () => {
    const location = useLocation();

    // Функция для проверки, является ли текущий путь страницей "Детали"
    const isDetailsPage = () => {
        return location.pathname.includes('/details');
    };

    return (
        <div className={css.Header}>
            <NavLink to="/">Main</NavLink>
            <NavLink to="/genres">Genres</NavLink>
            <NavLink to="/user">User Info</NavLink>
            {isDetailsPage() && <NavLink to="/details">Details</NavLink>}
        </div>
    );
};

export default Header;

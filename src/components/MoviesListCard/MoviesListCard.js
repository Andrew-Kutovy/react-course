import React from 'react';
import { Link } from 'react-router-dom';
import style from './MoviesListCard.module.css';

const MoviesListCard = ({ film }) => {
    return (
        <Link to={`/details/${film.id}`} className={style.card}>
            <h5>{film.title}</h5>
            <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt="poster" />
            <p>{film.overview}</p>
            {/* Убираем ссылку "View Details", так как весь блок теперь является ссылкой */}
        </Link>
    );
};

export default MoviesListCard;

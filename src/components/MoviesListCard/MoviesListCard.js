import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import style from './MoviesListCard.module.css';

const MoviesListCard = ({ film }) => {
    console.log(film)
    return (
        <Link to={`/details/${film.id}`} className={style.card}>
            <h5>{film.title}</h5>
            <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt="poster" />
            <p>{film.overview}</p>
            <StarRatings
                rating={film.vote_average / 2} // Разделим на 2, так как максимальный рейтинг - 10, а максимальное количество звезд - 5
                starRatedColor="#f1c40f" // Цвет активных звезд (здесь используется желтый цвет)
                starEmptyColor="#dcdcdc" // Цвет неактивных звезд (здесь используется светло-серый цвет)
                starDimension="30px" // Размер звезд (по умолчанию 40px)
                starSpacing="2px" // Расстояние между звездами (по умолчанию 0)
            />
        </Link>
    );
};

export default MoviesListCard;

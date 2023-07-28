import React from 'react';
import { Link } from 'react-router-dom';

const MoviesListCard = ({ film }) => {
    return (
        <div>
            <h5>{film.title}</h5>
            <p>{film.overview}</p>
            <Link to={`/details/${film.id}`}>View Details</Link>
            <img src={`https://image.tmdb.org/t/p/w300${film.poster_path}`} alt="poster" />
        </div>
    );
};

export default MoviesListCard;

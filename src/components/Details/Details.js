// src/pages/Details.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import DetailService from '../../services/detailService';

const Details = () => { // Заменили "DetailsPage" на "Details"
    const { movieId } = useParams();
    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        DetailService.getById(movieId)
            .then(({ data }) => {
                setMovieDetails(data);
            })
            .catch((error) => {
                console.error('Failed to fetch movie details', error);
            });
    }, [movieId]);

    if (!movieDetails) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>{movieDetails.title}</h1>
            <p>{movieDetails.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt="poster" />
        </div>
    );
};

export default Details;

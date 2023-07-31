import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import DetailService from '../../services/detailService';
import style from './MovieInfo.module.css';

const MovieInfo = () => {
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
        <div className={style.container} >
            <img className={style.poster} src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt="poster"/>
            <div>
                <h1>{movieDetails.title}</h1>
                <StarRatings rating={movieDetails.vote_average / 2} starRatedColor="#f1c40f" starEmptyColor="#dcdcdc" starDimension="30px" starSpacing="2px"/>
                <h3>Genres:</h3>
                {movieDetails.genres.map((genre) => (
                    <Link className={style.genres} key={genre.id} to={`/genres/${genre.id}`}>{genre.name} </Link>
                ))}
                <h3>{movieDetails.tagline}</h3>
                <h3>release date: {movieDetails.release_date}</h3>
                <p>{movieDetails.overview}</p>
            </div>
        </div>
    );
};

export default MovieInfo;

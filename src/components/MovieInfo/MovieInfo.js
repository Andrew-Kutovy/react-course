
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

import DetailService from '../../services/detailService';

const MovieInfo = () => { // Заменили "DetailsPage" на "MovieInfo"
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
            {/* Добавляем компонент StarRatings и передаем в него свойство rating */}
            <StarRatings
                rating={movieDetails.vote_average / 2} // Разделим на 2, так как максимальный рейтинг - 10, а максимальное количество звезд - 5
                starRatedColor="#f1c40f" // Цвет активных звезд (здесь используется желтый цвет)
                starEmptyColor="#dcdcdc" // Цвет неактивных звезд (здесь используется светло-серый цвет)
                starDimension="30px" // Размер звезд (по умолчанию 40px)
                starSpacing="2px" // Расстояние между звездами (по умолчанию 0)
            />
            <p>{movieDetails.overview}</p>
            <img src={`https://image.tmdb.org/t/p/w300${movieDetails.poster_path}`} alt="poster" />
        </div>
    );
};

export default MovieInfo;

import React, { useEffect, useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

import { apiService } from "../../../services";
import { urls } from "../../../constants";

const GenreMoviesPage = () => {
    const { genreId } = useParams();
    const [movies, setMovies] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const genreName = searchParams.get('name') || '';

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await apiService.get(urls.list, {
                    params: {
                        with_genres: genreId,
                    },
                });
                setMovies(response.data.results);
            } catch (error) {
                console.error('Failed to fetch movies', error);
            }
        };
        fetchMovies();
    }, [genreId]);

    return (
        <div>
            <div>
                <h1>{genreName}</h1>
                {movies.map((movie) => (
                    <div key={movie.id}>
                        <Link to={`/details/${movie.id}`}>{movie.title}</Link>
                        <p>{movie.overview}</p>
                        <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="poster" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GenreMoviesPage;

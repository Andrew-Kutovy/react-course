import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {apiService} from "../../../services";
import {urls} from "../../../constants";

const GenreMoviesPage = () => {
    const { genreId } = useParams();
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await apiService.get(urls.list, { // Проверьте, что здесь используется apiService из файла apiService.js
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
            <h1>Genre Movies Page</h1>
            {movies.map((movie) => (
                <div key={movie.id}>
                    {/* Создаем ссылку с путем `/details/:movieId`, где :movieId - это идентификатор фильма */}
                    <Link to={`/details/${movie.id}`}>{movie.title}</Link>
                    <p>{movie.overview}</p>
                </div>
            ))}
        </div>
    );
};

export default GenreMoviesPage;

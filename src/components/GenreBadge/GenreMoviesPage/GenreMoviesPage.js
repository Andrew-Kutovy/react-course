import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
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
                    <h3>{movie.title}</h3>
                    <p>{movie.overview}</p>
                </div>
            ))}
        </div>
    );
};

export default GenreMoviesPage;

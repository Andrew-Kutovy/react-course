import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Импортируем useLocation из react-router-dom
import GenreService from '../../services/genreService';

const GenreBadge = () => {
    const [genres, setGenres] = useState([]);
    const location = useLocation(); // Используем хук useLocation для получения объекта location

    useEffect(() => {
        GenreService.getAll().then(({ data }) => {
            setGenres(data.genres);
        });
    }, []);

    return (
        <div>
            {genres.map((genre) => (
                <div key={genre.id}>
                    <Link to={{ pathname: `/genres/${genre.id}`, state: { genreName: genre.name } }}>
                        {genre.name}
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default GenreBadge;

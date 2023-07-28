import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Импортируем компонент Link
import GenreService from '../../services/genreService';

const GenreBadge = () => {
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        GenreService.getAll().then(({ data }) => {
            setGenres(data.genres);
        });
    }, []);

    return (
        <div>
            {genres.map((genre) => (
                <div key={genre.id}>
                    {/* Создаем ссылку с путем `/genres/:genreId`, где :genreId - это идентификатор жанра */}
                    <Link to={`/genres/${genre.id}`}>{genre.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default GenreBadge;

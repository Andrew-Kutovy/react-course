import React, { useEffect, useState } from 'react';
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
                    <p>{genre.name}</p>
                </div>
            ))}
        </div>
    );
};

export default GenreBadge;

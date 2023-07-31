import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

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
                    <Link to={`/genres/${genre.id}?name=${genre.name}`}>{genre.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default GenreBadge;

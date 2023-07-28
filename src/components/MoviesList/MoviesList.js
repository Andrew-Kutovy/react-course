import React, { useEffect, useState } from 'react';
import listService from '../../services/listService';
import MoviesListCard from "../MoviesListCard/MoviesListCard";

const MoviesList = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        listService.getAll()
            .then(({ data }) => {
                setList(data.results);
                setLoading(false);
            })
            .catch((error) => {
                setError('Failed to fetch data.');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            {list.map((item) => <MoviesListCard key={item.id} film={item}/>)}
        </div>
    );
};

export default MoviesList;

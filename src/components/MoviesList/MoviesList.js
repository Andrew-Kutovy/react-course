import React, { useEffect, useState } from 'react';

import MoviesListCard from "../MoviesListCard/MoviesListCard";
import style from './MoviesList.module.css';
import listService from "../../services/listService";

const MoviesList = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const fetchMovies = async (page) => {
            try {
                const { data } = await listService.getAll(page);
                setList((prevList) => [...prevList, ...data.results]);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch data.');
                setLoading(false);
            }
        };

        fetchMovies(currentPage);
    }, [currentPage]);

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    if (loading) {
        return <div>Loading...</div>;
    }else if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className={style.list}>
            {list.map((item) => (
                <MoviesListCard key={item.id} film={item} />
            ))}
            <div className={style.centerButtonContainer}>
                <button className={style.loadMoreButton} onClick={handleLoadMore}>Load More</button>
            </div>
        </div>
    );
};

export default MoviesList;
import React, {useEffect, useState}  from 'react';
import listService from "../../services/listService";
import MoviesList from "./Components/MoviesList/MoviesList";

const MoviesPage = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        listService.getAll().then(({data})=>setFilms(data))
    }, []);
    console.log(films)

    return (
        <div>
            {Array.isArray(films) ? films.map((film) => <MoviesList key={film.id} film={film} />) : <p>No films available</p>}
        </div>
    );
};

export default MoviesPage;
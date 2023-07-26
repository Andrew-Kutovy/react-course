import React from 'react';

const MoviesList = ({film}) => {
    const {title, release_date} = film
    return (
        <div>
            <p>{title}</p>
            <p>{release_date}</p>
        </div>
    );
};

export default MoviesList;
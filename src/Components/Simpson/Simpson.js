import React from 'react';
import './simpson.css';
const Simpson = (props) => {
    let {name, surname, age, gender, image} = props
    return (
        <div className={'simpson'}>
            <h2>{name} </h2>
            <h3>{surname}</h3>
            <h4>{age} {gender}</h4>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Simpson;
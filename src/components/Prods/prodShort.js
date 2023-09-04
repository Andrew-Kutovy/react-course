import React from 'react';
import {getProdById} from "../../services/product.services";

const ProdShort = ({chosenProd, prod:{id, title, price, description}}) => {
    const showPhotos = () =>  chosenProd(id)

    return (
        <div>
            {id} {title} {price}$
            <p>{description}</p>
            <button onClick={showPhotos}>show photos</button><hr/>
        </div>
    );
};

export default ProdShort;
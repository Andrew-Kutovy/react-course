import React from 'react';
import {getProdById} from "../../services/product.services";

const ProdShort = ({setPhotos, prod:{id, title, price, description}}) => {
    const showPhotos = () => {
        getProdById(id).then(photos=> setPhotos(photos))
    }

    return (
        <div>
            {id} {title} {price}$
            <p>{description}</p>
            <button onClick={()=>showPhotos(id)}>show photos</button><hr/>
        </div>
    );
};

export default ProdShort;
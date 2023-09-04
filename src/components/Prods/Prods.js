import React, {useEffect, useState} from 'react';
import {getProd, getProdById} from "../../services/product.services";
import ProdShort from "./prodShort";
import ProdPhotos from "./prodPhotos";

const Prods = () => {
    const [products, setProducts] = useState([])
    const [photos, setPhotos] = useState(null)

    useEffect(() => {
        getProd().then(({products})=>setProducts([...products]))
    }, []);

    const chosenProd = (id) => getProdById(id).then(photos=> setPhotos(photos))

    return (
        <div>
            {photos && <ProdPhotos photos={photos} setPhotos={setPhotos}/>}
            Prods:
            {products.map(prod => <ProdShort key={prod.id} prod={prod} chosenProd={chosenProd}/>)}
        </div>
    );
};

export default Prods;
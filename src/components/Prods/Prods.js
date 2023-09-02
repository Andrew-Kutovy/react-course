import React, {useEffect, useState} from 'react';
import {getProd} from "../../services/product.services";
import ProdShort from "./prodShort";
import ProdPhotos from "./prodPhotos";

const Prods = () => {
    const [products, setProducts] = useState([])
    const [photos, setPhotos] = useState(null)

    useEffect(() => {
        getProd().then(({products})=>setProducts([...products]))
    }, []);


    return (
        <div>
            {photos && <ProdPhotos photos={photos} setPhotos={setPhotos}/>}
            Prods:
            {products.map(prod => <ProdShort key={prod.id} prod={prod} setPhotos={setPhotos}/>)}
            {/*{photos.map(photo => <ProdPhotos key={photo.id} />)}*/}
        </div>
    );
};

export default Prods;
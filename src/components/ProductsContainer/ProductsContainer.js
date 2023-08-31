import React, {useEffect, useState} from 'react';
import {getProd, getProdById} from "../../services/product.services";
import ProdShort from "./ProdShort/ProdShort";
import ProdPhotos from "./ProdPhotos/ProdPhotos";

const ProductsContainer = () => {
    const [productsAll, setProductsAll] = useState([])
    const [chosenProd, setChosenProd] = useState(null)

    useEffect(() => {
        getProd().then(({products}) => setProductsAll(...[products]))
    }, []);

    const onChoseProd = (id) => {
       getProdById(id).then(info => setChosenProd(info))

       return  console.log(chosenProd)
    }

    return (
        <div>
            <h1>Products:</h1>
            <hr/>
            {chosenProd && <ProdPhotos chosenProd={chosenProd}/>}
            <hr/>
            {productsAll.map(prod => <ProdShort key={prod.id} prod={prod} onChoseProd={onChoseProd}/>)}

        </div>
    );
};

export default ProductsContainer;
import React, {useEffect, useState} from 'react';

import ProductShort from "./ProductShort/ProductShort";
import {getProd, getProdById} from "../../services/product.services";
import ProductDetail from "./ProductDetail/ProductDetail";
import style from './Products.module.css'

const Products = () => {
    const [products, setProducts] = useState([])
    const [detail, setDetail] = useState(null)

    useEffect(() => {
        getProd().then(({products}) => setProducts(prevState => [...products]))
    }, []);

    const chosenProd = (idp) => getProdById(idp).then(info => setDetail({...info}))

    const closeDetail = () => setDetail(null)

    return (
        <div>
            <h1>Products</h1>
            <div className={style.content}>
                <div>
                    <ul>{products.map(prod => <ProductShort key={prod.id} prod={prod} chosenProd={chosenProd}/>)}</ul>
                </div>
                <div className={style.photo}>{ detail && <ProductDetail details={detail} closeDetail={closeDetail}/>}</div>
            </div>


        </div>
    );
};

export default Products;
import React from 'react';

const ProductDetail = ({closeDetail, details:{images, thumbnail}}) => {


    return (
        <div>
            ProductDetail
            <img src={thumbnail} alt=""/>
            {images.map((img, id) => <img key={id} src={img} alt="id"/>)}
            <button onClick={closeDetail}>close</button>
        </div>
    );
};

export default ProductDetail;
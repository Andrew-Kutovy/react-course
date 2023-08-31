import React from 'react';

const ProdPhotos = ({chosenProd: {images}}) => {

    return (
        <div>
            ProdPhotos:
            {images.map((photo, id)=> <img key={id} src={photo} alt="id"/>)}
        </div>
    );
};

export default ProdPhotos;
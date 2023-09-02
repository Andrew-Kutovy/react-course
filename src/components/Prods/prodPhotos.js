import React from 'react';

const ProdPhotos = ({setPhotos, photos:{images}}) => {
    const closer = () => {
      setPhotos(null)
    }

    return (
        <div>
            {images.map((image, id) => <img src={image} key={id} alt="id"/> )}
            <button onClick={closer}>close photos</button>
        </div>
    );
};

export default ProdPhotos;
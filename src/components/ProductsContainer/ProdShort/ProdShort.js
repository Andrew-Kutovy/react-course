import React from 'react';

const ProdShort = ({onChoseProd, prod:{id, title, price, description}}) => {

    const getPhoto = () => onChoseProd(id);

    return (
        <div>
            {id} {title} {price}
            <p>{description}</p>
            <button onClick={getPhoto}>get photo</button><hr/>
        </div>
    );
};

export default ProdShort;
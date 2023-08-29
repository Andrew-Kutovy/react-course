
const ProductShort = ({chosenProd, prod:{id, title, description, price}}) => {

    const getProdDetails = () => chosenProd(id)

    return (
        <li>
            id:{id} <b>{price} $</b>
            <h4>{title}</h4>
            <br/>
            {description} <button onClick={getProdDetails}>show more</button>
            <hr/>
        </li>
    );
};

export default ProductShort;
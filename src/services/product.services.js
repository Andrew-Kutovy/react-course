const getProd = () => {
    return fetch('https://dummyjson.com/products')
        .then(res=>res.json())
}

const getProdById = (idp) => {
    return fetch(`https://dummyjson.com/products/${idp}`)
        .then(res=>res.json())
}

export {getProd, getProdById}
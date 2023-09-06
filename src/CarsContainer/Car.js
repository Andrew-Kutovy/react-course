import React from 'react';
import {carServices} from "../services/carServices";

const Car = ({setTrigger, setCarForUpdate, car}) => {
    const {id, brand, price, year} = car

    const deleteCar = async () =>{
        await carServices.delete(car.id)
        setTrigger(prev => !prev)
    }
    return (
        <div>
            <p>id: {id}</p>
            <p>brand: {brand}</p>
            <p>price: {price}</p>
            <p>year: {year}</p>
            <button onClick={()=>setCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
            <hr/>
        </div>
    );
};

export default Car;
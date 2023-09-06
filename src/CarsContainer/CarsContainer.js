import React, {useEffect, useState} from 'react';
import {carServices} from "../services/carServices";
import Car from "./Car";
import CarForm from "./CarForm";

const CarsContainer = () => {
    const [cars, setCars] = useState([])
    const [trigger, setTrigger] = useState(null)
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carServices.getAll().then(({data}) => setCars(data))
    }, [trigger]);


    return (
        <div>
            <CarForm setTrigger={setTrigger} setCarForUpdate={setCarForUpdate} carForUpdate={carForUpdate}/>
            <hr/>
            {cars.map(car => <Car key={car.id} car={car} setCarForUpdate={setCarForUpdate} setTrigger={setTrigger} />)}
        </div>
    );
};

export default CarsContainer;
import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {carServices} from "../services/carServices";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "../validators/carValidator";

const CarForm = ({setTrigger, carForUpdate, setCarForUpdate}) => {
    const {register, handleSubmit, setValue, reset, formState:{isValid, errors}} =  useForm({
        resolver: joiResolver(carValidator),
        mode: "all"
    })

    useEffect(() => {
        if (carForUpdate) {
            setValue('brand', carForUpdate.brand, {shouldValidate:true})
            setValue('price', carForUpdate.price, {shouldValidate:true})
            setValue('year', carForUpdate.year, {shouldValidate:true})
        }
    }, [carForUpdate]);


    const save = async (car) => {
       await carServices.create(car)
        setTrigger(prev => !prev)
        reset()
    }
    const update = async (car) => {
        await carServices.update(carForUpdate.id, car)
        setTrigger(prev => !prev)
        setCarForUpdate(null)
        reset()
    }

    return (
        <form onSubmit={handleSubmit(carForUpdate?update: save)}>
            <div><input type="text" placeholder={'brand'} {...register('brand')}/></div>
            {errors.brand && <div>{errors.brand.message}</div>}
            <div><input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true,}
            )}/></div>
            {errors.price && <div>{errors.price.message}</div>}
            <div><input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/></div>
            {errors.year && <div>{errors.year.message}</div>}
            <button disabled={!isValid}>{carForUpdate?'update': 'save'}</button>
        </form>
    );
};

export default CarForm;
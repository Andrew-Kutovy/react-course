import {apiCarService} from "./apiCarService";
import {cars} from "../constants/CarsUrls";

const carsService = {
    getAll:()=>apiCarService.get(cars)
}

export {carsService}
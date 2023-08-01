import axios from "axios";
import {baseURL} from "../constants/CarsUrls";

const apiCarService = axios.create({baseURL});

export {apiCarService};
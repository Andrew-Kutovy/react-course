import axios from 'axios';
import {baseURL, token} from "../constants";

const apiService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export {apiService}
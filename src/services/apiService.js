import axios from 'axios';
import {baseURL} from "../constants";

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGIzNGRlYTI0ZTdjYTBmMGVhYTY5OGQyNWNhMGI0OCIsInN1YiI6IjY0YmY3ZGQ3OGVlNDljMDBhYzRjNDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9HSJ6tCf41o3o8Mbw6y_x8JkbjSQ0hbzY1bWJw6EOYQ'
const apiService = axios.create({
    baseURL,
    headers: {
        Authorization: `Bearer ${token}`
    }
})

export {apiService}
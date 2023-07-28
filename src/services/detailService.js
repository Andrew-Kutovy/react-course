import { apiService } from "./apiService";
import { urls } from "../constants";

const DetailService = {
    getById: (id) =>  apiService.get(urls.movieDetail.movieId(id))}

export default DetailService;

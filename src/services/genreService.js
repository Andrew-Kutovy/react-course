
import {apiService} from "./apiService";
import {urls} from "../constants";

const GenreService =  {
    getAll: ()=>apiService.get(urls.genres)
};


export default GenreService;
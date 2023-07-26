import {apiService} from "./apiService";
import {urls} from "../constants";

const ListService =  {
    getAll: ()=>apiService.get(urls.list)
};

export default ListService;
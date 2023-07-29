import {apiService} from "./apiService";
import {urls} from "../constants";

const listService = {
    getAll: (page) => apiService.get(urls.list+`?page=${page}`),
};

export default listService;
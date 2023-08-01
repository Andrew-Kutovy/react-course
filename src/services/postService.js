import {apiService} from "./apiService";
import {urls} from "../constants/urls";

const postsService = {
    getAll:()=>apiService.get(urls.posts)
}

export {postsService};
const baseURL = `https://api.themoviedb.org/3`;

const list = "/movie/upcoming"
const genres = "/genre/movie/list"
const movieDetail = `/movie`

const urls = {
    list,
    genres,
    movieDetail:{
        movieId:(id)=>`${movieDetail}/${id}`
    }}

export {baseURL, urls}

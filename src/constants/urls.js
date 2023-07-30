const baseURL = `https://api.themoviedb.org/3`;
const list = `/discover/movie`
const genres = "/genre/movie/list"
const movieDetail = "/movie/"
const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMGIzNGRlYTI0ZTdjYTBmMGVhYTY5OGQyNWNhMGI0OCIsInN1YiI6IjY0YmY3ZGQ3OGVlNDljMDBhYzRjNDUyZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9HSJ6tCf41o3o8Mbw6y_x8JkbjSQ0hbzY1bWJw6EOYQ'


const urls = {
    list,
    genres,
    movieDetail:{
        movieId:(id)=>`${movieDetail}/${id}`
    }}

export {baseURL, urls, token}

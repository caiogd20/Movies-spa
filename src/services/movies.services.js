import { moviesApi } from "../config/http";

export function getPopularMovies(){
    return moviesApi.get("movies", { params: { path: "movie/popular" } })
}

export function getMovie(movieId){
    return moviesApi.get("movies", { params: { path: `movie/${movieId}` } })
}


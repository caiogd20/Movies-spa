import { useParams } from "react-router-dom";
import { useMovie } from "../../hooks/useMovies";
import styles from "./movie.module.css";


export default function Movie() {
    const { movieId } = useParams();
    const { data:movie ,isLoading} = useMovie(movieId);
    if (isLoading) {
        return <p>Carregando...</p>;
    }
    return (
        <article className={styles.movie}>
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />
            <h1>{movie.title}</h1>
            <div>{movie.overview}</div>
            <div>⭐ {movie.vote_average}</div>
        </article>
    );
}

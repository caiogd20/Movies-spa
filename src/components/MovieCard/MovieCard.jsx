import { useDispatch, useSelector } from "react-redux";
import styles from "./MovieCard.module.css";
import { addMovie, removeMovie } from "../../store/reducers/favorito";
import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
    const dispatch = useDispatch();
    const movies = useSelector((state) => state.favorito.movies);
    function renderButton() {
        const isMovieInFavorites = movies.some((m) => m.id === movie.id);
        return (
            <button
                onClick={
                    isMovieInFavorites
                        ? () => dispatch(removeMovie(movie))
                        : () => dispatch(addMovie(movie))
                }
            >
                {isMovieInFavorites
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"}
            </button>
        );
    }
    return (
        <article className={styles.movieCard}>
            <Link to={`/movies/${movie.id}`}>
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
            </Link>
            <div className={styles.movieCardContent}>
                <h3>{movie.title}</h3>
                <span>⭐ {movie.vote_average}</span>
                {renderButton()}
            </div>
        </article>
    );
}

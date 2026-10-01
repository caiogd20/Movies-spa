import { useSelector } from "react-redux";
import MovieCard from "../../components/MovieCard/MovieCard";
import styles from "./Movies.module.css";

export default function Favoritos() {
    const movies = useSelector((state) => state.favorito.movies);
    if (movies.length === 0) {
        return <h2 className={styles.noFavorites}>Nenhum filme adicionado aos favoritos.</h2>;
    }
    return (
            <div className={styles.moviesGrid}>
                {movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
        );
}

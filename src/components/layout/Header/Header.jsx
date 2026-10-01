import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";
import { useQueryClient } from "@tanstack/react-query";
import { getPopularMovies } from "../../../services/movies.services";


export default function Header() {
    const queryClient = useQueryClient();
    function prefetchMovies(){
        queryClient.prefetchQuery({
                queryKey: ["movies"],
                queryFn: async () => {
                    const { data } = await getPopularMovies();
                    return data.results
                },
            });
    }
    const favoriteMoviesCanter = useSelector((state) => state.favorito.movies.length);
    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>Aplicaçao de filmes</h1>
            <nav className={styles.headerNav}>
                <Link to="/">Home</Link>
                <Link to="/movies" onMouseEnter={async () => await prefetchMovies()}>Movies</Link>
                <Link to="/favoritos">Favoritos ({favoriteMoviesCanter})</Link>
            </nav>
        </header>
    );
}

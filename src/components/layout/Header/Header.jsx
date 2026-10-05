import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useSelector } from "react-redux";

export default function Header() {
    const favoriteMoviesCanter = useSelector(
        (state) => state.favorito.movies.length,
    );
    return (
        <header className={styles.headerContainer}>
            <h1 className={styles.headerTitle}>Movie Explorer</h1>
            <nav className={styles.headerNav}>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
                <Link to="/favoritos">Favoritos ({favoriteMoviesCanter})</Link>
            </nav>
        </header>
    );
}

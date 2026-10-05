import styles from "./Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <main>
            {" "}
            <h1 className={styles.pageTitle}>Discover popular movies</h1>
            <p className={styles.pageDescription}>
                    Browse trending titles, check ratings and read synopses.
                    Built with Next.js and server-side rendering, powered by the
                    TMDB API.
                </p>
                <div className={styles.pageLinks}>
                    <Link className={styles.pageLink} to="/movies">
                        Browse movies
                    </Link>
                </div>
        </main>
    );
}

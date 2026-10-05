import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <p>© 2026 Caio G Dias</p>
            <p>
                <a
                    href="https://github.com/caiogd20"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                {" . "}
                <a
                    href="https://github.com/caiogd20/movies-spa"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    View source
                </a>
            </p>
            <p>
                This product uses the TMDB API but is not endorsed or certified
                by TMDB.
            </p>
        </footer>
    );
}

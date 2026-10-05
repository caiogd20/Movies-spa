import { useMovies } from "../../hooks/useMovies";
import styles from "./Movies.module.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { getMovie } from "../../services/movies.services";
import { useQueryClient } from "@tanstack/react-query";

export default function Movies() {
    const { data: movies, isLoading, isError, refetch } = useMovies();
    const queryClient = useQueryClient();

    if (isLoading) {
        return <p>Carregando...</p>;
    }
    if (isError) {
        return (
            <div role="alert">
                <p>Não foi possível carregar os filmes.</p>
                <button onClick={() => refetch()}>Tentar novamente</button>
            </div>
        );
    }
    function prefetchMovie(movieId) {
        queryClient.prefetchQuery({
            queryKey: ["movie", movieId],
            queryFn: async () => {
                const { data } = await getMovie(movieId);
                return data;
            },
        });
    }

    return (
        <div className={styles.moviesGrid}>
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    onMouseEnter={async () => await prefetchMovie(movie.id)}
                >
                    <MovieCard movie={movie} />
                </div>
            ))}
        </div>
    );
}

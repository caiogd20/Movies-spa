import { getMovie, getPopularMovies } from "../services/movies.services";
import { useQuery } from "@tanstack/react-query";

export function useMovies() {
    return useQuery({
        queryKey: ["movies"],
        queryFn: async () => {
            const { data } = await getPopularMovies();
            return data.results
        },
    });
}

export function useMovie(movieId) {
    return useQuery({
        queryKey: ["movie", parseInt(movieId)],
        queryFn: async () => {
            const { data } = await getMovie(movieId);
            return data
        },
    });
}

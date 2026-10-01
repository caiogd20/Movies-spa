import axios from "axios"

export const moviesApi = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
        Authorization:`Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTBmMGQwMTUwMTM4MDg0Nzk5YTZiNGI5NmNhOWVjYiIsIm5iZiI6MTc2MTc2NDMyNS41OTcsInN1YiI6IjY5MDI2M2U1N2FlYThiZTM1ZWM1NjRhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nttPISlXK_7W1EeBgW6eHBnSEm_n1kybgBgFI55wPek` 
    }
})
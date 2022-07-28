import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '105389e3cecb1095d9153413896fdc0a';

const getTrendingMovies = () => {
    const params = new URLSearchParams({
        api_key: API_KEY,
    });
    return axios(`${BASE_URL}/trending/movie/day?${params}`)
};

const searchMovie = (query) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
        query: query,
    });
    return axios(`${BASE_URL}/search/movie?${params}`)
};

const movieDetails = (id) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
    });
    return axios(`${BASE_URL}/movie/${id}?${params}`)
};

const movieCredits = (id) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
    });
    return axios(`${BASE_URL}/movie/${id}/credits?${params}`)
};

const movieReviews = (id) => {
    const params = new URLSearchParams({
        api_key: API_KEY,
    });
    
    return axios(`${BASE_URL}/movie/${id}/reviews?${params}`)
} 

export {getTrendingMovies, searchMovie, movieDetails,movieCredits, movieReviews };
import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjMxNjYwNWE1NTUwMWY5YzE3Y2VmZmI0M2FjNjg5NyIsIm5iZiI6MTc0NzMwMTIwNS45MTgwMDAyLCJzdWIiOiI2ODI1YjM1NTEwMjg1MjU2ODUyZDJmM2UiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.aTTJ3G1pnLeK4GtuvF46Mnx-5H4BdltDq3x-rnYTkzA';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
  params: {
    language: 'en-US',
    include_adult: false,
  },
});

export const getTrendingMovies = async () => {
  const { data } = await axiosInstance.get('/trending/movie/day');
  return data.results;
};

export const getMovieByTopic = async (query) => {
  const { data } = await axiosInstance.get('/search/movie', {
    params: { query },
  });
  return data.results;
};

export const getMovieDetails = async (movieId) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}`);
  return data;
};

export const getMovieCast = async (movieId) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const getMovieReviews = async (movieId) => {
  const { data } = await axiosInstance.get(`/movie/${movieId}/reviews`);
  return data.results;
};

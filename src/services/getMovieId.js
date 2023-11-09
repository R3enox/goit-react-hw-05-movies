import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '163fbdfae3746fb3162540a05c88c436';

export const getMovieId = async movieId => {
  const { data } = await axios.get(
    `/movie/${movieId}?language=en-US&api_key=${API_KEY}`
  );
  return data;
};

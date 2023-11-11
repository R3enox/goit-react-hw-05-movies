import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '163fbdfae3746fb3162540a05c88c436';

export const getMovie = async movieValue => {
  const { data } = await axios.get(
    `/search/movie?query=${movieValue}&include_adult=false&language=en-US&api_key=${API_KEY}`
  );
  return data;
};

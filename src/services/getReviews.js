import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = '163fbdfae3746fb3162540a05c88c436';

export const getReviews = async movieId => {
  const {
    data: { results },
  } = await axios.get(
    `/movie/${movieId}/reviews?language=en-US&api_key=${API_KEY}`
  );
  return results;
};

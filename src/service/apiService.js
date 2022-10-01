import axios from 'axios';
const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '28128385-f73846f6ec5826301b1e4096b';

const getApiResult = async (searchQuery, page) => {
  const response = await axios.get(
    `${BASE_URL}?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
};

export default getApiResult;

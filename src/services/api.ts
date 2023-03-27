import axios from 'axios';

const BASE_URL = 'https://gateway.marvel.com/v1/public';

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
});

export default api;

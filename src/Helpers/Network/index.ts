import axios from 'axios';

export const networkInctance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 10000
});

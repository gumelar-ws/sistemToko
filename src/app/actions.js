import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://sistemtoko.com/public/hijja',
});
export const apiLocation = axios.create({
  baseURL: 'https://sistemtoko.com',
});

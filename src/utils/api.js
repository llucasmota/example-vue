import axios from 'axios';

const baseUrl = 'https://6034f3006496b9001749df79.mockapi.io';
const api = axios.create({
  baseURL: baseUrl,
  headers: { 'Cache-Control': 'no-cache' }
});

export default api;

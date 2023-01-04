import axios from 'axios';

export const makeRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { authorization: `Bearer ${localStorage.getItem('token')}`, 'Access-Control-Allow-Credentials': true },

  withCredentials: true,
});

import axios from 'axios';
const userInfo = JSON.parse(localStorage.getItem('userInfo'));
const token = userInfo?.token;

const instance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 10000,
    headers: { Authorization:token ? `Bearer ${token}` : ''},
  });

  export default instance;
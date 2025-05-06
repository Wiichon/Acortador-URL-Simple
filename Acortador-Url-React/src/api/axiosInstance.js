import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'amusing-education-production.up.railway.app/api/urls',
});

export default axiosInstance;
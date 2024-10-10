import axios from 'axios';

// Crear una instancia de Axios con la configuración global
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_API_URL || "http://localhost:8000", // Base URL de tu API
  validateStatus: (status) => {
    return status >= 200 && status < 600; // Considera como válido cualquier estado entre 200 y 599
  },
});

// Configura el interceptor para añadir el token a las cabeceras
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;

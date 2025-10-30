import axios from "axios";

const API_URL = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: API_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Get token from localStorage (or sessionStorage)
    const userInfo = localStorage.getItem("pulse-user-info");
    const authUser = JSON.parse(userInfo)

    // If token exists, add it to Authorization header
    if (authUser && authUser.token) {
      config.headers.Authorization = `Bearer ${authUser.token}`;
    }

    return config;
  },
  (error) => Promise.reject(error)
);


export default axiosInstance;
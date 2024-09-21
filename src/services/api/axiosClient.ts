import axios from "axios";

const axiosClient = axios.create({
  // baseURL: "http://localhost:3007/pbtech/api/v1",
  // baseURL: "https://bst-refer-backend.onrender.com/bst/v1/admin",
  baseURL: "https://backend.purplebeetech.com/pbtech/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// Remove the token-related interceptor
axiosClient.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle response errors if necessary
    return Promise.reject(error);
  }
);

export default axiosClient;

import axios from "axios";

const baseURL = (import.meta.env.VITE_API_URL || "http://localhost:5000") + "/api";

const API = axios.create({
  baseURL: baseURL, // Use the dynamically determined URL
});

// Optional: attach token automatically
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default API;

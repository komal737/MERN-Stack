
import axios from "axios";

// ✅ Automatically chooses the right base URL based on environment
const BASE_URL = import.meta.env.MODE === "development"
  ? "http://localhost:3000/api" // backend URL in development
  : "/api"; // relative URL in production

const api = axios.create({
  baseURL: BASE_URL,
});

export default api;

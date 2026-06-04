import axios from "axios";

const api = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api`,
  headers: {
    Authorization: `Bearer ${process.env.BACKEND_API_TOKEN}`,
  },
});

export default api;

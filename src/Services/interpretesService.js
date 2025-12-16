import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const getInterpretes = async () => {
  const response = await api.get("/interpretes");
  return response.data;
};

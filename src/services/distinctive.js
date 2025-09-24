import api from "./authApi";

// READ
export const fetchDistinctives = async () => {
  const { data } = await api.get("/content/home/distinctives");
  return data;
};

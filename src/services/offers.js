import api from "./authApi";

// Fetch curated offers (public endpoint - no auth required)
export const fetchCuratedOffers = async () => {
  const { data } = await api.get("/content/home/get-curated-offers");
  console.log("Fetched offers data:", data); // Log the response data
  return data;
};

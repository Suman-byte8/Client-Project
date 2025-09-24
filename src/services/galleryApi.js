import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "";

export const fetchGalleryImages = async (tab) => {
  try {
    const response = await axios.get(`${API_URL}/content/gallery`, {
      params: { tab },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return [];
  }
};

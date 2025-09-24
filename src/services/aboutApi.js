import axios from "axios";

const API_URL = import.meta.env.VITE_BACKEND_URL || "http://localhost:3000";
const authHeader = (token) => ({
  Authorization: `Bearer ${token}`,
});

// Fetch About page content
export const fetchAboutPage = async (token) => {
  const { data } = await axios.get(`${API_URL}/content/about/`, {
    headers: authHeader(token),
  });
  console.log("Fetched About page data:", data); // Log the response data
  return data;
};

// Delete Amenity
export const deleteAmenity = async (id, token) => {
  try {
    const response = await axios.delete(`${API_URL}/content/about/admin/amenities/${id}`, {
      headers: authHeader(token),
    });
    return response.data;
  } catch (error) {
    console.error("Error deleting amenity:", error);
    throw error;
  }
};

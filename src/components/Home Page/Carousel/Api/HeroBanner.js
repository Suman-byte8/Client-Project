import axios from "axios";

export const getHeroBannerData = async (token) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/content/home/hero-banner`,
      {
        headers: {
          Authorization: `Bearer ${token}`,

        }
      }
    );
    if (response.data.success) {
      return { data: response.data.heroBanners, error: null };
    } else {
      throw new Error(response.data.message || "Failed to fetch hero banner data");
    }
  } catch (error) {
    return {
      data: null,
      error: error.response?.data?.message || "Failed to fetch hero banner data"
    };
  }
};
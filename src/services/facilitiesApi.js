import api from "./authApi";

export const fetchFacilities = async () => {
  try {
    const response = await api.get("/facilities/get-facilities");
    if (response.data.success) {
      return { data: response.data.facilities, error: null };
    } else {
      return { data: null, error: "Failed to fetch facilities" };
    }
  } catch (error) {
    return {
      data: null,
      error: error.response?.data?.message || "Error fetching facilities"
    };
  }
};

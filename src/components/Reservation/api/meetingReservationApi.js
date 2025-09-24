import axios from 'axios';

export const createMeetingReservation = async (formData, token) => {
  try {
    const response = await axios.post(
      `${import.meta.env.VITE_BACKEND_URL}/users/meeting-reservations`,
      formData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      }
    );

    if (response.data.success) {
      return { data: response.data.data, error: null };
    }
    throw new Error(response.data.message);
  } catch (error) {
    return {
      data: null,
      error: error.response?.data?.message || 'Failed to create meeting/wedding reservation'
    };
  }
};

export const fetchMeetingReservationDetails = async (bookingId, token) => {
  try {
    const response = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/users/meeting-reservations/${bookingId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    if (response.data.success) {
      return { data: response.data.data, error: null };
    } else {
      throw new Error(response.data.message || "Failed to fetch meeting/wedding reservation details");
    }
  } catch (error) {
    return {
      data: null,
      error: error.response?.data?.message || "Failed to fetch meeting/wedding reservation details"
    };
  }
};

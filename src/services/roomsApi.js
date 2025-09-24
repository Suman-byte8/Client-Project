import axios from 'axios';

const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getRooms = async (token) => {
  try {
    const response = await axios.get(`${API_URL}/rooms/get-rooms`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.rooms;
  } catch (error) {
    console.error('Error fetching rooms:', error);
    throw error;
  }
};

export const getRoomById = async (roomId, token) => {
  try {
    const response = await axios.get(`${API_URL}/rooms/get-room/${roomId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data.room;
  } catch (error) {
    console.error('Error fetching room:', error);
    throw error;
  }
};

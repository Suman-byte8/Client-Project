import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_BACKEND_URL;

// Normalize to lowercase
const normalizeType = (type) => (type || "").toLowerCase();

/**
 * With retry + exponential backoff
 */
const requestWithRetry = async (fn, retries = 3, notifyOnError = true) => {
  let lastError;
  for (let attempt = 1; attempt <= retries; attempt++) {
    try { return await fn(); }
    catch (err) {
      lastError = err;
      if (attempt < retries) await new Promise(res => setTimeout(res, 500*attempt));
    }
  }
  if (notifyOnError) toast.error(lastError?.response?.data?.message || "Request failed");
  throw lastError;
};

/**
 * Create Reservation
 */
export const createReservation = async (type, formData, token) => {
  const slug = normalizeType(type);
  return requestWithRetry(async () => {
    const res = await axios.post(`${API_URL}/reservations/${slug}`, formData, {
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    });
    if (res.data.success) {
      toast.success(`${slug} reservation created!`);
      return { data: res.data.data, error: null };
    }
    throw new Error(res.data.message);
  }).catch(err => ({ data:null, error:err.response?.data?.message || err.message }));
};

/**
 * Fetch by ID
 */
export const fetchReservationById = async (type, id, token) => {
    const slug = (type || "").toLowerCase();
    const response = await axios.get(
      `${API_URL}/reservations/${slug}/${id}`,   // ✅ note reservations not users
      {
        headers: { ...(token && { Authorization: `Bearer ${token}` }) },
      }
    );
    if (response.data.success)
      return { data: response.data.data, error: null };
    return { data:null, error: response.data.message };
  };

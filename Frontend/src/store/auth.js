import { create } from "zustand";
import axios from "axios";

const API_URL = "http://localhost:3000/api/auth";

export const useAuthStore = create((set) => ({
  isLoading: false,
  error: null,
  user: null,
  isAuthenticated: false,
  message: "",
  isCheckingAuth: true,

  signup: async (email, name, password) => {
    set({ isLoading: true });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        name,
        password,
      });
      console.log(response, "----response----");
      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      });
    } catch (error) {
      console.log(error);
      set({
        error: error.message,
        isLoading: false,
      });
    }
  },

  verifyemail: async (code) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/verify-email`, { code });
      console.log(response, "---verify response---");
      set({ message: response.data.message, isLoading: false });
    } catch (error) {
      console.log(error);
      set({
        error: error.message,
        isLoading: false,
      });
    }
  },
  login: async (email, password) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/login`, {
        email,
        password,
      });
      set({
        isAuthenticated: true,
        user: response.data.user,
        isLoading: false,
      });
    } catch (error) {
      console.log(error);
      set({
        error: error.message,
        isLoading: false,
      });
    }
  },
}));

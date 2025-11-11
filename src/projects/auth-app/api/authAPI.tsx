import axios from "axios";
import { AuthResponse } from "../types/auth";

const API_URL = "http://localhost:5000";

export const loginUser = async (email: string, password: string): Promise<AuthResponse> => {
  const res = await axios.post(`${API_URL}/login`, { email, password });
  return res.data;
};

export const registerUser = async (email: string, password: string, username: string): Promise<AuthResponse> => {
  const res = await axios.post(`${API_URL}/register`, { email, password, username });
  return res.data;
};

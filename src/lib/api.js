import axios from "axios";

const api = axios.create({
  baseURL: "http://techtest.youapp.ai/api",
});

export const login = (email, password) =>
  api.post("/login", { email, password });
export const register = (email, password) =>
  api.post("/register", { email, password });
export const getProfile = () => api.get("/profile");
export const updateProfile = (profile) => api.put("/profile", profile);

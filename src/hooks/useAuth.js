import { useState } from "react";
import { login, register } from "../lib/api";

export const useAuth = (type) => {
  const [message, setMessage] = useState("");

  const handleAuth = async (email, password) => {
    try {
      if (type === "login") {
        await login(email, password);
        setMessage("Login successful");
      } else {
        await register(email, password);
        setMessage("Registration successful");
      }
    } catch (error) {
      setMessage("Operation failed");
    }
  };

  return { handleAuth, message };
};

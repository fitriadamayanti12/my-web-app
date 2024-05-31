"use client";

import { useState } from "react";
import { useAuth } from "../hooks/useAuth";

export default function AuthForm({ type }) {
  const { handleAuth, message } = useAuth(type);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    handleAuth(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        {type === "login" ? "Login" : "Register"}
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

"use client";

import { useState, useEffect } from "react";
import { getProfile, updateProfile } from "../lib/api";

export default function ProfileForm() {
  const [profile, setProfile] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await getProfile();
        setProfile(response.data);
      } catch (error) {
        setMessage("Failed to load profile");
      }
    };
    fetchProfile();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProfile(profile);
      setMessage("Profile updated");
    } catch (error) {
      setMessage("Failed to update profile");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
        className="p-2 border rounded"
      />
      <input
        type="email"
        placeholder="Email"
        value={profile.email}
        onChange={(e) => setProfile({ ...profile, email: e.target.value })}
        className="p-2 border rounded"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">
        Update Profile
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}

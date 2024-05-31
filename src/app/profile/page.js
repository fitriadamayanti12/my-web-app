"use client";

import ProfileForm from "../../components/ProfileForm";

export default function ProfilePage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <ProfileForm />
    </div>
  );
}
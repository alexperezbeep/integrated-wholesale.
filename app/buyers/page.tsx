// app/buyers/page.tsx
"use client";

import { useState } from "react";

export default function BuyersPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    buyingCriteria: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Buyer submitted:", formData);
    // Replace with backend/email integration
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Join Our Buyer List</h1>
      <p className="mb-6 text-gray-700">Get notified when we have new off-market deals. Tell us what types of properties you're looking for.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 border rounded" required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-3 border rounded" required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 border rounded" />
        <textarea name="buyingCriteria" placeholder="What markets and property types are you buying?" onChange={handleChange} className="w-full p-3 border rounded" rows={4}></textarea>

        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Join Buyer List
        </button>
      </form>
    </main>
  );
}

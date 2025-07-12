
"use client";

import { useState } from "react";

export default function SellPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    condition: "",
    timeline: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", formData);
    // Replace with your form integration (e.g., webhook, API)
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Get a Cash Offer for Your Property</h1>
      <p className="mb-6 text-gray-700">Fill out the form below and we’ll contact you within 24 hours with a no-obligation offer.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} className="w-full p-3 border rounded" required />
        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full p-3 border rounded" required />
        <input type="email" name="email" placeholder="Email Address" onChange={handleChange} className="w-full p-3 border rounded" />
        <input type="text" name="address" placeholder="Property Address" onChange={handleChange} className="w-full p-3 border rounded" required />
        <textarea name="condition" placeholder="Describe the property's condition" onChange={handleChange} className="w-full p-3 border rounded" rows={3}></textarea>
        <input type="text" name="timeline" placeholder="Preferred closing timeline (e.g., ASAP, 30 days)" onChange={handleChange} className="w-full p-3 border rounded" />

        <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
          Get My Offer
        </button>
      </form>
    </main>
  );
}

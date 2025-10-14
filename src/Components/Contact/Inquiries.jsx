import React, { useState } from "react";
import api from "../../api";

export default function Inquiries() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post("inquiries/", formData);
      if (response.status === 201) {
        setStatus("✅ Inquiry sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error.response?.data || error);
      setStatus("❌ Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-8 py-16 bg-white">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <img
          src="/assets/contact.png"
          alt="Contact"
          className="w-full h-80 object-cover rounded-2xl shadow-lg"
        />
      </div>

      <div className="md:w-1/2 md:pl-12 max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-indigo-700 text-center md:text-left">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="border rounded w-full p-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded w-full p-3"
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className="border rounded w-full p-3"
            required
          />
          <textarea
            name="message"
            placeholder="Your message"
            value={formData.message}
            onChange={handleChange}
            className="border rounded w-full p-3 h-32"
            required
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
          >
            Send Inquiry
          </button>
        </form>

        {status && (
          <p
            className={`mt-3 text-center ${
              status.includes("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </div>
  );
}

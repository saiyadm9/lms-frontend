"use client";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const ContactUsForm = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/message/contact-aos`,
        formData
      ); // Update API endpoint if needed
      toast.success("Message sent successfully!");
      setFormData({
        name: currentUser?.name || "",
        email: currentUser?.email || "",
        message: "",
      });
    } catch (error) {
      toast.error(
        error?.message || "Failed to send message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      {/* Contact Form */}
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Send Us a Message
        </h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              required
            />
          </div>

          <div>
            <label
              className="block text-sm font-medium text-gray-700 mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors"
              required
            ></textarea>
          </div>

          <div>
            <button
              type="submit"
              className={`w-full bg-indigo-600 text-white py-3 rounded-md ${
                loading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-indigo-700"
              } focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-colors`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsForm;

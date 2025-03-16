"use client";

import { userSignInSuccess } from "@/redux/slices/userSlice";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
const UpdateProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: currentUser?.name || "",
    email: currentUser?.email || "",
    location: currentUser?.location || "",
    id: currentUser?._id || "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/update-user`,
        formData, // Send the formData directly, not as { formData }
        { withCredentials: true }
      );

      if (response.status === 200) {
        toast.success(response.data.message); // Use response.data.message
        dispatch(userSignInSuccess(response.data.user)); // Use response.data.user
      }

      console.log(response.data);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong"); // Handle errors gracefully
      console.error(error);
    }
  };

  console.log("Updated Profile:", formData);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Update Profile
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm font-medium block mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
              disabled
            />
          </div>
          <div>
            <label className="text-sm font-medium block mb-1">Location</label>
            <input
              type="text"
              name="location"
              value={formData.location}
              disabled
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 cursor-not-allowed"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;

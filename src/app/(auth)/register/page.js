"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    location: "",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  // Fetch user's location (country code)
  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const { data } = await axios.get("http://ip-api.com/json/");
        console.log("Location data:", data);
        if (data && data.countryCode) {
          setFormData((prev) => ({ ...prev, location: data.countryCode }));
        } else {
          toast.error("Unable to fetch location.");
        }
      } catch (error) {
        console.error("Location fetch failed", error);
        toast.error("Location fetch failed. Please try again.");
      }
    };
    fetchLocation();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const { confirmPassword, ...submitData } = formData; // Exclude confirmPassword
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/register",
        submitData
      );
      toast.success("Registration successful!");
      router.push("/login");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <Toaster position="top-right" />
      <div className="card w-full max-w-md shadow-lg bg-white/10 backdrop-blur-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-white text-center">
          Create an Account
        </h2>
        <p className="text-white/80 text-center mt-2">Sign up to get started</p>

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="input input-bordered bg-white/20 text-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="input input-bordered bg-white/20 text-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="input input-bordered bg-white/20 text-white"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Confirm Password</span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              className="input input-bordered bg-white/20 text-white"
              required
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full mt-4"
            disabled={loading}
          >
            {loading ? "Registering..." : "Sign Up"}
          </button>
        </form>

        <p className="text-white text-center mt-4">
          Already have an account?{" "}
          <Link href="/login" className="link link-hover">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;

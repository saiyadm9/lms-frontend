"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import Link from "next/link";
import { userSignInFailure, userSignInSuccess } from "@/redux/slices/userSlice";
import { useRouter } from "next/navigation"; // Import useRouter
import toast from "react-hot-toast";
import "../auth.css";

const LoginPage = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter(); // Initialize useRouter

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      console.log(response);
      if (response.status === 200) {
        toast.success("Login successful!");
        const user = response.data;
        dispatch(userSignInSuccess(user));
        router.push("/");
      } else if (response.status === 401) {
        toast.error(response.data.message);
      }
    } catch (err) {
      console.log(err.message);
      toast.error(
        err.response
          ? err.response.data.message
          : "An error occurred. Please try again."
      );
      dispatch(userSignInFailure(err.message));
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="card w-full max-w-md shadow-lg bg-white/10 backdrop-blur-lg rounded-xl p-8 flex flex-col">
        <h2 className="text-3xl font-bold text-white text-center">
          Welcome Back!
        </h2>
        <p className="text-white/80 text-center mt-2">Login to continue</p>

        {/* Error Message Area */}
        {error && (
          <div className="text-red-500  mt-2 text-center">
            <p>{error}</p>
          </div>
        )}

        <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered bg-white/20 text-white focus:ring-2 focus:ring-blue-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered bg-white/20 text-white focus:ring-2 focus:ring-blue-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label className="label">
              <Link
                href="forgot-password"
                className="forgot_pass link link-hover"
              >
                Forgot password?
              </Link>
            </label>
          </div>

          <button
            type="submit"
            className={`btn btn-primary w-full mt-4 disabled:bg-slate-300 disabled:text-black`}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p className="text-white text-center mt-4">
          Don't have an account?{" "}
          <Link href="/register" className="link link-hover">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

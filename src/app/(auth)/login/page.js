"use client";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaFacebook, FaGithub } from "react-icons/fa";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="card w-full max-w-md shadow-lg bg-white/10 backdrop-blur-lg rounded-xl p-8">
        <h2 className="text-3xl font-bold text-white text-center">
          Welcome Back!
        </h2>
        <p className="text-white/80 text-center mt-2">Login to continue</p>

        <form className="mt-6 space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered bg-white/20 text-white focus:ring-2 focus:ring-blue-400"
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
              required
            />
            <label className="label">
              <a href="#" className="text-white text-sm link-hover">
                Forgot password?
              </a>
            </label>
          </div>

          <button className="btn btn-primary w-full mt-4">Login</button>
        </form>

        <p className="text-white text-center mt-4">
          Don't have an account?{" "}
          <Link href="register" className="link link-hover">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

"use client";
import { useState } from "react";
import Link from "next/link";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Head from "next/head";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [classroomLinks, setClassroomLinks] = useState([""]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleClassroomLinkChange = (index, value) => {
    const updatedLinks = [...classroomLinks];
    updatedLinks[index] = value;
    setClassroomLinks(updatedLinks);
  };

  const addNewClassroomLink = () => {
    setClassroomLinks([...classroomLinks, ""]);
  };

  const removeClassroomLink = (index) => {
    const updatedLinks = classroomLinks.filter((_, i) => i !== index);
    setClassroomLinks(updatedLinks);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      setLoading(true);
      const { confirmPassword, ...submitData } = formData;
      submitData.classroomLinks = classroomLinks.filter(
        (link) => link.trim() !== ""
      );

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/register`,
        submitData
      );
      toast.success("Registration successful!");
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <Toaster position="top-right" />
        <div className="card w-full max-w-md shadow-lg bg-white/10 backdrop-blur-lg rounded-xl p-8">
          <h2 className="text-3xl font-bold text-white text-center">
            Create an Account
          </h2>
          <p className="text-white/80 text-center mt-2">
            Sign up to get started
          </p>

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
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

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
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

            {/* Google Classroom Links */}
            <div>
              <label className="label">
                <span className="label-text text-white">
                  Google Classroom Links
                </span>
              </label>
              {classroomLinks.map((link, index) => (
                <div key={index} className="flex gap-2 mb-2">
                  <input
                    type="url"
                    value={link}
                    onChange={(e) =>
                      handleClassroomLinkChange(index, e.target.value)
                    }
                    placeholder={`Classroom Link #${index + 1}`}
                    className="input input-bordered bg-white/20 text-white w-full"
                  />
                  {index > 0 && (
                    <button
                      type="button"
                      className="btn btn-sm btn-error text-white"
                      onClick={() => removeClassroomLink(index)}
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="btn btn-sm btn-outline text-white mt-2"
                onClick={addNewClassroomLink}
              >
                + Add More
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="btn btn-primary w-full mt-4"
              disabled={loading}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;

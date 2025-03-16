"use client";
import React, { useState } from "react";
import "daisyui/dist/full.css";

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNext = () => setStep((prev) => Math.min(prev + 1, 3));
  const handleBack = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-md p-6 bg-white rounded-2xl shadow-lg">
        <ul className="steps w-full mb-4">
          <li className={`step ${step >= 1 ? "step-primary" : ""}`}>Email</li>
          <li className={`step ${step >= 2 ? "step-primary" : ""}`}>Verify</li>
          <li className={`step ${step >= 3 ? "step-primary" : ""}`}>Reset</li>
        </ul>

        {step === 1 && (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              Forgot Password
            </h2>
            <p className="text-gray-600 text-center mb-4">
              Enter your email to receive a verification code
            </p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="w-full mt-4 bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
              onClick={handleNext}
            >
              Send Code
            </button>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              Enter Verification Code
            </h2>
            <p className="text-gray-600 text-center mb-4">
              Check your email for the verification code
            </p>
            <input
              type="text"
              placeholder="Enter code"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                onClick={handleNext}
              >
                Verify Code
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2 className="text-2xl font-semibold text-center mb-4">
              Reset Password
            </h2>
            <input
              type="password"
              placeholder="New password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 mb-3"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm new password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400"
                onClick={handleBack}
              >
                Back
              </button>
              <button
                className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
                onClick={() => alert("Password updated successfully!")}
              >
                Update Password
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;

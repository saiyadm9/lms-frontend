import React from "react";

const LmsFaq = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="collapse collapse-arrow border-b border-gray-200">
            <input type="radio" name="my-accordion-1" defaultChecked />
            <div className="collapse-title text-xl font-semibold text-gray-800">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>

          <div className="collapse collapse-arrow border-b border-gray-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-semibold text-gray-800">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>

          <div className="collapse collapse-arrow border-b border-gray-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-semibold text-gray-800">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>

          <div className="collapse collapse-arrow border-b border-gray-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-semibold text-gray-800">
              How can I enroll in a course?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              Browse through the available courses, click on your desired
              course, and hit the "Enroll" button to get started.
            </div>
          </div>

          <div className="collapse collapse-arrow border-b border-gray-200">
            <input type="radio" name="my-accordion-1" />
            <div className="collapse-title text-xl font-semibold text-gray-800">
              What is the refund policy for courses?
            </div>
            <div className="collapse-content text-sm text-gray-600">
              You can request a refund within the first 7 days after enrollment,
              provided you haven't completed more than 30% of the course.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LmsFaq;

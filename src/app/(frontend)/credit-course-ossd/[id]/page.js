"use client";

import { useParams } from "next/navigation";

import React from "react";
import withHero from "@/components/hoc/withHero";

const courses = [
  {
    id: 1,
    title: "Mathematics 101",
    description: "Learn foundational math skills essential for OSSD.",
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    description: "Explore the laws of physics with practical applications.",
  },
  {
    id: 3,
    title: "English Literature",
    description:
      "Develop critical thinking with classic and modern literature.",
  },
  {
    id: 4,
    title: "Business Studies",
    description: "Understand business principles and financial literacy.",
  },
];

const CourseDetails = () => {
  const params = useParams();
  const courseId = params.id;
  const course = courses.find((c) => c.id === parseInt(courseId));

  if (!course) {
    return <p className="text-center text-red-500">Course not found!</p>;
  }

  const CoursePageWithHero = withHero(
    () => (
      <div className="min-h-screen bg-gray-100">
        <div className="container mx-auto p-6">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden mb-8">
            <div className="p-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                {course.title}
              </h2>
              <p className="text-lg text-gray-600">{course.description}</p>

              <div className="mt-8 flex justify-center">
                <button className="btn btn-primary text-white bg-[#1E40AF] hover:bg-[#374FD2] focus:ring-4 focus:ring-[#374FD2] focus:ring-opacity-50 transition-all py-3 px-6 rounded-lg w-full md:w-auto">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Course Features
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Expert instructors with years of experience.</li>
            <li>Access to exclusive course materials and resources.</li>
            <li>Interactive quizzes and assignments to track progress.</li>
            <li>Certification upon successful completion of the course.</li>
          </ul>
        </div>
      </div>
    ),
    {
      title: course.title,
      description: course.description,
      bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
    }
  );

  return <CoursePageWithHero />;
};

export default CourseDetails;

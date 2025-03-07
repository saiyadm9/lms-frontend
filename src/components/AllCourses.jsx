"use client";
import { useState } from "react";

const coursesData = [
  {
    id: 1,
    name: "BEM10 - The Entrepreunial Mindset",
    category: "Grade 9",
    price: 435,
    imgUrl: "/images/entrepreunial-mindset.jpg",
  },
  {
    id: 2,
    name: "ENL1W - English",
    category: "Grade 9",
    price: 435,
    imgUrl: "/images/learn-english.jpg",
  },
  {
    id: 3,
    name: "BEP20 - Launching and Leading a Business",
    category: "Grade 10",
    price: 435,
    imgUrl: "/images/launching-a-business.jpg",
  },
  {
    id: 4,
    name: "TAS20 - Computer Technology",
    category: "Grade 10",
    price: 435,
    imgUrl: "/images/computer-technology.jpg",
  },
];

export default function CourseSection() {
  const [activeTab, setActiveTab] = useState("All Courses");

  const filteredCourses =
    activeTab === "All Courses"
      ? coursesData
      : coursesData.filter((course) => course.category === activeTab);

  return (
    <section className="bg-[#F3F4F6]">
      {/* Centered Content Container */}
      <div className="container mx-auto  py-12 px-10 ">
        <h1 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Explore Our Courses
        </h1>

        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-10 hidden lg:flex">
          {["All Courses", "Grade 9", "Grade 10", "Grade 11", "Grade 12"].map(
            (tab) => (
              <button
                key={tab}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab
                    ? "bg-[#1E40AF] text-white shadow-md scale-105"
                    : "bg-[#E5E7EB] text-gray-700 hover:bg-[#D1D5DB]"
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            )
          )}
        </div>
        {/* Course Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-[1.03] h-full flex flex-col"
            >
              <img
                src={course.imgUrl}
                alt="Course"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold text-gray-900">
                  {course.name}
                </h2>
                {/* <p className="text-gray-600 text-sm mt-1">
                  Learn and master this skill.
                </p> */}

                {/* Course Details */}
                <div className="flex justify-between text-gray-700 my-5">
                  <span className="font-medium">Price: ${course.price}</span>
                </div>

                {/* CTA Button (Stays at Bottom) */}
                <div className="mt-auto">
                  <button className="w-full bg-[#1E40AF] text-white font-medium py-2 rounded-lg hover:bg-[#374FD2] transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

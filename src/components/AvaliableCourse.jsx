"use client";
import React from "react";
import { useSelector } from "react-redux";
import Image from "next/image";

const AvaliableCourse = () => {
  const {
    data: courses,
    loading,
    error,
  } = useSelector((state) => state.courses);
  return (
    <div>
      {loading ? (
        <p className="text-center text-gray-600">Loading courses...</p>
      ) : error ? (
        <p className="text-center text-red-600">{error}</p>
      ) : courses.length === 0 ? (
        <p className="text-center text-gray-600">
          No courses available at the moment.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <div
              key={course._id} // Ensure to use the correct identifier
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-[1.03] h-full flex flex-col"
            >
              <Image
                src={course.imgUrl}
                width={400}
                height={500}
                alt="Course"
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow gap-5">
                <h2 className="text-xl font-semibold text-gray-900">
                  {course.name}
                </h2>
                <div className="mt-auto flex gap-5">
                  <button className="w-full bg-warning font-medium py-2 rounded-lg transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AvaliableCourse;

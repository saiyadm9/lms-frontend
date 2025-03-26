"use client";
import withHero from "@/components/hoc/withHero";
import { getCourses } from "@/redux/slices/courseSlice";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const GradeEleven = () => {
  const dispatch = useDispatch();
  const {
    data: courses,
    loading,
    error,
  } = useSelector((state) => state.courses);
  const gradeNineCourses = courses.filter(
    (course) => course.category === "Grade 11"
  );
  useEffect(() => {
    if (courses.length === 0) {
      dispatch(getCourses());
    }
  }, [dispatch, courses]);
  return (
    <div>
      <section className="bg-[#F3F4F6] py-12 px-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mt-6">Grade Courses</h1>
        </div>
      </section>
      <section className="bg-white py-12 px-10">
        <div className="container mx-auto">
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
              {gradeNineCourses.map((course) => (
                <Link
                  key={course._id} // Move key to the outermost element
                  href={`/credit-course-ossd/available-course/${course._id}`}
                  className="block"
                >
                  <div className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-[1.03] h-full flex flex-col">
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
                        <span className="text-center w-full bg-warning font-medium py-2 rounded-lg transition">
                          View Details
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default withHero(GradeEleven, {
  title: "Grade 11",
  description: "Achieve Academic Excellence with Expert Grade Twelve!",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});

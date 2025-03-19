"use client";
import Image from "next/image";
import Link from "next/link";

export default function CourseSection({ categories }) {
  return (
    <section className="bg-[#F3F4F6]">
      <div className="container mx-auto py-12 px-10">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Explore Our Courses
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((course) => (
            <div
              key={course.id}
              className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-[1.03] h-full flex flex-col"
            >
              <Image
                src={course.imgUrl}
                alt="Course"
                className="w-full h-48 object-cover"
                width={400}
                height={300}
              />
              <div className="p-6 flex flex-col flex-grow gap-5">
                <h2 className="text-xl font-semibold text-gray-900">
                  {course.name}
                </h2>
                {/* <div className='flex justify-between text-gray-700 my-5'>
                  <span className='font-medium'>Price: ${course.price}</span>
                </div> */}
                <div className="mt-auto flex gap-5">
                  <button className="w-full bg-warning font-medium py-2 rounded-lg transition">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="grid justify-center items-center mt-10">
          <button className="text-lg px-3 py-1 bg-[#FC9743] font-medium rounded-md transition">
            <Link href="/credit-course-ossd/available-course">
              Show All Courses
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
}

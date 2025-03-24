import Link from "next/link";

import withHero from "@/components/hoc/withHero";
import Image from "next/image";

const courses = [
  {
    id: 1,
    title: "Mathematics 101",
    description: "Learn foundational math skills essential for OSSD.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.0DWeXPTzaNiZoU39HxSG-AHaEK?w=271&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 2,
    title: "Physics Fundamentals",
    description: "Explore the laws of physics with practical applications.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.2NJbqAjsnXLUjnkAb5zd0QHaEK?w=310&h=180&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 3,
    title: "English Literature",
    description:
      "Develop critical thinking with classic and modern literature.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.p8BuIJ5FH-sAr8opBRXbqQHaEK?w=204&h=115&c=7&r=0&o=5&pid=1.7",
  },
  {
    id: 4,
    title: "Business Studies",
    description: "Understand business principles and financial literacy.",
    thumbnail:
      "https://th.bing.com/th/id/OIP.6dlx0y0MuQH5wcsDVUOsywHaEK?w=300&h=180&c=7&r=0&o=5&pid=1.7",
  },
];

const CreditCoursesOSSD = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-6">
        {/* Courses Section */}
        <section className="mb-10">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Our credit courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-[1.03] h-full flex flex-col"
              >
                <figure>
                  <Image
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                    width={500}
                    height={750}
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-lg font-semibold text-gray-900">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-3">{course.description}</p>
                  <div className="flex justify-center gap-4">
                    <Link
                      href="#" // Link to the dynamic course page
                      className="w-full bg-[#1E40AF] text-white font-medium py-2 rounded-lg hover:bg-[#374FD2] transition text-center"
                    >
                      Enroll Now
                    </Link>
                    <Link
                      href={`/credit-course-ossd/${course.id}`} // Link to the dynamic course page
                      className="w-full bg-warning font-medium py-2 rounded-lg hover:bg-amber-500 transition text-center"
                    >
                      view details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* OSSD Section */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-3xl font-bold text-center text-gray-800">
            Ontario Secondary School Diploma (OSSD)
          </h2>
          <p className="text-gray-600 mt-4 text-center">
            The OSSD is awarded to students who complete the necessary credits
            and community service hours. Our courses help you meet these
            requirements.
          </p>
          <ul className="list-disc mt-6 px-6 text-gray-700">
            <li>Minimum 30 credits (18 compulsory, 12 elective)</li>
            <li>40 hours of community service</li>
            <li>
              Successful completion of the Ontario Secondary School Literacy
              Test (OSSLT)
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default withHero(CreditCoursesOSSD, {
  title: "credit courses & OSSD",
  description:
    "Get accredited courses to fulfill your Ontario Secondary School Diploma (OSSSD) requirements.",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});

import withHero from "@/components/hoc/withHero";
import Reviews from "@/components/Reviews";
import UniversitiesLogo from "@/components/UniversitiesLogo";
import { coursesData } from "../../../../../../data/categories";
import Image from "next/image";

const GradeTen = () => {
  const gradeNineCourses = coursesData.filter(
    (course) => course.category === "Grade 10"
  );
  return (
    <div>
      <section className="bg-[#F3F4F6] py-12 px-10">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mt-6">Grade 10 Courses</h1>
        </div>
      </section>

      {/* Display Grade 9 Courses */}
      <div className="container mx-auto my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {gradeNineCourses.map((course) => (
          <div
            key={course.id}
            className="bg-slate-100 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-[1.03] h-full flex flex-col"
          >
            <div className="relative w-full h-48">
              <Image
                src={course.imgUrl}
                alt="Course"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow gap-5">
              <h2 className="text-xl font-semibold text-gray-900">
                {course.name}
              </h2>
              <div className="flex justify-between text-gray-700"></div>
              <div className="mt-auto flex gap-5">
                <button className="w-full bg-warning font-medium py-2 rounded-lg transition">
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <UniversitiesLogo />
      <Reviews />
    </div>
  );
};

export default withHero(GradeTen, {
  title: "Grade 10",
  description: "Achieve Academic Excellence with Expert GradeNine!",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});

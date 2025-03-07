import {
  FaUniversity,
  FaSchool,
  FaGlobeAmericas,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

const LMSStats = () => {
  return (
    <section
      className="bg-cover bg-center py-16 px-6 relative"
      style={{
        backgroundImage: "url('/images/study-bg.jpg')",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="container mx-auto text-center relative z-5">
        <h2 className="text-4xl font-semibold mb-6 text-white sm:text-3xl">
          Why Choose Our LMS?
        </h2>
        <p className="text-lg max-w-2xl mx-auto mb-12 text-white sm:text-base">
          Elevate your learning experience with top-tier courses, expert
          guidance, and a supportive community.
        </p>

        <div className="stats shadow-lg backdrop-blur-md bg-opacity-70 p-12 sm:p-8 rounded-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Year Founded */}
            <div className="stat flex items-center justify-center mb-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center">
                <FaUniversity className="mr-4 text-4xl text-blue-600" />
                <div>
                  <div className="stat-title text-gray-700 font-medium">
                    Year Founded
                  </div>
                  <div className="stat-value text-blue-600 text-2xl">2010</div>
                </div>
              </div>
            </div>

            {/* Schools */}
            <div className="stat flex items-center justify-center mb-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center">
                <FaSchool className="mr-4 text-4xl text-green-600" />
                <div>
                  <div className="stat-title text-gray-700 font-medium">
                    Schools
                  </div>
                  <div className="stat-value text-green-600 text-2xl">10</div>
                </div>
              </div>
            </div>

            {/* Nationalities */}
            <div className="stat flex items-center justify-center mb-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center">
                <FaGlobeAmericas className="mr-4 text-4xl text-indigo-600" />
                <div>
                  <div className="stat-title text-gray-700 font-medium">
                    Nationalities
                  </div>
                  <div className="stat-value text-indigo-600 text-2xl">30+</div>
                </div>
              </div>
            </div>

            {/* Average Class Size */}
            <div className="stat flex items-center justify-center mb-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center">
                <FaChalkboardTeacher className="mr-4 text-4xl text-yellow-600" />
                <div>
                  <div className="stat-title text-gray-700 font-medium">
                    Average Class Size
                  </div>
                  <div className="stat-value text-yellow-600 text-2xl">12</div>
                </div>
              </div>
            </div>

            {/* University Acceptance Rate */}
            <div className="stat flex items-center justify-center mb-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center">
                <FaGraduationCap className="mr-4 text-4xl text-red-600" />
                <div>
                  <div className="stat-title text-gray-700 font-medium">
                    University Acceptance Rate
                  </div>
                  <div className="stat-value text-red-600 text-2xl">98%</div>
                </div>
              </div>
            </div>

            {/* Students */}
            <div className="stat flex items-center justify-center mb-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center">
                <FaUsers className="mr-4 text-5xl text-teal-600" />
                <div>
                  <div className="stat-title text-gray-700 font-medium">
                    Students
                  </div>
                  <div className="stat-value text-teal-600 text-2xl">5500</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LMSStats;

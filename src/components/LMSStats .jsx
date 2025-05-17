import {
  FaUniversity,
  FaChalkboardTeacher,
  FaGraduationCap,
} from 'react-icons/fa'

const LMSStats = () => {
  return (
    <section
      className='bg-cover bg-center py-16 px-4 sm:px-6 relative'
      style={{
        backgroundImage: "url('/images/students-in-classroom.jpg')",
        backgroundAttachment: 'scroll',
      }}
    >
      <div className='absolute inset-0 bg-black opacity-70'></div>
      <div className='container mx-auto text-center relative z-10'>
        <h2 className='text-4xl font-semibold mb-6 text-white sm:text-3xl'>
          Why Choose Academy of Scholars?
        </h2>
        <p className='text-lg max-w-2xl mx-auto mb-12 text-white sm:text-base'>
          Elevate your learning experience with top-tier courses, expert
          guidance, and a supportive community.
        </p>

        {/* Top Section: 3 Stat Boxes */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8'>
          {/* Year Founded */}
          <div className='stat flex items-center justify-center bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='flex items-center'>
              <FaUniversity className='mr-4 text-4xl text-yellow-600' />
              <div>
                <div className='stat-title text-gray-700 font-medium text-xl'>
                  Year Founded
                </div>
                <div className='stat-value text-2xl'>2018</div>
              </div>
            </div>
          </div>

          {/* Average Students Per Class */}
          <div className='stat flex items-center justify-center bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='flex items-center'>
              <FaChalkboardTeacher className='mr-4 text-4xl text-yellow-600' />
              <div>
                <div className='stat-title text-gray-700 font-medium text-xl'>
                  Average Students <br /> Per Class
                </div>
                <div className='stat-value text-2xl'>15</div>
              </div>
            </div>
          </div>

          {/* University Acceptance Rate */}
          <div className='stat flex items-center justify-center bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
            <div className='flex items-center'>
              <FaGraduationCap className='mr-4 text-4xl text-yellow-600' />
              <div>
                <div className='stat-title text-gray-700 font-medium text-xl'>
                  University <br /> Acceptance Rate
                </div>
                <div className='stat-value text-2xl'>100%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: 4 Text Boxes */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6'>
          {/* Ministry-Aligned Curriculum */}
          <div className='stat bg-yellow-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-left'>
            <h3 className='text-2xl text-justify font-semibold  text-gray-800'>
              Ministry-Aligned Curriculum
            </h3>
            <p className='text-gray-600 text-justify'>
              Academy of Scholars offers courses and programs fully aligned with
              the Ontario Ministry of Education standards. As an inspected
              private school, it provides credit courses and the OSSD to both
              local and international students.
            </p>
          </div>

          {/* Flexible Learning Options */}
          <div className='stat bg-yellow-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-left'>
            <h3 className='text-2xl text-justify font-semibold  text-gray-800'>
              Flexible Learning Options
            </h3>
            <p className='text-gray-600'>
              With interactive online learning, students enjoy 24/7 access to
              course materials and continuous teaching support. Self-paced study
              options empower students to learn at their own pace and
              convenience.
            </p>
          </div>

          {/* Expert Faculty */}
          <div className='stat bg-yellow-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-left'>
            <h3 className='text-2xl text-justify font-semibold  text-gray-800'>
              Expert Faculty
            </h3>
            <p className='text-gray-600 text-justify'>
              Our highly experienced teachers are experts in the Ontario
              curriculum. They provide dedicated support to ensure academic
              progress and stability, along with guidance for university
              admissions.
            </p>
          </div>

          {/* Global Recognition */}
          <div className='stat bg-yellow-50 p-6 md:p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 text-left'>
            <h3 className='text-2xl text-justify font-semibold  text-gray-800'>
              Global Recognition
            </h3>
            <p className='text-gray-600 text-justify'>
              The OSSD offered by Academy of Scholars is recognized by top
              universities in Canada, the USA, the UK, and other global
              institutions, enhancing students' competitiveness in university
              applications.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LMSStats

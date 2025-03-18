import {
  FaUniversity,
  FaChalkboardTeacher,
  FaGraduationCap,
  FaUsers,
} from 'react-icons/fa'

const LMSStats = () => {
  return (
    <section
      className='bg-cover bg-center py-16 px-6 relative'
      style={{
        backgroundImage: "url('/images/students-in-classroom.jpg')",
        backgroundAttachment: 'scroll',
      }}
    >
      <div className='absolute inset-0 bg-black opacity-70'></div>

      <div className='container mx-auto text-center relative z-5'>
        <h2 className='text-4xl font-semibold mb-6 text-white sm:text-3xl'>
          Why Choose Academy of Scholars?
        </h2>
        <p className='text-lg max-w-2xl mx-auto mb-12 text-white sm:text-base'>
          Elevate your learning experience with top-tier courses, expert
          guidance, and a supportive community.
        </p>

        <div className='stats p-10 sm:p-8 rounded-xl'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16'>
            {/* Year Founded */}
            <div className='stat flex items-center justify-center mb-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
              <div className='flex items-center'>
                <FaUniversity className='mr-4 text-4xl text-yellow-600' />
                <div>
                  <div className='stat-title text-gray-700 font-medium'>
                    Year Founded
                  </div>
                  <div className='stat-value  text-2xl'>2018</div>
                </div>
              </div>
            </div>

            <div className='stat flex items-center justify-center mb-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
              <div className='flex items-center'>
                <FaChalkboardTeacher className='mr-4 text-4xl text-yellow-600' />
                <div>
                  <div className='stat-title text-gray-700 font-medium'>
                    Average Students <br /> Per Class
                  </div>
                  <div className='stat-value text-2xl'>4-6</div>
                </div>
              </div>
            </div>

            <div className='stat flex items-center justify-center mb-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
              <div className='flex items-center'>
                <FaGraduationCap className='mr-4 text-4xl text-yellow-600' />
                <div>
                  <div className='stat-title text-gray-700 font-medium'>
                    University <br /> Acceptance Rate
                  </div>
                  <div className='stat-value  text-2xl'>84%</div>
                </div>
              </div>
            </div>

            {/* Students */}
            <div className='stat flex items-center justify-center mb-6 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300'>
              <div className='flex items-center'>
                <FaUsers className='mr-4 text-5xl text-yellow-600' />
                <div>
                  <div className='stat-title text-gray-700 font-medium'>
                    Total Students
                  </div>
                  <div className='stat-value  text-2xl'>52</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LMSStats

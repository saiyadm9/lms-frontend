import withHero from '@/components/hoc/withHero'
import UniversitiesLogo from '@/components/UniversitiesLogo'
import Image from 'next/image'
import { coursesData } from '../../../../../data/categories'
export const metadata = {
  title: 'All Available Courses',
  description: '',
}

const AvailableCourses = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto '>
          <h1 className='text-4xl font-bold my-6 text-center'>
            Available All Courses
          </h1>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {coursesData.map((course) => (
              <div
                key={course.id}
                className='bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-[1.03] h-full flex flex-col'
              >
                <Image
                  src={course.imgUrl}
                  width={400}
                  height={500}
                  alt='Course'
                  className='w-full h-48 object-cover'
                />
                <div className='p-6 flex flex-col flex-grow gap-5'>
                  <h2 className='text-xl font-semibold text-gray-900'>
                    {course.name}
                  </h2>
                  {/* <div className='flex justify-between text-gray-700 my-5'>
                  <span className='font-medium'>Price: ${course.price}</span>
                </div> */}
                  <div className='mt-auto flex gap-5'>
                    <button className='w-full bg-warning font-medium py-2 rounded-lg transition'>
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default withHero(AvailableCourses, {
  title: 'All Courses',
  description: 'All Courses For Students',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

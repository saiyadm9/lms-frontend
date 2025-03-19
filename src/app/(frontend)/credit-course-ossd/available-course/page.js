import withHero from '@/components/hoc/withHero'

import UniversitiesLogo from '@/components/UniversitiesLogo'
import Image from 'next/image'

export const metadata = {
  title: 'All Available Courses',
  description: '',
}

const coursesData = [
  {
    id: 1,
    name: 'BEM10 - The Entrepreunial Mindset',
    category: 'Grade 9',
    price: 435,
    imgUrl: '/images/entrepreunial-mindset.jpg',
  },
  {
    id: 2,
    name: 'ENL1W - English',
    category: 'Grade 9',
    price: 435,
    imgUrl: '/images/learn-english.jpg',
  },
  {
    id: 3,
    name: 'BEP20 - Launching and Leading a Business',
    category: 'Grade 10',
    price: 435,
    imgUrl: '/images/launching-a-business.jpg',
  },
  {
    id: 4,
    name: 'TAS20 - Computer Technology',
    category: 'Grade 10',
    price: 435,
    imgUrl: '/images/computer-technology.jpg',
  },
  {
    id: 5,
    name: 'BAF3M - Financial Accounting Fundamentals',
    category: 'Grade 11',
    price: 565,
    imgUrl: '/images/financial-accounting-fundamentals.jpg',
  },
  {
    id: 6,
    name: 'BMI3C - Marketing',
    category: 'Grade 11',
    price: 565,
    imgUrl: '/images/marketing-course.jpg',
  },
  {
    id: 7,
    name: 'MHF4U - Advanced Functions',
    category: 'Grade 12',
    price: 565,
    imgUrl: '/images/advanced-function.jpg',
  },
  {
    id: 8,
    name: 'MCV4U - Calculus',
    category: 'Grade 12',
    price: 565,
    imgUrl: '/images/calculus.jpg',
  },
]

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

      <UniversitiesLogo />
    </div>
  )
}

export default withHero(AvailableCourses, {
  title: 'All Courses',
  description: 'All Courses For Students',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

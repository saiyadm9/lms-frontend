'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '@/redux/slices/courseSlice'
import Image from 'next/image'
import Link from 'next/link'

export default function CourseSection() {
  const dispatch = useDispatch()
  const {
    data: courses,
    loading,
    error,
  } = useSelector((state) => state.courses)

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(getCourses())
    }
  }, [dispatch, courses])

  return (
    <section className='bg-[#F3F4F6]'>
      <div className='container mx-auto py-12 px-10'>
        <h2 className='text-3xl font-bold text-center text-gray-900 mb-8'>
          Explore Our Courses
        </h2>

        {loading ? (
          <p className='text-center text-gray-600'>Loading courses...</p>
        ) : error ? (
          <p className='text-center text-red-600'>{error}</p>
        ) : (
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {courses.slice(0, 8).map((course) => (
              <div
                key={course._id}
                className='bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-transform transform hover:scale-[1.03] h-full flex flex-col'
              >
                <Image
                  src={course.imgUrl}
                  alt={course.name}
                  className='w-full h-48 object-cover'
                  width={400}
                  height={300}
                />
                <div className='p-6 flex flex-col flex-grow gap-5'>
                  <h2 className='text-xl font-semibold text-gray-900'>
                    {course.name}
                  </h2>

                  <div className='mt-auto flex gap-5'>
                    <Link
                      href={`/credit-course-ossd/available-courses/${course.name.replace(
                        /\s+/g,
                        ''
                      )}`}
                      className='text-center w-full bg-warning font-medium py-2 rounded-lg transition'
                    >
                      view details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className='grid justify-center items-center mt-10'>
          <Link href='/credit-course-ossd/available-courses'>
            <button className='text-lg px-3 py-1 bg-[#FC9743] font-medium rounded-md transition'>
              Show All Courses
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

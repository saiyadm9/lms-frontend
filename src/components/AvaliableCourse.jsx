'use client'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Image from 'next/image'
import Link from 'next/link'
import { getCourses } from '@/redux/slices/courseSlice'

const AvaliableCourse = () => {
  const dispatch = useDispatch()
	const [categoryFilter, setCategoryFilter] = useState('') // '' means All
	const categories = ['All', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'];
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

	const filteredCourses =
    categoryFilter === ''
      ? courses
      : courses.filter((course) => course.category === categoryFilter)

  return (
    <div className='space-y-6'>
			<div className='flex flex-wrap justify-center gap-3'>
				{categories.map((category) => {
					const isActive = categoryFilter === category || (category === 'All' && categoryFilter === '');
					return (
						<button
							key={category}
							onClick={() => setCategoryFilter(category === 'All' ? '' : category)}
							className={`px-4 py-2 rounded-md border font-semibold transition-all ${
								isActive
									? 'bg-blue-600 text-white'
									: 'bg-white text-gray-800 hover:bg-blue-100'
							}`}
						>
							{category}
						</button>
					);
				})}
			</div>

      {loading ? (
        <p className='text-center text-gray-600'>Loading courses...</p>
      ) : error ? (
        <p className='text-center text-red-600'>{error}</p>
      ) : courses.length === 0 ? (
        <p className='text-center text-gray-600'>
          No courses available at the moment.
        </p>
      ) : (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
          {filteredCourses.map((course) => (
            <div
              key={course._id}
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
    </div>
  )
}

export default AvaliableCourse

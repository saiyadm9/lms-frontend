'use client'
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'
import withHero from '@/components/hoc/withHero'
import { useDispatch, useSelector } from 'react-redux'
import { getCourses } from '@/redux/slices/courseSlice'
import { courseDetails } from '../../../../../../data/categories'
import Head from 'next/head'

const CourseDetails = () => {
  const { id } = useParams()
	console.log(id);
  const dispatch = useDispatch()
  const {
    data: courses,
    loading,
    error,
  } = useSelector((state) => state.courses)

  const course = courses.find(
    (course) => course.name.replace(/\s+/g, '') === id
  )

  const courseCode = course?.name.split(' - ')[0]
  const courseFullName = course?.name.split(' - ')[1]
  const courseDetail = courseDetails.find((detail) => detail.course_code === courseCode)
	console.log(courseDetail);
	
  if (loading)
    return <p className='text-center text-lg'>Loading course details...</p>
  if (error) return <p className='text-center text-red-600 text-lg'>{error}</p>
  if (!course) return <p className='text-center text-lg'>Course not found.</p>

  return (
    <>
      <Head>
        <title>{courseFullName} | Academy of Scholars</title>
        <meta
          name='description'
          content={`Detailed information about ${courseFullName} course including description, prerequisites, and assessment criteria`}
        />
      </Head>

      <div className='max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg my-8'>
        {/* Hero Image and Title */}
        <div className='relative'>
          <Image
            src={course.imgUrl}
            width={800}
            height={450}
            alt={course.name}
            className='w-full h-80 object-cover rounded-lg'
            priority
          />
          <h1 className='absolute bottom-5 left-5 text-white text-4xl font-bold bg-opacity-50 bg-black px-4 py-2 rounded-lg'>
            {courseFullName}
          </h1>
        </div>

        {/* Course Description & Outline */}
        <section className='space-y-4 mt-4'>
          <h2 className='text-2xl font-semibold'>
            {courseCode} Course Description
          </h2>
          <p className='text-lg text-gray-700'>{courseDetail?.prerequisite}</p>
					{courseDetail?.description}
        </section>
      </div>
    </>
  )
}

// Wrapper component to handle dynamic title and metadata
const CourseDetailsWrapper = () => {
  const { id } = useParams()
  const [metaTitle, setMetaTitle] = useState('Course Details')
  const [metaDescription, setMetaDescription] = useState(
    'Detailed course information'
  )
  const dispatch = useDispatch()
  const { data: courses } = useSelector((state) => state.courses)

  useEffect(() => {
    if (courses.length === 0) {
      dispatch(getCourses())
    } else {
      const course = courses.find((course) => course._id === id)
      if (course) {
        const fullName = course.name.split(' - ')[1] || course.name
        setMetaTitle(`${fullName} | Academy of Scholars`)
        setMetaDescription(
          `Learn about ${fullName} course including description, prerequisites, and assessment criteria`
        )
      }
    }
  }, [dispatch, courses, id])

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name='description' content={metaDescription} />
        <meta property='og:title' content={metaTitle} />
        <meta property='og:description' content={metaDescription} />
      </Head>
      <CourseDetails />
    </>
  )
}

export default withHero(CourseDetailsWrapper, {
  title: 'Course Details', // Initial title, will be updated by wrapper
  description: 'Tutoring For Students',
  bgGradient: 'rgb(0 33 38 / 55%)',
})

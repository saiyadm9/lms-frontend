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
  const courseDetail = courseDetails.find((detail) => detail.id === id)

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
          <p className='text-lg text-gray-700 text-justify'>
            {courseDetail?.description}
          </p>
          <p
            className='text-lg text-gray-700'
            dangerouslySetInnerHTML={{
              __html: courseDetail?.fulfilsRequirement,
            }}
          />

          <h3 className='text-xl font-semibold mt-4'>Prerequisite</h3>
          <p className='text-lg text-gray-700'>{courseDetail?.prerequisite}</p>
        </section>

        {/* Default Content (Assessment & Evaluation) */}
        <section className='space-y-4 mt-8'>
          <h2 className='text-2xl font-semibold'>
            Assessment & Evaluation for Student Achievement
          </h2>
          <p className='text-lg text-gray-700'>
            As summarized in Growing Success 2010, the primary purpose of
            assessment and evaluation is to improve student learning.
            Information gathered through assessment helps teachers to determine
            students' strengths and weaknesses in their achievement of the
            curriculum expectations in each course. This information also serves
            to guide teachers in adapting curriculum and instructional
            approaches to students' needs and in assessing the overall
            effectiveness of programs and classroom practices. As part of
            assessment, teachers provide students with descriptive feedback that
            guides their efforts towards improvement.
          </p>
          <p className='text-lg text-gray-700 mt-4'>
            Evaluation refers to the process of judging the quality of student
            work on the basis of established criteria, and assigning a value to
            represent that quality. All curriculum expectations must be
            accounted for in instruction, but evaluation focuses on students'
            achievement of the overall expectations. A student's achievement of
            the overall expectations is evaluated on the basis of his or her
            achievement of related specific expectations. Teachers will use
            their professional judgement to determine which specific
            expectations should be used to evaluate achievement of overall
            expectations, and which ones will be covered in instruction and
            assessment but not necessarily evaluated.
          </p>
          <p className='text-lg text-gray-700'>
            In order to ensure that assessment and evaluation are valid and
            reliable, and that they lead to the improvement of student learning,
            teachers must use assessment and evaluation strategies that:
          </p>
          <ul className='list-disc pl-6 space-y-2 text-lg text-gray-700'>
            <li>Address both what students learn and how well they learn</li>
            <li>
              Are based both on the categories of knowledge and skills and on
              the achievement level descriptions given in the achievement chart
            </li>
            <li>
              Are varied in nature, administered over a period of time, and
              designed to provide opportunities for students to demonstrate the
              full range of their learning
            </li>
            <li>
              Are appropriate for the learning activities used, the purposes of
              instruction, and the needs and experiences of the students
            </li>
            <li>Are fair to all students</li>
            <li>
              Accommodate students with special education needs, consistent with
              the strategies outlined in their Individual Education Plan
            </li>
            <li>
              Accommodate the needs of students who are learning the language of
              instruction
            </li>
            <li>
              Ensure that each student is given clear directions for improvement
            </li>
            <li>
              Promote students' ability to assess their own learning and to set
              specific goals
            </li>
            <li>
              Include the use of samples of students' work that provide evidence
              of their achievement
            </li>
            <li>
              Are communicated clearly to students and parents at the beginning
              of the school year and at other appropriate points throughout the
              school year
            </li>
          </ul>
          <p className='text-lg text-gray-700'>
            The achievement chart for mathematics outlines four categories of
            knowledge and skills. They include; knowledge and understanding,
            thinking, communication and application. Teachers will ensure that
            student work is assessed and/or evaluated in a balanced manner with
            respect to the four categories, and that achievement of particular
            expectations is considered within the appropriate categories.
          </p>
          <p className='text-lg text-gray-700'>
            A final grade is recorded for this course, and a credit is granted
            and recorded for this course if the student's grade is 50% or
            higher. The final grade for this course will be determined as
            follows:
          </p>
          <ul className='list-disc pl-6 space-y-2 text-lg text-gray-700'>
            <li>
              Seventy percent of the grade will be based on evaluations
              conducted throughout the course. This portion of the grade should
              reflect the student's most consistent level of achievement
              throughout the course, although special consideration should be
              given to more recent evidence of achievement. The seventy percent
              will be distributed in the following achievement chart categories:
              25% Knowledge and understanding, 25% application, 25%
              communication and 25% thinking.
            </li>
            <li>
              Thirty percent of the grade will be based on a final evaluation in
              the form of an examination administered towards the end of the
              course and a summative project which students can work on
              throughout the course.
            </li>
          </ul>
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
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

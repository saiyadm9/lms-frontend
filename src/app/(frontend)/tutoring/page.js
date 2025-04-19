import withHero from '@/components/hoc/withHero'
import Image from 'next/image'

export const metadata = {
  title: 'Achieve Academic Excellence with Expert Tutoring!',
  description: '',
}

const Tutoring = () => {
  return (
    <div>
      <section className='py-12 px-10'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-x-1'>
          <div className='md:col-span-2'>
            <h1 className='text-4xl font-bold mt-6'>
              Achieve Academic Excellence with Expert Tutoring!
            </h1>
            <p className='mt-4 text-gray-700 text-justify'>
              At Academy of Scholars, we provide high-quality tutoring services
              designed to help students excel in math, science, English,
              business, and more. Our experienced tutors, with 10+ years of
              teaching expertise, are graduates from top engineering and
              business schools in Canada and the U.S., bringing world-class
              knowledge and proven strategies to every session. Whether you're
              looking to boost your grades, prepare for exams, or build strong
              study habits, our personalized approach ensures one-on-one
              attention and tailored learning plans to meet your unique needs.
              With our supportive learning environment and expert guidance,
              you’ll gain the confidence and skills needed to succeed in school
              and beyond. Join us today and unlock your full potential!
            </p>
          </div>
          <div className='md:col-span-1 flex justify-center mt-6 md:mt-0'>
            <Image
              src='/images/teaching-student.jpg'
              alt='Tutoring Illustration'
              width={500}
              height={400}
              className='rounded-lg shadow-lg w-full max-w-md'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default withHero(Tutoring, {
  title: 'Tutoring',
  description: 'Tutoring For Students',
  bgGradient: 'rgb(0 33 38 / 55%)',
})

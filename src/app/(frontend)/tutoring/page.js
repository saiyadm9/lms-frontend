import withHero from '@/components/hoc/withHero'

import UniversitiesLogo from '@/components/UniversitiesLogo'

export const metadata = {
  title: 'Achieve Academic Excellence with Expert Tutoring!',
  description: '',
}

const Tutoring = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold mt-6'>
            Achieve Academic Excellence with Expert Tutoring!
          </h1>
          <p className='mt-4 text-gray-700'>
            At Academy of Scholars, we provide high-quality tutoring services
            designed to help students excel in math, science, English, business
            and more. Our experienced tutors, with 10+ years of teaching
            expertise, are graduates from top engineering and business schools
            in Canada and the U.S., bringing world-class knowledge and proven
            strategies to every session. Whether you're looking to boost your
            grades, prepare for exams, or build strong study habits, our
            personalized approach ensures one-on-one attention and tailored
            learning plans to meet your unique needs. With our supportive
            learning environment and expert guidance, you’ll gain the confidence
            and skills needed to succeed in school and beyond. Join us today and
            unlock your full potential!
          </p>
        </div>
      </section>
    </div>
  )
}

export default withHero(Tutoring, {
  title: 'Tutoring',
  description: 'Tutoring For Students',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

import withHero from '@/components/hoc/withHero'
import Image from 'next/image'

export const metadata = {
  title: 'Know Our Story',
  description: '',
}

const OurStory = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto flex flex-col md:flex-row items-center gap-x-1'>
          <div className='md:w-2/3'>
            <h1 className='text-4xl font-bold'>Know Our Story</h1>
            <p className='mt-4 text-gray-700 text-justify'>
              Founded in 2018 as a dedicated tutoring center, Academy of
              Scholars began with a mission to support students in achieving
              academic excellence through personalized learning. As our
              commitment to education grew, we expanded in 2020 into an
              inspected private school, offering Ontario Secondary School
              Diploma (OSSD) credit courses approved by the Ministry of
              Education. Recognizing the growing demand for quality Canadian
              education beyond our borders, we now proudly offer the OSSD
              program to international and overseas students, providing them
              with a pathway to top universities in Canada and around the world.
              Our journey reflects our dedication to innovation, accessibility,
              and student success, ensuring that learners, no matter where they
              are, receive the same high-quality education and opportunities to
              achieve their academic and career goals.
            </p>
          </div>
          <div className='md:w-1/3 flex justify-center mt-6 md:mt-0'>
            <Image
              width={690}
              height={400}
              src='/images/staff.jpg'
              alt='staff'
              className='rounded-lg shadow-lg w-full max-w-md'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default withHero(OurStory, {
  title: 'Our Story',
  description: 'We provide top-notch services to help you grow.',
  bgGradient: 'rgb(0 33 38 / 55%)',
})

import withHero from '@/components/hoc/withHero'

import UniversitiesLogo from '@/components/UniversitiesLogo'
import Image from 'next/image'

export const metadata = {
  title: 'Academy of Scholars STEM',
  description: '',
}

const STEM = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2'>
            <h1 className='text-4xl font-bold mt-6'>
              Academy of Scholar&apos;s STEM
            </h1>
            <p className='mt-4 text-gray-700'>
              At Academy of Scholars, STEM tutoring provides students with a
              unique opportunity to develop critical thinking skills and enhance
              their ability to solve complex problems. Focusing on subjects like
              science, technology, engineering, and mathematics, our STEM
              tutoring sessions are designed to challenge students and promote
              analytical thinking, helping them approach problems with
              creativity and logic.
            </p>
            <p className='mt-4 text-gray-700'>
              One of the key benefits of STEM tutoring is its hands-on approach,
              which includes practical experience in coding, programming, and
              robotics. These interactive learning opportunities allow students
              to apply theoretical knowledge to real-world scenarios, deepening
              their understanding and sparking interest in future STEM careers.
              By fostering problem-solving skills and technical expertise, STEM
              tutoring at Academy of Scholars prepares students to excel in both
              academic settings and the rapidly evolving tech-driven world.
            </p>
          </div>
          <div className='md:w-1/2 flex justify-center mt-6 md:mt-0'>
            <Image
              width={690}
              height={400}
              src='/images/stem.jpg'
              alt='About Us'
              className='rounded-lg shadow-lg w-full max-w-md'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default withHero(STEM, {
  title: 'STEM',
  description: 'We provide STEM',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

import withHero from '@/components/hoc/withHero'

import UniversitiesLogo from '@/components/UniversitiesLogo'
import Image from 'next/image'

export const metadata = {
  title: 'Regular Tutoring',
  description: '',
}

const RegularTutoring = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2'>
            <h1 className='text-4xl font-bold mt-6'>
              Academy of Scholar&apos;s Regular Tutoring
            </h1>
            <p className='mt-4 text-gray-700'>
              At Academy of Scholars, regular tutoring is an essential part of
              the academic support system, offering both online and virtual
              tutoring sessions to cater to students’ diverse needs. These
              tutoring services provide personalized attention and guidance in
              various subjects, allowing students to strengthen their
              understanding of the material, clarify doubts, and enhance their
              learning experience. Whether students need help with specific
              topics or are looking to boost their overall grades, the online
              and virtual tutoring options offer the flexibility to schedule
              sessions at convenient times, ensuring continuous support. By
              working closely with experienced tutors, students can improve
              their academic performance, build confidence, and ultimately
              achieve their educational goals. This tailored approach not only
              helps students excel in their current coursework but also prepares
              them for future academic challenges, making a significant impact
              on their overall academic success.
            </p>
          </div>
          <div className='md:w-1/2 flex justify-center mt-6 md:mt-0'>
            <Image
              width={690}
              height={400}
              src='/images/regular-tutoring.jpg'
              alt='About Us'
              className='rounded-lg shadow-lg w-full max-w-md'
            />
          </div>
        </div>
      </section>

      <UniversitiesLogo />
    </div>
  )
}

export default withHero(RegularTutoring, {
  title: 'Regular Tutoring',
  description: 'We provide Regular Tutoring',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

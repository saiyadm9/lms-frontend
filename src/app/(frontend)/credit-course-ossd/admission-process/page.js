import withHero from '@/components/hoc/withHero'

import UniversitiesLogo from '@/components/UniversitiesLogo'
import Image from 'next/image'

export const metadata = {
  title: 'Our Admission Process',
  description: '',
}

const AdmissionProcess = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-x-6 text-justify'>
          <div className='md:col-span-2'>
            <h1 className='text-4xl font-bold mt-6'>Our Admission Process</h1>
            <p className='mt-4 text-gray-700'>
              At Academy of Scholars, the credit courses and OSSD admission
              process is designed to provide students with a comprehensive and
              personalized path to academic success. Our experienced advisors
              work closely with each student to help them select the right
              courses aligned with their academic interests and future
              university goals. Whether students aim to pursue studies in
              science, business, the arts, or other fields, our advisors ensure
              they choose the courses that best support their university
              aspirations and meet the requirements of the Ontario Secondary
              School Diploma (OSSD). This personalized guidance helps students
              stay on track with their academic progression, making sure they
              meet the prerequisites for their desired university programs. The
              advisory support not only assists with course selection but also
              offers ongoing help with university applications, enhancing
              students’ competitiveness and increasing their chances of
              admission to top universities in Canada and abroad.
            </p>
          </div>
          <div className='md:col-span-1 flex justify-center mt-6 md:mt-0'>
            <Image
              width={690}
              height={400}
              src='/images/student-thinking.jpg'
              alt='About Us'
              className='rounded-lg shadow-lg w-full max-w-md'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default withHero(AdmissionProcess, {
  title: 'Admission Process',
  description: 'Know Our Admission Process',
  bgGradient: 'rgb(0 33 38 / 55%)',
})

import withHero from '@/components/hoc/withHero'
import Image from 'next/image'

export const metadata = {
  title: 'Earn Your OSSD from Anywhere in the World!',
  description: '',
}

const InterNationalStudents = () => {
  return (
    <div>
      <section className='py-12 px-10'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-x-6'>
          <div className='md:col-span-2'>
            <h1 className='text-4xl font-bold mt-6'>
              Earn Your OSSD from Anywhere in the World!
            </h1>
            <p className='mt-6 text-gray-800 text-justify'>
              Unlock endless opportunities with a globally recognized Ontario
              Secondary School Diploma (OSSD) from Academy of Scholars! As an
              inspected private school in Ontario, we offer flexible and
              high-quality online credit courses designed to prepare
              international students for admission to top universities in
              Canada, the U.S., and worldwide. Our OSSD program provides a
              Ministry of Education-approved curriculum, expert teachers, and
              personalized support to help you succeed academically and achieve
              your career goals.
            </p>
            <p className='mt-4 text-gray-700'>
              Whether you're looking to enhance your university applications,
              improve your English proficiency, or experience a Canadian
              education from your home country, Academy of Scholars is your
              gateway to success. Join us today and take the first step toward a
              brighter future!
            </p>
          </div>

          <div className='md:col-span-1 flex justify-center mt-6 md:mt-0'>
            <Image
              src='/images/international-students.jpg'
              alt='International Students'
              width={500}
              height={500}
              className='rounded-xl shadow-lg w-full object-cover'
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default withHero(InterNationalStudents, {
  title: 'International Students',
  description: 'Study supports for students anywhere in the world',
  bgGradient: 'rgb(0 33 38 / 55%)',
})

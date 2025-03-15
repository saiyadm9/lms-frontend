import withHero from '@/components/hoc/withHero'
import Reviews from '@/components/Reviews'
import UniversitiesLogo from '@/components/UniversitiesLogo'
import Image from 'next/image'

const AboutUsPage = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto flex flex-col md:flex-row items-center'>
          <div className='md:w-1/2'>
            <h1 className='text-3xl font-bold mt-6'>
              About Academy of Scholars
            </h1>
            <p className='mt-4 text-gray-700'>
              At Academy of Scholars, we are committed to providing a
              high-quality, student-centered education that fosters academic
              excellence, personal growth, and lifelong success. As a private
              school in Ontario, we offer a dynamic learning environment where
              students receive individualized support, innovative teaching
              methods, and a well-rounded curriculum that prepares them for
              future academic and career opportunities. Our dedicated educators
              inspire students to develop critical thinking skills, confidence,
              and a strong sense of responsibility in a supportive and inclusive
              community. At Academy of Scholars, we believe in nurturing each
              student’s unique potential, ensuring they are well-equipped to
              achieve their goals and thrive in an ever-changing world.
            </p>
          </div>
          <div className='md:w-1/2 flex justify-center mt-6 md:mt-0'>
            <Image
              width={690}
              height={400}
              src='/images/students-inside-classroom.jpg'
              alt='About Us'
              className='rounded-lg shadow-lg w-full max-w-md'
            />
          </div>
        </div>
      </section>

      <UniversitiesLogo />
      <Reviews />
    </div>
  )
}

export default withHero(AboutUsPage, {
  title: 'About Us',
  description: 'We provide top-notch services to help you grow.',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

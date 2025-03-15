import withHero from '@/components/hoc/withHero'
import Reviews from '@/components/Reviews'
import UniversitiesLogo from '@/components/UniversitiesLogo'

export const metadata = {
  title: 'Earn Your OSSD from Anywhere in the World!',
  description: '',
}

const InterNationalStudents = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold mt-6'>
            Earn Your OSSD from Anywhere in the World!
          </h1>
          <p className='mt-4 text-gray-700'>
            Unlock endless opportunities with a globally recognized Ontario
            Secondary School Diploma (OSSD) from Academy of Scholars! As an
            inspected private school in Ontario, we offer flexible and
            high-quality online credit courses designed to prepare international
            students for admission to top universities in Canada, the U.S., and
            worldwide. Our OSSD program provides a Ministry of
            Education-approved curriculum, expert teachers, and personalized
            support to help you succeed academically and achieve your career
            goals. Whether you're looking to enhance your university
            applications, improve your English proficiency, or experience a
            Canadian education from your home country, Academy of Scholars is
            your gateway to success. Join us today and take the first step
            toward a brighter future!
          </p>
        </div>
      </section>

      <UniversitiesLogo />
      <Reviews />
    </div>
  )
}

export default withHero(InterNationalStudents, {
  title: 'International Students',
  description: 'study supports for students anywhere in the world',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

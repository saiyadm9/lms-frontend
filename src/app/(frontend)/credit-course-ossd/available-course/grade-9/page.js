import withHero from '@/components/hoc/withHero'
import Reviews from '@/components/Reviews'
import UniversitiesLogo from '@/components/UniversitiesLogo'

export const metadata = {
  title: 'Achieve Academic Excellence with Expert GradeNine!',
  description: '',
}

const GradeNine = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold mt-6'>Grade 9 Courses</h1>
        </div>
      </section>

      <UniversitiesLogo />
      <Reviews />
    </div>
  )
}

export default withHero(GradeNine, {
  title: 'Grade 9',
  description: 'Courses for Grade 9 Students',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

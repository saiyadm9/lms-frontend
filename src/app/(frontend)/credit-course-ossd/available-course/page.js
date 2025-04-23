import AvaliableCourse from '@/components/AvaliableCourse'
import withHero from '@/components/hoc/withHero'
export const metadata = {
  title: 'All Available Courses',
  description: '',
}

const AvailableCourses = () => {
  return (
    <div>
      <section className='bg-[#fcfcfc]  px-10'>
        <div className='container mx-auto'>
          <h1 className='text-4xl font-bold my-6 text-center py-12 '>
            Available All Courses
          </h1>
          <AvaliableCourse />
        </div>
      </section>
    </div>
  )
}

export default withHero(AvailableCourses, {
  title: 'All Courses',
  description: 'All Courses For Students',
  bgGradient: 'rgb(0 33 38 / 55%)',
})

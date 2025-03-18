import withHero from '@/components/hoc/withHero'
import Reviews from '@/components/Reviews'
import UniversitiesLogo from '@/components/UniversitiesLogo'

export const metadata = {
  title: 'Learning Methods of Academy of Scholars',
  description: '',
}

const LearningMethods = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold mt-6'>
            Academy of Scholar&apos;s Learning Methods
          </h1>
          <p className='mt-4 text-gray-700'>
            At Academy of Scholars, both virtual and online learning are central
            to the school&apos;s innovative approach to education, offering
            students flexibility and interactivity in their studies. Virtual
            learning provides an immersive experience with live, instructor-led
            classes, allowing students to actively participate in real-time
            discussions, ask questions, and receive immediate feedback, creating
            a dynamic and collaborative learning environment. Online learning,
            on the other hand, offers 24/7 access to course materials, enabling
            students to study at their own pace and fit their learning around
            other commitments. The combination of these methods gives students
            the best of both worlds: the flexibility to learn anytime, anywhere,
            alongside the interactive, real-time connection with instructors and
            peers. These advantages foster independent learning, enhance time
            management skills, and provide continuous support, ensuring that
            students not only achieve academic success but also develop valuable
            skills that will serve them well in their future careers.
          </p>
        </div>
      </section>

      <UniversitiesLogo />
      <Reviews />
    </div>
  )
}

export default withHero(LearningMethods, {
  title: 'Learning Methods',
  description: 'Virtual and Online Learning Systems for Academy of Scholars',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

import withHero from '@/components/hoc/withHero'

import UniversitiesLogo from '@/components/UniversitiesLogo'

export const metadata = {
  title: 'Online Learning System of Academy of Scholars',
  description: '',
}

const OnlineLearning = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold mt-6'>
            Academy of Scholar&apos;s Online Learning System
          </h1>
          <p className='mt-4 text-gray-700'>
            At Academy of Scholars, online learning is designed to provide
            students with a flexible, engaging, and highly supportive
            educational experience. With 24/7 access to course materials,
            students can learn at their own pace, allowing them to manage their
            time effectively and balance other commitments. The interactive
            nature of the online platform enhances student engagement through
            multimedia resources, quizzes, and live sessions, catering to
            various learning styles. One of the key advantages of online
            learning at Academy of Scholars is the continuous support provided
            by experienced instructors, ensuring that students receive
            personalized guidance and feedback. This method also encourages
            independent learning, helping students develop strong time
            management and self-discipline skills. Furthermore, the
            accessibility of online learning means that students can attend
            classes from anywhere, breaking down geographical barriers and
            making high-quality education available to both local and
            international students.
          </p>
        </div>
      </section>
    </div>
  )
}

export default withHero(OnlineLearning, {
  title: 'Online Learning',
  description: 'Virtual Learning System of Academy of Scholars',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

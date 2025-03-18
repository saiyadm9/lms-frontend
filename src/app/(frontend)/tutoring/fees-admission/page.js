import withHero from '@/components/hoc/withHero'
import Reviews from '@/components/Reviews'
import UniversitiesLogo from '@/components/UniversitiesLogo'

export const metadata = {
  title: 'Fees and admission process of Academy of Scholars',
  description: '',
}

const FeesAndAdmission = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold mt-6'>
            Academy of Scholar&apos;s Fees and Admission Process
          </h1>
          <p className='mt-4 text-gray-700'>
            At Academy of Scholars, we offer competitive pricing for our
            tutoring services, ensuring that students receive high-quality
            academic support at an affordable rate compared to the market.
          </p>
          <p className='mt-4 text-gray-700'>
            We understand that financial circumstances can vary, which is why we
            offer discounts for students with financial need, making our
            services more accessible to everyone.
          </p>
          <p className='mt-4 text-gray-700'>
            Additionally, we provide customized pricing options tailored to meet
            the specific needs and expectations of each student, ensuring
            flexibility and value.
          </p>
          <p className='mt-4 text-gray-700 underline'>
            For more information or to discuss your personalized fees, please
            don&apos;t hesitate to contact us, and our team will be happy to
            assist you.
          </p>
        </div>
      </section>

      <UniversitiesLogo />
      <Reviews />
    </div>
  )
}

export default withHero(FeesAndAdmission, {
  title: 'Fees and Admission Process',
  description: 'Fees and admission process of Academy of Scholars',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

import withHero from '@/components/hoc/withHero'
import UniversitiesLogo from '@/components/UniversitiesLogo'

export const metadata = {
  title: 'Fees and admission process of Academy of Scholars',
  description: '',
}

const FeesAndAdmission = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto items-start gap-x-1'>
          <div>
            <h1 className='text-4xl font-bold'>Fees and Admission Process</h1>
            <p className='mt-4 text-gray-700 text-justify'>
              At Academy of Scholars, we offer competitive pricing for our
              tutoring services, ensuring that students receive high-quality
              academic support at an affordable rate compared to the market.
            </p>
            <p className='mt-4 text-gray-700 text-justify'>
              We understand that financial circumstances can vary, which is why
              we offer discounts for students with financial need, making our
              services more accessible to everyone.
            </p>
            <p className='mt-4 text-gray-700 text-justify'>
              Additionally, we provide customized pricing options tailored to
              meet the specific needs and expectations of each student, ensuring
              flexibility and value.
            </p>
            <p className='mt-4 text-gray-700 underline text-justify'>
              For more information or to discuss your personalized fees, please
              don&apos;t hesitate to contact us, and our team will be happy to
              assist you.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default withHero(FeesAndAdmission, {
  title: 'Fees and Admission Process',
  description: ' ',
  bgGradient: 'rgb(0 33 38 / 55%)',
})

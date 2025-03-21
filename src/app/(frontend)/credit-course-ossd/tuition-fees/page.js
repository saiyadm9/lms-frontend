import withHero from '@/components/hoc/withHero'

import UniversitiesLogo from '@/components/UniversitiesLogo'

export const metadata = {
  title: 'Tution Fees of Academy of Scholars',
  description: '',
}

const TutionFees = () => {
  return (
    <div>
      <section className='bg-[#F3F4F6] py-12 px-10'>
        <div className='container mx-auto text-center'>
          <h1 className='text-4xl font-bold mt-6'>
            Academy of Scholar&apos;s Tution Fees
          </h1>
          <p className='mt-4 text-gray-700'>
            At Academy of Scholars, we offer competitive pricing for credit
            courses and the Ontario Secondary School Diploma (OSSD), ensuring
            students receive exceptional value compared to market rates.
          </p>
          <p className='mt-4 text-gray-700'>
            We have different pricing structures for local and international
            students to accommodate varying needs, and we also offer discounts
            for students with financial need, making our programs more
            accessible to a wider range of learners.
          </p>
          <p className='mt-4 text-gray-700'>
            Additionally, we provide customized pricing options that cater to
            the specific needs and expectations of each student, ensuring
            flexibility and affordability.
          </p>
          <p className='mt-4 text-gray-700 underline'>
            For more information or to discuss your personalized fees, please
            contact us, and our team will be happy to assist you in finding the
            best option for your educational goals.
          </p>
        </div>
      </section>
    </div>
  )
}

export default withHero(TutionFees, {
  title: 'Tution Fees',
  description: 'Tution of Academy of Scholars',
  bgGradient: 'linear-gradient(to top, #29DBD8, #141A6B)',
})

import ContactUsForm from '@/components/ContactUsForm'
import withHero from '@/components/hoc/withHero'
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'

export const metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Academy of Scholars',
}

const Contact = () => {
  return (
    <div className='bg-gradient-to-b from-[#F3F4F6] to-[#E5E7EB] py-16 px-6 sm:px-10'>
      <div className='container mx-auto'>
        <h1 className='text-5xl font-bold text-center text-gray-900 mb-12'>
          Contact Us
        </h1>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto'>
          <div className='bg-white p-8 rounded-xl shadow-lg space-y-6'>
            <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
              Our Contact Details
            </h2>

            {/* Canada Office Address */}
            <div className='flex items-start space-x-4'>
              <FaMapMarkerAlt className='text-indigo-600 text-2xl flex-shrink-0' />
              <div>
                <p className='font-bold text-lg text-gray-900'>Canada Office</p>
                <p className='text-gray-600'>Toronto, ON. Canada.</p>
              </div>
            </div>

            {/* Service Area */}
            <div className='flex items-start space-x-4'>
              <FaMapMarkerAlt className='text-indigo-600 text-2xl flex-shrink-0' />
              <div>
                <p className='font-bold text-lg text-gray-900'>Service Area</p>
                <p className='text-gray-600'>Ontario, Canada.</p>
                <p className='text-gray-600'>
                  And globally any countries (for online course & OSSD)
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className='flex items-start space-x-4'>
              <FaPhoneAlt className='text-indigo-600 text-2xl flex-shrink-0' />
              <div>
                <p className='font-bold text-lg text-gray-900'>Mobile</p>
                <p className='text-gray-600'>
                  <a
                    href='tel:+16479976108'
                    className='text-indigo-600 hover:underline'
                  >
                    +1 (647) 997 6108
                  </a>
                </p>
                <p className='text-gray-600'>
                  <a
                    href='tel:+14165598127'
                    className='text-indigo-600 hover:underline'
                  >
                    +1 (416) 559 8127
                  </a>
                </p>
              </div>
            </div>

            {/* Email Addresses */}
            <div className='flex items-start space-x-4'>
              <FaEnvelope className='text-indigo-600 text-2xl flex-shrink-0' />
              <div>
                <p className='font-bold text-lg text-gray-900'>Email</p>
                <p className='text-gray-600'>
                  <a
                    href='mailto:info@academyofsinc.ca'
                    className='text-indigo-600 hover:underline'
                  >
                    info@academyofsinc.ca
                  </a>
                </p>
                <p className='text-gray-600'>
                  <a
                    href='mailto:zhasib@academyofsinc.ca'
                    className='text-indigo-600 hover:underline'
                  >
                    zhasib@academyofsinc.ca
                  </a>
                </p>
              </div>
            </div>

            {/* China Office Address */}
            <div className='flex items-start space-x-4'>
              <FaMapMarkerAlt className='text-indigo-600 text-2xl flex-shrink-0' />
              <div>
                <p className='font-bold text-lg text-gray-900'>China Office</p>
                <p className='text-gray-600'>
                  <a
                    href='tel:+16478388245'
                    className='text-indigo-600 hover:underline'
                  >
                    +1 (647) 838 8245
                  </a>
                  <br />
                  <a
                    href='tel:8613817004868'
                    className='text-indigo-600 hover:underline'
                  >
                    86-13817004868
                  </a>
                  <br />
                  <a
                    href='mailto:shirleyliu25@hotmail.com'
                    className='text-indigo-600 hover:underline'
                  >
                    shirleyliu25@hotmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <ContactUsForm />
        </div>

        <div className='mt-12 max-w-6xl mx-auto'>
          <h2 className='text-2xl font-semibold text-gray-900 mb-6'>
            Our Location
          </h2>
          <div className='rounded-xl overflow-hidden shadow-lg'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2881.091144836497!2d-79.24746668449999!3d43.76172617911879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d1a9d1b1b1b1%3A0x1b1b1b1b1b1b1b!2s3464%20Kingston%20Rd%2C%20Scarborough%2C%20ON%20M1M%201R5%2C%20Canada!5e0!3m2!1sen!2sus!4v1633026000000!5m2!1sen!2sus'
              width='100%'
              height='450'
              style={{ border: 0 }}
              allowFullScreen
              loading='lazy'
              title='Academy of Scholars Location'
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withHero(Contact, {
  title: 'Get in Touch',
  description: 'We’d love to hear from you.',
  bgGradient: 'rgb(0 33 38 / 55%)',
})

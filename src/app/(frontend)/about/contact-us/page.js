import ContactUsForm from "@/components/ContactUsForm";
import withHero from "@/components/hoc/withHero";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Academy of Scholars",
};

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-[#F3F4F6] to-[#E5E7EB] py-16 px-6 sm:px-10">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
          Contact Us
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Our Contact Details
            </h2>

            {/* Canada Office Address */}
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-indigo-600 text-2xl flex-shrink-0" />
              <div>
                <p className="font-bold text-lg text-gray-900">Canada Office</p>
                <p className="text-gray-600">Toronto, ON. Canada.</p>
              </div>
            </div>

            {/* Service Area */}
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-indigo-600 text-2xl flex-shrink-0" />
              <div>
                <p className="font-bold text-lg text-gray-900">Service Area</p>
                <p className="text-gray-600">
                  109 Wales Ave, Markham, ON L3P 3K3
                </p>
                <p className="text-gray-600">
                  And globally any countries (for online course & OSSD)
                </p>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start space-x-4">
              <FaPhoneAlt className="text-indigo-600 text-2xl flex-shrink-0" />
              <div>
                <p className="font-bold text-lg text-gray-900">Mobile</p>
                <p className="text-gray-600">
                  <a
                    href="tel:+16479976108"
                    className="text-indigo-600 hover:underline"
                  >
                    +1 (647) 997 6108
                  </a>
                </p>
                <p className="text-gray-600">
                  <a
                    href="tel:+14165598127"
                    className="text-indigo-600 hover:underline"
                  >
                    +1 (416) 559 8127
                  </a>
                </p>
              </div>
            </div>

            {/* Email Addresses */}
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-indigo-600 text-2xl flex-shrink-0" />
              <div>
                <p className="font-bold text-lg text-gray-900">Email</p>
                <p className="text-gray-600">
                  <a
                    href="mailto:info@academyofsinc.ca"
                    className="text-indigo-600 hover:underline"
                  >
                    info@academyofsinc.ca
                  </a>
                </p>
                <p className="text-gray-600">
                  <a
                    href="mailto:zhasib@academyofsinc.ca"
                    className="text-indigo-600 hover:underline"
                  >
                    zhasib@academyofsinc.ca
                  </a>
                </p>
              </div>
            </div>

            {/* China Office Address */}
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-indigo-600 text-2xl flex-shrink-0" />
              <div>
                <p className="font-bold text-lg text-gray-900">BD Office</p>
                <p className="text-gray-600">
                  <a
                    href="tel:+880 1911 09 20 99"
                    className="text-indigo-600 hover:underline"
                  >
                    +8801911092099
                  </a>
                  <br />
                  <a
                    href="tel:+880 1891 15 03 70"
                    className="text-indigo-600 hover:underline"
                  >
                    +8801891150370
                  </a>
                </p>
              </div>
            </div>
          </div>
          <ContactUsForm />
        </div>

        <div className="mt-12 max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            Our Location
          </h2>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2875.373340597466!2d-79.26393262345957!3d43.889533837112936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d626b0ac4f6b%3A0x4f02c616e1df637d!2s109%20Wales%20Ave%2C%20Markham%2C%20ON%20L3P%203K3%2C%20Canada!5e0!3m2!1sen!2sbd!4v1747489548567!5m2!1sen!2sbd"
              width="100%"
              height="450"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withHero(Contact, {
  title: "Get in Touch",
  description: "We’d love to hear from you.",
  bgGradient: "rgb(0 33 38 / 55%)",
});

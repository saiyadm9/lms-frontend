import { FaLinkedinIn, FaTwitter, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

const MeetTheTeam = () => {
  const teamMembers = [
    {
      name: "Masum Mustafa",
      role: "P.Eng (Electrical Engineering), CSM, PMP",
      image: "/images/masum-mustofa.jpg",
      bio: "Experienced electrical engineer and project manager.",
    },
    {
      name: "Zannatul Moiet Hasib",
      role: "Principal",
      image: "/images/jannatul-moet.jpeg",
      bio: "P.Eng, PMP , MBA",
    },
    {
      name: "WEI (Shirley) LIU",
      role: "Marketing Director of International Student (China)",
      image: "/images/shirley.jpg",
      bio: "Marketing expert specializing in international student outreach.",
    },
  ];

  return (
    <section className="bg-white py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Meet Our Talented Team
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg">
            We're a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-xl mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={750}
                  className="w-full aspect-[4/5] object-cover object-center transform group-hover:scale-105 transition duration-300 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <FaLinkedinIn />
                    </a>
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <FaTwitter />
                    </a>
                    <a
                      href="#"
                      className="bg-white text-indigo-600 p-2 rounded-full hover:bg-indigo-600 hover:text-white transition-colors duration-200"
                    >
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-indigo-600 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;

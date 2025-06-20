import withHero from "@/components/hoc/withHero";
import Image from "next/image";
import { SiTicktick } from "react-icons/si";

export const metadata = {
  title: "Learning Methods of Academy of Scholars",
  description: "",
};

const LearningMethods = () => {
  return (
    <div>
      <section className="bg-[#F3F4F6] py-12 px-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 items-center gap-x-6">
          <div className="md:col-span-2">
            <h1 className="text-4xl font-bold mt-6">Learning Methods</h1>
            <p className="mt-4 text-gray-700 text-justify">
              At Academy of Scholars, both virtual and online learning are
              central to the school&apos;s innovative approach to education,
              offering students flexibility and interactivity in their studies.
              Virtual learning provides an immersive experience with live,
              instructor-led classes, allowing students to actively participate
              in real-time discussions, ask questions, and receive immediate
              feedback, creating a dynamic and collaborative learning
              environment. Online learning, on the other hand, offers 24/7
              access to course materials, enabling students to study at their
              own pace and fit their learning around other commitments. The
              combination of these methods gives students the best of both
              worlds: the flexibility to learn anytime, anywhere, alongside the
              interactive, real-time connection with instructors and peers.
              These advantages foster independent learning, enhance time
              management skills, and provide continuous support, ensuring that
              students not only achieve academic success but also develop
              valuable skills that will serve them well in their future careers.
            </p>
          </div>

          <div className="md:col-span-1 flex justify-center mt-6 md:mt-0">
            <Image
              src="/images/learning-method-image.jpg"
              alt="Learning Methods Illustration"
              width={500}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default withHero(LearningMethods, {
  title: "Learning Methods",
  description: " ",
  bgGradient: "rgb(0 33 38 / 55%)",
});

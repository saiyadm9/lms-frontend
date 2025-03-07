import withHero from "@/components/hoc/withHero";

const availableCourse = () => {
  return (
    <div className="container mx-auto px-6">
      <h1 className="text-3xl font-bold mt-6">our availableCourse</h1>
      <p>We provide top-notch services to help you grow.</p>
    </div>
  );
};

export default withHero(availableCourse, {
  title: "Welcome to our availableCourse",
  description: "We provide top-notch services to help you grow.",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});

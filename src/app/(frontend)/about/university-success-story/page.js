import withHero from "@/components/hoc/withHero";

const UniversitySuccessStory = () => {
  return (
    <div className="container mx-auto px-6">
      <h1 className="text-3xl font-bold mt-6">our university success story</h1>
      <p>We provide top-notch services to help you grow.</p>
    </div>
  );
};

export default withHero(UniversitySuccessStory, {
  title: "Welcome to our university success story",
  description: "We provide top-notch services to help you grow.",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});

import withHero from "@/components/hoc/withHero";

const RegularTutoring = () => {
  return (
    <div>
      <h1>Regular Tutoring</h1>
    </div>
  );
};

export default withHero(RegularTutoring, {
  title: "Welcome to Regular Tutoring",
  description: "We provide top-notch services to help you grow.",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});

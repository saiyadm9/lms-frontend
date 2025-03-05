import withHero from "@/components/hoc/withHero";

const Tutoring = () => {
  return (
    <div>
      <h1>tutoring</h1>
    </div>
  );
};

export default withHero(Tutoring, {
  title: "Welcome to tutoring",
  description: "We provide top-notch services to help you grow.",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});

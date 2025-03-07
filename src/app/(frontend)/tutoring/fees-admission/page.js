import withHero from "@/components/hoc/withHero";

const feesAndAdmission = () => {
  return (
    <div>
      <h1>feesAndAdmission</h1>
    </div>
  );
};

export default withHero(feesAndAdmission, {
  title: "Welcome to feesAndAdmission",
  description: "We provide top-notch services to help you grow.",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});

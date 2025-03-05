import withHero from "@/components/hoc/withHero";

const CoreMembers = () => {
  return (
    <div>
      <h1>CoreMembers</h1>
    </div>
  );
};

export default withHero(CoreMembers, {
  title: "Welcome to CoreMembers",
  description: "We provide top-notch services to help you grow.",
  bgGradient: "linear-gradient(to top, #29DBD8, #141A6B)",
});

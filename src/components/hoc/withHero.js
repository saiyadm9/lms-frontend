import Breadcrumbs from "../Breadcrumbs";
import HeroSection from "../ui/HeroSection";

const withHero = (WrappedComponent, heroProps) => {
  return function HeroWrapper(props) {
    return (
      <div>
        <HeroSection {...heroProps} />
        <Breadcrumbs />
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withHero;

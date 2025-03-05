import Categories from "@/components/CourseCategory";
import categoriesData from "../../../data/categories";
import AllCourses from "@/components/AllCourses";
import MeetTheTeam from "@/components/MeetTheTeam";
import LMSStats from "@/components/LMSStats ";
import LmsFaq from "@/components/LmsFaq";
import Reviews from "@/components/Reviews";
import AfterHero from "@/components/AfterHero";
import HeroSlides from "@/components/HeroSlides";

const Home = () => {
  return (
    <div>
      <HeroSlides />
      <AfterHero />
      <Categories categories={categoriesData} />
      <AllCourses />
      <MeetTheTeam />
      <LMSStats />
      <LmsFaq />
      <Reviews />
    </div>
  );
};

// Wrap Home with withHero and pass hero data
export default Home;

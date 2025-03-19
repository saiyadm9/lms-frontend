import Categories from '@/components/CourseCategory'
import categoriesData from '../../../data/categories'
import AllCourses from '@/components/AllCourses'
import MeetTheTeam from '@/components/MeetTheTeam'
import LMSStats from '@/components/LMSStats '
import LmsFaq from '@/components/LmsFaq'

import AfterHero from '@/components/AfterHero'
import HeroSlides from '@/components/HeroSlides'
import UniversitiesLogo from '@/components/UniversitiesLogo'
import Gallery from '@/components/Gallery'

const Home = () => {
  return (
    <div>
      <HeroSlides />
      <AfterHero />
      <LMSStats />
      <Categories categories={categoriesData} />
      <AllCourses />
      <MeetTheTeam />
      <Gallery />
      <UniversitiesLogo />
    </div>
  )
}

// Wrap Home with withHero and pass hero data
export default Home
